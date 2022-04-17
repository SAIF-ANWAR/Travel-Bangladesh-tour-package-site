import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleSignUp = event => {
        event.preventDefault()
        const name = event.target.name?.value;
        const email = event.target.email?.value;
        const password = event.target.password?.value
        createUserWithEmailAndPassword(email, password)
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
                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Check onCanPlay={() => setAgree(!agree)} name="terms" type="checkbox" label="Accept terms & conditions" />
                    </Form.Group> */}
                    <p className='text-danger'>{error.message}</p>
                    <p className='text-danger'></p>

                    <div className="border-0 d-grid py-2">
                        <Button className="border-0" variant="primary" type="submit" style={{ backgroundColor: '#F9A51A' }} >
                            Create an account
                        </Button>
                    </div>
                    <div className='d-flex  justify-content-center py-0'>
                        <p><small>Already have an account?</small></p>
                        <a href="/login" style={{ color: '#F9A51A' }} className="px-2"> <small>Login</small></a>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;