import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogIn from '../SocialLogin/SocialLogIn';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>
    }


    const handleSignUp = event => {
        event.preventDefault()
        const email = event.target.email?.value;
        const password = event.target.password?.value
        const confirmPassword = event.target.confirmPassword?.value;

        if (password !== confirmPassword) {
            return setSignUpError('Password did not match');
        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form className='w-50 mx-auto border p-4' onSubmit={handleSignUp}>
                    <h2 className='pb-3 fs-5 fw-bold'>Create a new account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="EnterYourName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="EnterEmail" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="confirmPassword" placeholder="ConfirmPassword" required />
                    </Form.Group>
                    <p className='text-danger'>{signUpError}</p>
                    <p className='text-danger'>{error?.message}</p>

                    <div className="border-0 d-grid py-2">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#00796B' }} >
                            Create an account
                        </Button>
                    </div>
                    <div className='d-flex  justify-content-center py-0'>
                        <p><small>Already have an account?</small></p>
                        <a href="/login" style={{ color: '#00796B' }} className="px-2"> Login</a>
                    </div>
                </Form>
            </div>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;