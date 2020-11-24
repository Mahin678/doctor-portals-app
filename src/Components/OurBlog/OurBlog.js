import React from 'react';
import './ourBlog.css';
import person1 from '../../images/Ellipse 1.png';
import person2 from '../../images/Ellipse 2.png';
import person3 from '../../images/Ellipse 3.png';
import bgIcon from '../../images/Mask Group 7.png';
const OurBlog = () => {
	return (
		<section className="OurBlog py-5 my-5">
			<div className="container">
				<div className="Our-Blog-wrapper text-center ">
					<h4 className="my-3 sub-title">OUR BLOG</h4>
					<h2>From Our Blog News</h2>
				</div>
				<div className="row" style={{ marginTop: '20px;' }}>
					<div className="col-sm-12 col-md-6 col-lg-4  col-xl-4">
						<div className="blog-wrapper ">
							<div className="blog-header-wrapper d-flex justify-content-start align-items-center ">
								<img src={person1} alt="person-img-1" />
								<h4 className="p-3">
									Dr. Cudi
									<span className=" d-block">23 April 2019</span>
								</h4>
							</div>
							<h3>Check at least a doctor in a year for your teeth</h3>
							<p className="blog-details ">
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Ea, placeat totam laborum maiores, esse assumenda
								porro error natus.
							</p>
							<a href="/" className="right-arrow">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="long-arrow-alt-right"
									className="svg-inline--fa fa-long-arrow-alt-right fa-w-14 "
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
						<div className="blog-wrapper">
							<div className="blog-header-wrapper d-flex align-items-center">
								<img src={person2} alt="person-img-2" />
								<h4 className="p-3">
									Dr. Sinthia
									<span className=" d-block"> 23 April 2019</span>
								</h4>
							</div>
							<h3>Two time brush in a day can keep you healthy</h3>
							<p className="blog-details">
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Ea, placeat totam laborum maiores, esse assumenda
								porro error natus sit ipsam.
							</p>
							<a href="/" className="right-arrow">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="long-arrow-alt-right"
									className="svg-inline--fa fa-long-arrow-alt-right fa-w-14 "
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4  col-xl-4 mx-auto ">
						<div className="blog-wrapper">
							<div className="blog-header-wrapper d-flex align-items-center">
								<img src={person3} alt="person-img-3" />
								<h4 className="p-3">
									Dr. Cudi
									<span className=" d-block">23 April 2019</span>
								</h4>
							</div>
							<h3>The tooth cancer is taking a challenge</h3>
							<p className="blog-details">
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Ea, placeat totam laborum maiores, esse assumenda
								porro error natus sit ipsam.
							</p>
							<a href="/" className="right-arrow">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="long-arrow-alt-right"
									className="svg-inline--fa fa-long-arrow-alt-right fa-w-14 "
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurBlog;
