import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/p logo.jpg";
import information from "../assets/images/icon/imformation.png"; // Corrected import statement

const Navitems = () => {
    const [headerFixed, setHeaderFixed] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    // authinfo


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInup" : ""}`}>
            {/* Header top start */}
            <div className='header-top d-md-none'>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            {/* Header bottom */}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper d-flex align-items-center justify-content-between'>
                        {/* Logo on the left */}
                        <div className='logo'>
                            <Link to="/home">
                                <img src={logo} alt="Company Logo" />
                            </Link>
                        </div>

                        {/* Menu area */}
                        <div className='d-flex align-items-center'>
                            {/* Menu Toggle Button (Mobile Only) */}
                            <button onClick={handleMenuToggle} className='menu-toggle-btn d-md-none'>
                                Menu
                            </button>

                            {/* Menu (Desktop and Toggleable on Mobile) */}
                            <div className={`menu ${menuToggle ? "d-block" : "d-none"} d-md-flex`}>
                                <ul className='lab-ul mb-0 d-flex flex-column flex-md-row'>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Account and Login Links (Desktop Only) */}
                            <div className='d-none d-md-flex ms-3'>
                                <Link to="/login" className='lab-btn me-3'>Log In</Link>
                            </div>

                            {/* Menu Toggler Icon (Mobile Only) */}
                            <div onClick={handleMenuToggle} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* Social Toggler */}
                            <div className='d-none d-md-block ms-3'>
                                <img src={information} style={{ fontSize: '24px', cursor: 'pointer', width :'30px', height :'30px' }} alt="Imformation Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navitems;
