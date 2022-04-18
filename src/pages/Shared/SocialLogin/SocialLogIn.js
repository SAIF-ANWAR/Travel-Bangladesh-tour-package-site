import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import Loading from '../Loading/Loading';

const SocialLogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const GoogleLogIn = event => {
        signInWithGoogle()
    }
    if (loading) {
        return <Loading></Loading>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
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
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <button onClick={GoogleLogIn} className='btn btn-light btn-outline-secondary d-block mx-auto rounded-pill my-1'>
                        <img style={{ width: '30px' }} src={google} alt="" />
                        <span className='px-3 text-dark'>Continue with Google</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SocialLogIn;