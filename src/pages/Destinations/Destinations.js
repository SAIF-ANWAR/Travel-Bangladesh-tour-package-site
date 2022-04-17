import React from 'react';
import './Destinations.css'
import dest5 from '../../images/Destination/dest5.jpg';
import dest6 from '../../images/Destination/dest6.jpg';
import dest7 from '../../images/Destination/dest7.jpg';
import dest8 from '../../images/Destination/dest8.jpg';

const Destinations = () => {
    return (
        <div className='container d-block mx-auto'>
            <div className='row'>
                <div className='col-md-6  img-fluid title' style={{ backgroundImage: `url(${dest5})`, height: '619px', width: '450px' }}>
                    <div>
                        <h1 className='title-asia'> ASIA</h1>
                    </div>
                    <div>
                        <button id='explore-button' className='btn bg-dark border-0 px-4 bg-opacity-75 text-light rounded-pill'>Explore</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row gy-3 gx-2 mx-2'>
                        <div className='col-md-12 mx-3 title' style={{ backgroundImage: `url(${dest6})`, height: '200px', width: '580px' }}>
                            <div>
                                <h1 className='title-america'> AMERICA</h1>
                            </div>
                            <div>
                                <button id='explore-button-usa' className='btn bg-dark border-0 px-4 bg-opacity-75 text-light rounded-pill'>Explore</button>
                            </div>
                        </div>
                        <div className='col-md-12 d-flex'>
                            <div className='col-md-6 title' style={{ backgroundImage: `url(${dest7})`, height: '400px', width: '280px' }}>
                                <div>
                                    <h1 className='title-euro'> EUROPE</h1>
                                </div>
                                <div>
                                    <button id='explore-button-euro' className='btn bg-dark border-0 px-4 bg-opacity-75 text-light rounded-pill'>Explore</button>
                                </div>
                            </div>
                            <div className='col-md-6 mx-2 title' style={{ backgroundImage: `url(${dest8})`, height: '400px', width: '280px' }}>
                                <div>
                                    <h1 className='title-africa'> AFRICA</h1>
                                </div>
                                <div>
                                    <button id='explore-button-africa' className='btn bg-dark border-0 px-4 bg-opacity-75 text-light rounded-pill'>Explore</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Destinations;