import React from 'react';
import { Link } from 'react-router-dom';
import coverPhoto from '../../images/travel-cover5.jpg'
import Destinations from '../Destinations/Destinations';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${coverPhoto})`, height: '500px' }} className="title">
                <div className=' titleH'>
                    <h1 className='text-light fw-bold font-sans'>TRAVEL WITH BACKPACKER (TWB)</h1>

                </div>
                <div className='button'>
                    <Link to="/destinations" className='btn px-4 py-2  fs-5 text-light' style={{ backgroundColor: '#00796B' }}>Explore</Link>
                </div>
            </div>
            <div>
                <h1 className='text-center py-0 mt-3' id='service'>Services</h1>
                <hr />
                <Services></Services>
            </div>
            <div>
                <h1 className='text-center py-0 mt-3' id='service'>Top Destinations</h1>
                <hr />
                <Destinations></Destinations>
            </div>
        </div>
    );
};

export default Home;