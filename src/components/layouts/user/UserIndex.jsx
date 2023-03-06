import React, { useState } from "react"
import { Container, Row } from "react-bootstrap"

import LocationTile from "./LocationTile"

const UserIndex = () => {
	const [locations, setLocations] = useState([
		{
			locationName: "Home",
			rooms: [
				{ roomName: "Kitchen", items: ["item1", "item2"] },
				{ roomName: "Living Room", items: ["item1", "item2", "item3"] },
				{ roomName: "Bedroom", items: ["item1", "item2"] },
				{ roomName: "Garage", items: ["item1", "item2", "item3", "item4"] },
				{ roomName: "Shed", items: ["item1", "item2"] },
			],
		},
		{
			locationName: "Storage Unit",
			rooms: [
				{ roomName: "Unit 1", items: ["item1", "item2"] },
				{ roomName: "Unit 2", items: ["item1", "item2", "item3", "item4", "item5"] },
			],
		},
	])

	const locationTiles = locations.map((location) => {
		return <LocationTile location={location} />
	})

	return (
		<Container className="main-container" id="projects">
			{locationTiles}
		</Container>
	)
}

export default UserIndex
