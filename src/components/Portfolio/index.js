import React, { useState, useEffect } from 'react';
import { Card, Nav, Col, Row, Image } from 'react-bootstrap';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const Portfolio = () => {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const result = async () => {
			const response = await axios.get('/api/portfolio');
			setApps(response.data);
			console.log(response.data);
		};
		result();
	}, []);

	const portfolioList = apps.map((app, i) => {
		return (
			<Card key={i} bg="light" style={{ marginTop: '1em' }}>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Nav.Link href="#first">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href={app.codeURL}>See Code</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								href={app.appURL === '#' ? '#disabled' : app.appURL}
								disabled={app.appURL === '#' ? true : false}
							>
								Try App
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>{app.App}</Card.Title>
					<Row>
						<Col>
							<Image src={require(`../../images/${app.Image}.png`)} thumbnail />
						</Col>
						<Col>
							<Card.Text> {ReactHtmlParser(app.Details)}</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Portfolio</h1>
			{portfolioList}
		</div>
	);
};

export default Portfolio;
