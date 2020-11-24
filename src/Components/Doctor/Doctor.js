import React, { useEffect, useState } from 'react';
import doctorImg1 from '../../images/Mask Group 8.png';

const doctors = [
	{
		doctorsId: 1,
		img: `${doctorImg1}`,
		doctorsName: 'Dr. Caudi',
		doctorNumber: '+61 452 200 126',
	},
	{
		doctorsId: 2,
		img: `${doctorImg1}`,
		doctorsName: 'Dr. Makron',
		doctorNumber: '+61 452 200 126',
	},
	{
		doctorsId: 3,
		img: `${doctorImg1}`,
		doctorsName: 'Dr. David',
		doctorNumber: '+61 452 200 126',
	},
];
const Doctor = () => {
	return (
		<section className="doctors container mx-auto py-5 ">
			<div className="doctors-header my-4  text-center">
				<h2 className="my-5 sub-title">Our Doctors </h2>
			</div>

			<div className="row py-5 my-5">
				{doctors.length > 0 ? (
					doctors.map((info) => (
						<div className="col-sm-12 col-md-4 col-lg-4 mt-3 mx-auto">
							<div className="text-center">
								<img
									className="img-fluid"
									src={info.img}
									alt="doctors-img"
								/>
								<h4>{info.doctorsName} </h4>
								<p>{info.doctorNumber}</p>
							</div>
						</div>
					))
				) : (
					<p> Loading ... </p>
				)}
			</div>
		</section>
	);
};

export default Doctor;
