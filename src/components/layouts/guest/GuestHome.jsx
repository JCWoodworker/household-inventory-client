import React from "react"
import { Container, Row, Image } from "react-bootstrap"
import FadeInSection from "../../services/FadeInSection"

const GuestHome = () => {
	return (
		<FadeInSection>
			<Container>
				<Row className="project-row">
					<h1>
						Welcome to The Inventory App!
					</h1>
					<h3>
						Use this app to manage all the storage within your home or business.  You can add locations, rooms, items, and even add photos to each item.  This app is a work in progress, so please be patient as I continue to add features!
					</h3>
				</Row>
			</Container>
		</FadeInSection>
	)
}

export default GuestHome
