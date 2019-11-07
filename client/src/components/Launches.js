import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

class Launches extends Component {
	render() {
		return (
			<div className="launchContent">
				<h2 style={{ color: "#FF9703" }}>Launches</h2>
				<Query query={LAUNCHES_QUERY}>
					{({ loading, error, data }) => {
						if (loading)
							return (
								<h4>
									Loading...
									<div className="spinner-border text-success" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								</h4>
							);

						if (error) console.log(error);

						return (
							<div>
								{data.launches.map(launch => (
									<LaunchItem key={launch.flight_number} launch={launch} />
								))}
							</div>
						);
					}}
				</Query>
			</div>
		);
	}
}
export default Launches;
