import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const result = async () => {
			const response = await axios.get('/api/blog');
			setBlogs(response.data);
			console.log(response.data);
		};
		result();
	}, []);

	const blogPosts = blogs.map((blog, i) => {
		return (
			<Card key={i} bg="light" style={{ marginTop: '1em' }}>
				<Card.Header>{blog.Date}</Card.Header>
				<Card.Body>
					<blockquote className="blockquote mb-0">
						{ReactHtmlParser(blog.Text)}
					</blockquote>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Blog</h1>
			{blogPosts}
		</div>
	);
};

export default Blog;
