import React, { useEffect, useState } from 'react';
import iconOurPatients from '../../../images/Mask Group 7.png';
import patients1 from '../../../images/Ellipse 1.png';
import patients2 from '../../../images/Ellipse 2.png';
import patients3 from '../../../images/Ellipse 3.png';

import './OurAllPatients.css';
const OurAllPatients = () => {
	const [allData, setAllData] = useState([]);
	useEffect(() => {
		fetch(
			'http://flightapi-fra01-ibetest.hitchhiker.net:7725/FlightAPI?singleWsdl'
		)
			.then((res) => res.json())
			.then((res) => console.log(res));
	}, []);
	return (
		<section className="ourPatients  ">
			<div className="container  ">
				<div className="ourPatients-header d-md-flex d-lg-flex  align-items-center justify-content-between flex-wrap py-5 my-5">
					<div className="ourPatients-header-text   w-50">
						<h4 className="sub-title">TESTIMONIAL</h4>
						<h1 className="display-4 font-weight-bold">
							What’s Our Patients Says
						</h1>
					</div>
					<div className="ourPatients-header-img w-25 w-sm-25">
						<img
							className="img-fluid w-75 h-75"
							src={iconOurPatients}
							alt="ourPatientsIcon"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-4 mt-4 P-4">
						<div className="card custom-card p-4 ">
							<p>
								It is a long established fact that by the readable
								content of a lot layout. The point of using Lorem a
								more-or-less normal distribu to using ‘Content here,
								content
							</p>
							<div className="d-flex align-items-center">
								<img
									src={patients1}
									alt="patient-img "
									className="img-fluid w-25 h-25 p-2 p-sm-2 p-md-3 p-lg-3 "
								/>
								<div>
									<h5>Winson Herry</h5>
									<p>California</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 mt-4 ">
						<div className="card custom-card p-4">
							<p>
								It is a long established fact that by the readable
								content of a lot layout. The point of using Lorem a
								more-or-less normal distribu to using ‘Content here,
								content
							</p>
							<div className="d-flex align-items-center">
								<img
									src={patients2}
									className=" img-fluid w-25 h-25 p-2 p-sm-2 p-md-3 p-lg-3"
									alt="patients-img2"
								/>
								<div>
									<h5>Winson Herry</h5>
									<p>California</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 mt-4 ">
						<div className="card custom-card p-4">
							<p>
								It is a long established fact that by the readable
								content of a lot layout. The point of using Lorem a
								more-or-less normal distribu to using ‘Content here,
								content
							</p>
							<div className="d-flex align-items-center">
								<img
									className="img-fluid w-25 h-25 p-2 p-sm-2 p-md-3 p-lg-3"
									src={patients3}
									alt="patients-img-3"
								/>
								<div>
									<h6>Winson Herry</h6>
									<p>California</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurAllPatients;
