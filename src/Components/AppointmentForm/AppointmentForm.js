import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');
toast.configure();
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const { register, handleSubmit, errors } = useForm();
	const names = { name: 'mahin' };
	const onSubmit = (data) => {
		const appointment = { ...data };
		appointment.date = date;
		appointment.created = new Date();
		appointment.department = appointmentOn.department;
		appointment.doctorEmail = appointmentOn.email;
		appointment.Schedule = appointmentOn.Schedule;
		console.log(appointment);
		fetch('https://murmuring-shore-14683.herokuapp.com/addBooking', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(appointment),
		})
			.then((res) => res.json())
			.then((success) => {
				if (success) {
					toast.success('Successfully Appointments booked');
					closeModal();
				}
			});
	};

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 style={{ color: '#1cc7c1' }} className="text-center text-brand">
					{appointmentOn.subject}
				</h2>
				<p className="text-secondary text-center">
					<small>ON {`${date}`}</small>
				</p>
				<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<input
							type="text"
							ref={register({ required: true })}
							defaultValue={loggedInUser.name}
							name="name"
							placeholder="Your Name"
							className="form-control"
						/>
						{errors.name && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					<div className="form-group">
						<input
							type="text"
							ref={register({ required: true })}
							name="phone"
							placeholder="Phone Number"
							className="form-control"
						/>
						{errors.phone && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					<div className="form-group">
						<input
							type="text"
							defaultValue={loggedInUser.email}
							ref={register({ required: true })}
							name="email"
							placeholder="Email"
							className="form-control"
						/>
						{errors.email && (
							<span className="text-danger">This field is required</span>
						)}
					</div>
					<div className="form-group row">
						<div className="col-4">
							<select
								className="form-control"
								name="gender"
								ref={register({ required: true })}
							>
								<option disabled={true} value="Not set">
									Select Gender
								</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Not set">Other</option>
							</select>
							{errors.gender && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</div>
						<div className="col-4">
							<input
								ref={register({ required: true })}
								className="form-control"
								name="age"
								placeholder="Your Age"
								type="number"
							/>
							{errors.age && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</div>
						<div className="col-4">
							<input
								ref={register({ required: true })}
								className="form-control"
								name="weight"
								placeholder="Weight"
								type="number"
							/>
							{errors.weight && (
								<span className="text-danger">
									This field is required
								</span>
							)}
						</div>
					</div>

					<div className="form-group text-right">
						<button type="submit" className="btn btn-success">
							Send
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default AppointmentForm;
