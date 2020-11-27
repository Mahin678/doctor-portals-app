import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar/Sidebar';
toast.configure();
const AddDoctorInfo = () => {
	const [info, setInfo] = useState({});
	const [file, setFile] = useState(null);
	const handleBlur = (e) => {
		// const newInfo = { ...info };
		// newInfo[e.target.name] = e.target.value;
		// setInfo(newInfo);
		const newInfo = { ...info };
		newInfo[e.target.name] = e.target.value;
		setInfo(newInfo);
	};

	const handleFileChange = (e) => {
		// const newFile = e.target.files[0];
		// setFile(newFile);
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const handleSubmit = (e) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('name', info.name);
		formData.append('email', info.email);
		formData.append('department', info.Department);
		formData.append('Schedule', info.time);

		fetch('https://murmuring-shore-14683.herokuapp.com/addDoctors', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					toast.success("Doctor's successfully added");
				}
			})
			.catch((error) => {
				console.error(error);
			});
		// const formData = new FormData()
		// console.log(info);
		// formData.append('file', file);
		// formData.append('name', info.name);
		// formData.append('email', info.email);

		// fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {
		//     method: 'POST',
		//     body: formData
		// })
		//     .then(response => response.json())
		//     .then(data => {
		//         console.log(data)
		//     })
		//     .catch(error => {
		//         console.error(error)
		//     })
		e.preventDefault();
	};

	return (
		<section className="container-fluid pl-0 ">
			<div className="row">
				<div className="col-sm-12 col-md-2 col-lg-2 pr-0">
					<Sidebar />
				</div>
				<div className="col-sm-12 col-md-10 col-lg-10">
					<div className=" p-4 pr-5 ">
						<h5 className="text-brand py-4">Add a Doctor</h5>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									onBlur={handleBlur}
									name="email"
									type="email"
									className="form-control"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Name</label>
								<input
									name="name"
									onBlur={handleBlur}
									type="text"
									className="form-control"
									placeholder="Name"
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Department</label>
								<input
									name="Department"
									onBlur={handleBlur}
									type="text"
									className="form-control"
									placeholder="Department Name"
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Time</label>
								<input
									name="time"
									onBlur={handleBlur}
									type="text"
									className="form-control"
									placeholder="Time write string"
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">
									Upload A IMAGE
								</label>
								<input
									name="file"
									onChange={handleFileChange}
									type="file"
									className="form-control"
									placeholder="File"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddDoctorInfo;
