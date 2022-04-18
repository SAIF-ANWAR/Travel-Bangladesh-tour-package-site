import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogIn from '../SocialLogin/SocialLogIn';

const Login = () => {
    const emailRef = useRef("")
    const [resetError, setResetError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, restError] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (sending) {
        return <Loading></Loading>
    }

    const handleLogIn = (event) => {
        event.preventDefault()
        const email = emailRef?.current?.value
        const password = event.target.password?.value
        signInWithEmailAndPassword(email, password)
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef?.current?.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Reset Email Sent')
        }
        else {
            setResetError('please provide email address')
        }
    }
    return (
        <div>

            <div className='w-75 mx-auto mt-4'>
                <Form onSubmit={handleLogIn} className='w-50 mx-auto border px-4 py-2'>
                    <h2 className='pb-3'>Login</h2>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <p className='text-danger'> {resetError}</p>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-0" controlId="formBasicCheckbox">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <p>Forgot Password ?</p>
                            </div>
                            <div>
                                <p><Button onClick={resetPassword} className=' text-dark text-decoration-none' variant="link"  ><span style={{ color: '#00796B' }}>Reset Password</span></Button></p>
                            </div>
                        </div>
                        <p className='text-danger'>{restError?.message}</p>
                    </Form.Group>
                    <div className="border-0 d-grid">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#00796B' }} >
                            Login
                        </Button>
                        <p className='text-danger'> {error?.message}</p>
                    </div>
                    <div className='d-flex jsutify-content-around '>
                        <p className='px-2'><small>Don't have an account?</small></p>
                        <a href="/signup" style={{ color: '#00796B' }}> create an account</a>
                    </div>
                </Form>

            </div>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Login;