import React, { useState } from "react"
import { Container, Row } from "react-bootstrap"

import RoomTile from "./RoomTile"

const LocationTile = (props) => {
	let roomsList = null

	if (props.location.rooms.length > 0) {
		roomsList = props.location.rooms.map((room) => {
			return <RoomTile room={room} />
		})
	}
	
	return (
		<Container className="component-container">
			<Row className="project-row">
				<h1>{props.location.locationName}</h1>
			</Row>
			<Row>{roomsList}</Row>
		</Container>
	)
}

export default LocationTile
