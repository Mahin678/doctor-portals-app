import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
	return (
		<section className="contact-form text-center d-flex align-items-center ">
			<div className="container " id="contact">
				<div className="">
					<div className="contact-container my-4 py-4">
						<h5 className="my-2 sub-title">CONTACT US</h5>
						<h2>Always Connect with us </h2>
					</div>

					<form action="/">
						<div className="form-group my-3">
							<input
								type="email"
								placeholder="Enter your email "
								className=" form-control-lg w-75"
							/>
						</div>
						<div className="form-group my-3">
							<input
								placeholder="Subject"
								type="text"
								className="form-control-lg w-75 "
							/>
						</div>
						<div className="form-group mx-auto w-75 h-50 my-3">
							<textarea
								placeholder="your massage"
								className=" w-100  form-control"
							></textarea>
						</div>
						<button className="custom-btn">SUBMIT</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
