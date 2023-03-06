import React from "react"
import { Container, Row } from "react-bootstrap"

const RoomTile = (props) => {
  
	return (
			<Container>
				<Row className="project-row">
					<h3>{props.room.roomName} - {props.room.items.length} items</h3>
        </Row>
			</Container>
	)
}

export default RoomTile