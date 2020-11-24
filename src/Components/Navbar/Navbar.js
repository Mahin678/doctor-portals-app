import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							activeClassName="nav-style"
							className="nav-link nav-text-black mr-3"
							to="/home"
						>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link nav-text-black mr-3"
							to="/home"
						>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link nav-text-black mr-3"
							to="/home"
						>
							Dental Service
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link navbar-text mr-3 text-light"
							to="/home"
						>
							Dashboard
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link navbar-text mr-3 text-light"
							to="/home"
						>
							Blog
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							className="nav-link navbar-text mr-3 text-light"
							to="/home"
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
