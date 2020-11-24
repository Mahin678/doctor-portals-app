import React from 'react';
import Footer from '../../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import OurAllPatients from './OurAllPatients/OurAllPatients';
import OurBlog from './../OurBlog/OurBlog';
const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<MakeAppoinment />
			<OurAllPatients />
			<OurBlog />
			<Doctor />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
