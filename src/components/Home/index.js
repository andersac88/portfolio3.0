import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import './style.css';
import Simpsonized from '../../images/Simpsonized.jpg';

const Home = () => {
	const ta = {
		textAlign: 'center',
		padding: '0em 0.5em',
	};

	return (
		<div className="home">
			<img src={Simpsonized} alt="Simpsonsized Andrew"></img>
			<h1 style={ta}>Hi, I'm Andrew</h1>
			<br />
			<h5 style={ta}>
				I'm a junior web developer out of Chicago. I have a passion for
				tinkering and enjoy solving complex problems.
			</h5>
			<br />
			<h5 style={ta}>
				I'm also a recovering political junkie with and keen interest in world
				history.
			</h5>

			<div className="banner">
				<h4>
					email: <a href="mailto: andersac88@gmail.com">andersac88@gmail.com</a>
				</h4>
			</div>
			<div className="socialBanner">
				<Link to="/modal" className="item">
					<FontAwesomeIcon icon={faFacebook} />
				</Link>
				<a href="https://github.com/andersac88/">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://www.linkedin.com/in/andrewcandersen">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		</div>
	);
};

export default Home;
