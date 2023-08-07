import React from 'react';
import { useHistory } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
	const history = useHistory();
	const handleLogin = (e) => {	
		e.preventDefault()	
		history.push('/login')
	}
	const handleSignup = (e) => {	
		e.preventDefault()	
		history.push('/signup')
	}
	const handleHome = (e) => {	
		e.preventDefault()	
		history.push('/')
	}
	const handleAbout = (e) => {	
		e.preventDefault()	
		history.push('/about')
	}
	const handleSupport = (e) => {	
		e.preventDefault()	
		history.push('/support')
	}
	
	return (
		<ul className='navBar'>
			<a onClick={handleLogin} href='/login'>Login</a>
			<a onClick={handleSignup} href='/signup'>Sign-Up</a>
			<a onClick={handleHome} href='/'>Home</a>
			<a onClick={handleAbout} href='/about'>About</a>
			<a onClick={handleSupport} href='/support'>Contact Admin</a>
		</ul>
	)
}

export default NavBar;