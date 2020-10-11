import React from 'react';
import { Card, Nav, Col, Row, Image } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import './style.css';
import applications from './portfolio.js';

const Portfolio = () => {
	const portfolioList = applications.map((app, i) => {
		return (
			<Card
				key={i}
				style={{
					marginTop: '1em',
				}}
			>
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
