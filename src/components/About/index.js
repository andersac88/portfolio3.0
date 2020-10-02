import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import file from '../../images/gravel.png';

const About = () => {
	/* Want to delay the rendering of this so that Home Component still establishes size; consider establshing state of visibile (or another css style) and have it reset to visible with a timeout function*/
	const resume = () => {
		return (
			<>
				<h1 style={{ textAlign: 'center' }}>About</h1>
				<Button variant="secondary" size="lg" block download href={file}>
					Download Andrew's Resume
				</Button>
				<hr />
				<p style={{ textAlign: 'justify' }}>
					I am Full Stack Web Developer with a background in Management and
					Customer Service with excellent skills in communication,
					collaboration, and project management. People-oriented problem solver
					with a life-long dedication to learning and technical advancement.
					Skilled in designing, building, and maintaining websites from
					conception to production. Ability to work in a diverse team
					environment to develop solutions and exceed expectations.
				</p>
				<hr />
				<p style={{ textAlign: 'center' }}>
					<span>
						<strong>Technical Skills</strong>
					</span>
					<br />
					Node.Js | Express | JavaScript | jQuery | React | Redux | GIT |
					MongoDB | MySQL | Firebase Handlebars | HTML | CSS | Bootstrap | Media
					Queries | APIs | Microsoft Suite | Heroku | OAuth
				</p>
				<hr />
				<div style={{ textAlign: 'center' }}>
					<strong>Experience</strong>
				</div>
				<div style={{ textAlign: 'left' }}>
					<Row>
						<Col sm={6}>
							<u>DV Trading LLC; Chicago, IL</u>
						</Col>
						<Col sm={6} style={{ textAlign: 'right' }}>
							April 2019 – July 2019
						</Col>
					</Row>
					Independent Contractor
					<br /> Employ coding to PHP application and utilize HTML | CSS styling
					to improve and merge departmental web applications providing better
					consistency and to streamline the process. <br />
					<br />
					<Row>
						<Col sm={6}>
							<u>Community Specialists; Chicago, IL</u>
						</Col>
						<Col sm={6} style={{ textAlign: 'right' }}>
							2013 – Present
						</Col>
					</Row>
					Assistant Property Manager
					<br /> Effectively collaborate with on-site staff and outside
					contractors/service providers to maintain common elements and ensure
					high-level resident satisfaction; winning an award for stellar
					customer service. Proficiently manage payroll, time-off requests,
					employee concerns and staff education for staff of 25 full and
					part-time employees.
				</div>
				<hr />

				<div style={{ textAlign: 'center' }}>
					<strong>Education </strong>
				</div>

				<p style={{ textAlign: 'left' }}>
					<u>
						Web Development | Coding Certificate: Northwestern University,
						Chicago, IL
					</u>{' '}
					<br />A 26-week intensive program focused on gaining web development
					skills in HTML, CSS, JQuery, JavaScript, MySQL Databases, MongoDB,
					Express, NodeJS and React. <br />
					<br />
					<u>Bachelors of Arts: Miami University, Oxford, OH</u>
					<br /> Major: Psychology, Zoology; Minor: Neuroscience
				</p>
				<hr />
				<div style={{ textAlign: 'center' }}>
					<strong>Professional Development & Certification</strong>
				</div>
				<p style={{ textAlign: 'left' }}>
					Modern React with Redux, Udemy Online course focused on the
					fundamental features of React and Redux
				</p>
			</>
		);
	};

	return <div className="container">{resume()}</div>;
};

export default About;
