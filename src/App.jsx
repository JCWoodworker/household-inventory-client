import React, { useState, useEffect } from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import GuestIndex from "./components/layouts/guest/GuestIndex.jsx"
import UserIndex from "./components/layouts/user/UserIndex.jsx"

function App() {
	const [user, setUser] = useState(null)
	const [fakeUserToggle, setFakeUserToggle] = useState(false)
	const [buttonText, setButtonText] = useState("Fake User Sign In")

	let homeView = <GuestIndex />
	if (user) {
		homeView = <UserIndex />
	}

	useEffect(() => {
		if (fakeUserToggle) {
			setUser({
				id: 1,
				firstName: "John",
				lastName: "Doe",
			})
			setButtonText("Fake User Sign Out")
		} else {
			setButtonText("Fake User Sign In")
			setUser(null)
		}
	}, [fakeUserToggle])

	const clickFakeUserButton = () => {
		console.log("clicked")
		setFakeUserToggle(!fakeUserToggle)
	}

	return (
		<>
			<TopNavigationBar user={user}/>
			{homeView}
			<button className="clickable-button" onClick={clickFakeUserButton}>
				{buttonText}
			</button>
		</>
	)
}

export default App
