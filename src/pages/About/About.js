import React from 'react';
import picture from '../../images/saif.png'
const About = () => {
    return (
        <div>
            <div className='card w-50 mx-auto px-4 py-4'>
                <div className='card-body mx-auto py-0'>
                    <img className='shadow-lg rounded ' width={300} src={picture} alt="" />
                    <p className='text-center fs-3 fw-bold py-1'>Md. Saif Anwar</p>

                </div>
                <div className='card-body w-100 mx-auto fs-5 fw-normal lh-base py-0'>
                    I am Md Saif Anwar, tech-saavy individual who wants to build up his career as a
                    programmer. I want to be a full-stack web developer.
                    Currently I am learning web development from Programming Hero.
                    I learned HTML, CSS, JavaScript and React Js.
                    Finally, I am on the way to achieve my goal in near future.
                </div>
            </div>
        </div>
    );
};

export default About;