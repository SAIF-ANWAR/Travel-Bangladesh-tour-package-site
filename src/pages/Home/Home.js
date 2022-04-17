import React from 'react';
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
                    <button className='btn px-4 py-2  fs-5 text-light' style={{ backgroundColor: '#3aa165' }}>Explore</button>
                </div>
            </div>
            <div>
                <h1 className='text-center py-3' id='service'>Services</h1>
                <Services></Services>
            </div>
            <div>
                <h1 className='text-center py-3' id='service'>Top Destinations</h1>
                <Destinations></Destinations>
            </div>
        </div>
    );
};

export default Home;