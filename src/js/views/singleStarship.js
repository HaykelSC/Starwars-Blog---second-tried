import React, { useEffect, useContext } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";

export const SingleStarship = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let url = `https://www.swapi.tech/api/starships/${params.uid}`;

	const shipStore = store.starShip.filter(ship => ship.url == url);
	useEffect(() => actions.starShipDescription(url), []);

	return (
		<Container>
			<Jumbotron className="jumbo">
				<div className="d-flex justify-content-between">
					<img src="https://fakeimg.pl/845x360" width="400" />
					<div className="text">
						{shipStore[0] ? <h1 className="display-4">{shipStore[0].name}</h1> : ""}
						<p>
							lorem ipsum
							shduoapbsdobajlboasnocbneajbocuahondjawbdcboushadanscoiehrhqwncjbsud2034u12bdjbasdhqpsdhaisbdobasohdfsfasfasassadhksbd3e023jnjdbsbd;oasubdq
							wcbasouhahsdcsbadsad.
						</p>
					</div>
				</div>
				<hr className="my-4 hr" />
				{shipStore[0] ? (
					<Container>
						<Row className="info">
							<Col sm={2}>Model: {shipStore[0].model}</Col>
							<Col sm={2}>Class: {shipStore[0].starship_class}</Col>
							<Col sm={2}>Passengers: {shipStore[0].passengers}</Col>
							<Col sm={2}>Length {shipStore[0].length}</Col>
							<Col sm={2}>Crew: {shipStore[0].crew}</Col>
							<Col sm={2}>Max atmosphere speed: {shipStore[0].max_atmosphering_speed}</Col>
						</Row>
					</Container>
				) : (
					""
				)}
			</Jumbotron>
		</Container>
	);
};
