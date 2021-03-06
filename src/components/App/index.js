import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import About from '../About';

const App = () => {
	const height = '855px';

	return (
		<Container fluid>
			<BrowserRouter>
				<Row
					className="justify-content-center"
					style={{ marginTop: '8%' }}
					sm={1}
					xs={1}
				>
					<Col className="col head" xl={1} md={10}>
						<Header />
					</Col>
					<Col className="col info" md={5}>
						<Home />
					</Col>

					<Col
						className="col info"
						md={5}
						style={{ height: height, maxHeight: height }}
					>
						<Switch>
							<Route
								path="/portfolio"
								exact
								render={(props) => <Portfolio {...props} height={height} />}
							/>
							<Route
								path="/blog"
								exact
								render={(props) => <Blog {...props} height={height} />}
							/>
							<Route
								path="/"
								exact
								render={(props) => <About {...props} height={height} />}
							/>
						</Switch>
					</Col>
				</Row>
				<Row style={{ height: '100px' }}></Row>
			</BrowserRouter>
		</Container>
	);
};

export default App;
