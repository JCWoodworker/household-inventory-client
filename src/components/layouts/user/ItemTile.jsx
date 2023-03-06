import React from "react"
import { Container, Row } from "react-bootstrap"

const ItemTile = (props) => {

	return (
			<Container>
				<Row className="project-row">
					<h1>
						{props.location.name} 
					</h1>
				</Row>
			</Container>
	)
}

export default ItemTile