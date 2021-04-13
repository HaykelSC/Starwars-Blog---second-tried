import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row>
				<Col>
					<nav className="navbar navbar-dark bg-dark mb-3">
						<Link to="/">
							<span className="navbar-brand m-2 h1">
								<img
									src="https://1000logos.net/wp-content/uploads/2017/06/StarWars-logo.png"
									width="90"
								/>
							</span>
						</Link>
						<div className="ml-auto">
							<Dropdown>
								<Dropdown.Toggle variant="primary" className="toggle">
									<div className="drp">
										Favorites <div className="drp counter">{store.favorites.length}</div>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{store.favorites ? (
										store.favorites.map((elem, i) => (
											<Dropdown.Item key={i} id={++i} title={elem.item}>
												{elem.item}
												<div id={i} onClick={() => actions.removeItem(i)}>
													<i className="fas fa-trash" />;
												</div>
											</Dropdown.Item>
										))
									) : (
										<span>Add Items</span>
									)}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
