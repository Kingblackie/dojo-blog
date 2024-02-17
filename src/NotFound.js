import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='not-found'>
			<h2>Oops</h2>
			<h3>Page Not Found</h3>
			<Link to='/'>Back To Home</Link>
		</div>
	)
}

export default NotFound