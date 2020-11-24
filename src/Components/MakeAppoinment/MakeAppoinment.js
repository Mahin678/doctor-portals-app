import React from 'react';
import './MakeAppoinment.css';
import doctors1 from '../../images/5790-removebg.png';
const MakeAppoinment = () => {
	return (
		<section className="make-appointment">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 AppointmentBlock">
						<img src={doctors1} alt="" />
					</div>
					<div className="col-lg-7 py-5 text-white">
						<h5>Appointment</h5>
						<h1>Make an Appointment Today</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quaerat explicabo ut numquam reiciendis tempora cum
							repellat quas itaque quo qui sed illo error est, magni
							tenetur minus voluptatem nihil voluptatibus! Cum
							perspiciatis optio quam reiciendis!
						</p>
						<button className="btn custom-btn">Learn more</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppoinment;
