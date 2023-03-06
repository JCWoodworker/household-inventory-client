import React from "react"

const GithubHeaderLink = (props) => {

	return (
		<a href={props.link} target="_blank">
			<i className="bi bi-github icon" />
		</a>
	)
}

export default GithubHeaderLink
