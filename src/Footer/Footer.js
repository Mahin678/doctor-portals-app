import React from 'react';
import './Footer.css';
const Footer = () => {
	return (
		<footer className="footer-container ">
			<div className="container mt-5">
				<div className="row mx-auto text-md-center text-lg-left">
					<div className="col-sm-12 col-md-4 col-lg-3 text-sm-left text-md-center text-lg-left mt-2">
						<div className="footer-service mt-5">
							<p>
								<a href="/">Emergency Dental Care</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
							<p>
								<a href="/">Treatment of Personal Diseases</a>
							</p>
							<p>
								<a href="/">Tooth Extraction</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
						</div>
					</div>
					<div className=" col-sm-12 col-md-4  col-lg-3 text-sm-left text-md-center text-lg-left mt-2">
						<div className="footer-service ">
							<h4 className="mb-4">Services</h4>
							<p>
								<a href="/"> Emergency Dental Care</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
							<p>
								<a href="/">Treatment of Personal Diseases</a>
							</p>
							<p>
								<a href="/">Tooth Extraction</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
						</div>
					</div>
					<div className=" col-sm-12 col-md-4  col-lg-3 text-sm-left text-md-center text-lg-left mt-2">
						<div className="footer-service ">
							<h4 className="mb-4">Oral Health</h4>
							<p>
								<a href="/">Emergency Dental Care</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
							<p>
								<a href="/">Treatment of Personal Diseases</a>
							</p>
							<p>
								<a href="/">Tooth Extraction</a>
							</p>
							<p>
								<a href="/">Check Up</a>
							</p>
						</div>
					</div>
					<div className="col-sm-12 col-md-4  col-lg-3 text-sm-left text-md-center text-lg-left mt-3 mx-auto">
						<div className="footer-service footer-address ">
							<h4 className="mb-4">Our Address</h4>
							<p className="mb-5">
								<a href="/">
									New York - 101010 Hudson <br /> Yards
								</a>
							</p>
							<ul>
								<li>
									<a href="/">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="facebook-f"
											class="svg-inline--fa fa-facebook-f fa-w-10 icon active-icon"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 320 512"
										>
											<path
												fill="currentColor"
												d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
											></path>
										</svg>
									</a>
								</li>

								<li>
									<a href="/">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="google-plus-g"
											class="svg-inline--fa fa-google-plus-g fa-w-20 icon"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 640 512"
										>
											<path
												fill="currentColor"
												d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
											></path>
										</svg>
									</a>
								</li>
								<li>
									<a href="/">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="instagram"
											class="svg-inline--fa fa-instagram fa-w-14 icon"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
										>
											<path
												fill="currentColor"
												d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
											></path>
										</svg>
									</a>
								</li>
							</ul>
							<p className="mt-4">
								<a href="/">Call Now</a>
							</p>
							<button className="custom-btn footer-btn btn">
								+2025550295
							</button>
						</div>
					</div>
				</div>
				<p className="text-center copy-right mt-5">
					Copyright 2020 All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
