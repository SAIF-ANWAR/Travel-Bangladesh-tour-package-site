import React from 'react';
import coverPhoto from '../../images/travel-cover2.jpg'
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
                <h1 className='text-center'>Services</h1>
            </div>
        </div>
    );
};

export default Home;