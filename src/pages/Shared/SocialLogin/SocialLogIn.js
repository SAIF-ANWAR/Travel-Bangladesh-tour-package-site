import React from 'react';
import github from '../../../images/social/github.png';

const SocialLogIn = () => {

    const GithubLogIn = event => {

    }
    return (
        <div>
            <div className='w-25 px-4 mx-auto'>
                <div className='d-flex align-items-center'>
                    <div className=' w-50' style={{ height: '1px', backgroundColor: '#AAAAAA' }}></div>
                    <p className='px-2 mt-2'>Or</p>
                    <div className=' w-50' style={{ height: '1px', backgroundColor: '#AAAAAA' }}></div>
                </div>
                <div className='pb-5'>
                    <button onClick={GithubLogIn} className='btn btn-light btn-outline-secondary d-block mx-auto rounded-pill my-2'>
                        <img style={{ width: '30px' }} src={github} alt="" />
                        <span className='px-3 text-dark'>Continue with Github</span>
                    </button>
                    <p style={{ color: 'red' }}></p>
                </div>
            </div>
        </div>
    );
};

export default SocialLogIn;