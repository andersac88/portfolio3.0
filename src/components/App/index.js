import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import About from '../About';

const App = () => {
	const [height, setHeight] = useState();
	const ref = useRef();
	useEffect(() => {
		setHeight(ref.current.offsetHeight);
	}, [height]);

	return (
		<Container fluid>
			<BrowserRouter>
				<Row
					className="justify-content-center"
					style={{ marginTop: '8%', marginBottom: '5%' }}
				>
					<Col className="col head" s={1} md={1} style={{ paddingRight: '0' }}>
						<Header />
					</Col>
					<Col className="col info" s={1} md={5} ref={ref}>
						<Home />
					</Col>

					<Col
						className="col info"
						md={5}
						s={1}
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
			</BrowserRouter>
		</Container>
	);
};

export default App;
