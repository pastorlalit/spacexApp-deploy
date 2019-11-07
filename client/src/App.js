import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
	uri: "/graphql"
});
class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div>
						<Header></Header>
						<div className="container page-content">
							<p>
								{/* <button type="button" className="btn btn-outline-info">Info</button> */}
								<button type="button" className="btn btn-outline-success">
									Success
								</button>{" "}
								{/* <button type="button" className="btn btn-outline-warning">Warning</button> */}
								<button type="button" className="btn btn-outline-danger">
									Failed
								</button>
							</p>

							<Route exact path="/" component={Launches} />
							<Route exact path="/launch/:flight_number" component={Launch} />
						</div>
						<Footer></Footer>
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
