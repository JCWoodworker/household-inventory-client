import { Container, Nav, Navbar } from "react-bootstrap"

import TopLinks from "./TopLinks.jsx"
import "../../../../public/logo.png"

const TopNavigationBar = ({ user }) => {

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="navigationBar"
			fixed="top"
			variant="dark"
		>
			<Container>
				<Navbar.Brand href="https://www.rilocalwoodworks.com" target="_blank	">
					<img className="logo" src="/logo.png" alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle className="navToggle" aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<TopLinks user={user}/>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default TopNavigationBar
