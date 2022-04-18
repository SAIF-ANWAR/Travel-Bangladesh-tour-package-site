import React from 'react';
import email from '../../images/social/email.png';
import phone from '../../images/social/contact.png';
import facebook from '../../images/social/facebook.png';
import insta from '../../images/social/insta.png';
import tiktok from '../../images/social/tiktok.png';
import './Footer.css'
import Copyright from './Copyright';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#616161" }} className="mt-5">
            <div className='container footer'>
                <div className="row justify-content-center ">
                    <div className="col-md-3 col-12 text-center">
                        <p>Contact Me</p>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img width={25} src={email} alt="" />
                            <small className='px-2'>saifanwar5123@gmail.com</small>
                        </div>
                        <div className='d-flex justify-content-start align-items-center py-2'>
                            <img width={25} src={phone} alt="" />
                            <small className='px-2'>01748986297</small>
                        </div>


                    </div>
                    <div className="col-md-3 col-6  list">
                        <p>Office Address</p>
                        <small>Street #19, Road #2</small> <br />
                        <small> Dhaka</small> <br />
                        <small>Bangladesh</small>
                        <div className=' mt-2'>
                            <p className='text-center'> Find Me On</p>
                            <div className='d-flex justify-content-center align-items-center gap-3'>
                                <img width={25} src={facebook} alt="" />
                                <img width={35} src={insta} alt="" />
                                <img width={30} src={tiktok} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 list">
                        <li><a href="#">Hire Me</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Cancellation Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Covid-19 Response</a></li>
                    </div>
                </div>

            </div>
            <Copyright></Copyright>
        </div>

    );
};

export default Footer;