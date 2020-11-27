import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCog,
	faSignOutAlt,
	faCalendar,
	faGripHorizontal,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [isDoctor, setIsDoctor] = useState(false);
	useEffect(() => {
		fetch('https://murmuring-shore-14683.herokuapp.com/isDoctor', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: loggedInUser.email }),
		})
			.then((res) => res.json())
			.then((result) => setIsDoctor(result));
	}, []);
	return (
		<div className="sidebar py-5 px-4">
			<ul className="list-unstyled">
				{isDoctor && (
					<>
						<li>
							<Link to="/dashboard" className="text-white">
								<FontAwesomeIcon icon={faGripHorizontal} />{' '}
								<span>Dashboard</span>
							</Link>
						</li>
						{/* <li>
							<Link to="/patients" className="text-white">
								<FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
							</Link>
						</li> */}
						{/* <li>
							<Link to="/prescriptions" className="text-white">
								<FontAwesomeIcon icon={faFileAlt} />{' '}
								<span>Prescriptions</span>
							</Link>
						</li> */}
						<li>
							<Link to="/addDoctor" className="text-white">
								<FontAwesomeIcon icon={faCog} /> <span>Add Doctor</span>
							</Link>
						</li>{' '}
					</>
				)}
				<li>
					<Link to="/appointmentByDate" className="text-white">
						<FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
					</Link>
				</li>
			</ul>
			<div>
				<Link to="/" className="text-white">
					<FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
