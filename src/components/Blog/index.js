import React from 'react';
import { Card } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import blogs from './blog.js';

const Blog = () => {
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
