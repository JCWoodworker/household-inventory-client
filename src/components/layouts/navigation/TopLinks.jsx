import React from "react"
import { Nav } from "react-bootstrap"

const TopLinks = ({ user }) => {

	const guestLinks = (
		<>
			<Nav>
				<Nav.Link id="navLink">
					Register
				</Nav.Link>
				<Nav.Link id="navLink">
					Sign In
				</Nav.Link>
			</Nav>
		</>
	)

	const userLinks = (
		<>
			<Nav>
				<Nav.Link id="navLink" href="#about">
					About Me
				</Nav.Link>
				<Nav.Link id="navLink" href="#wpm">
					Project Manager
				</Nav.Link>
				<Nav.Link id="navLink" href="#carShow">
					Car Show
				</Nav.Link>
			</Nav>
		</>
	)

	let displayLinks = guestLinks
	if (user) {
		displayLinks = userLinks
	}
	

	return (
		<>
		{displayLinks}
		</>
	)
}

export default TopLinks
