import React from 'react';
import BussinesInfo from '../BussinesInfo/BussinesInfo';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container " >
            <div className="container" >
                <Navbar />
                <HeaderContent />
                <BussinesInfo />
            </div>
        </div>
    );
};

export default Header;