import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const CheckOut = () => {

    const handleSubmit = () => {
        toast('Thanks for your booking')

    }
    return (
        <div className='row pt-5 container-fluid'>
            <div className='col-6 pt-5'>
                <div className=' w-75 mx-auto text-align lh-base'>
                    <h1 className='fs-1 fw-bold'>Make Your <span style={{ color: '#00796B' }} >Booking</span> </h1>
                    <p className='text pt-2'>
                        Please provide your all itenary details at the form displayed
                        at the right side of this page.
                        Please follow the instruction carefully.
                        Please note that you have to place your booking at least ten days befor your trip.
                        And I require one day to get back to your query.
                    </p>
                </div>
            </div>
            <div className='col-6 '>

                <Form onSubmit={handleSubmit} className=' w-75 mx-auto border p-3'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="destination" />
                    </Form.Group>
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree to Terms & Conditions" />
                    </Form.Group>

                    <div className='d-grid w-50 mx-auto'>
                        <Button variant="primary" type="submit" className='w-full border-0 text-dark py-2 fs-5 ' style={{ backgroundColor: '#00796B' }} >
                            Submit
                        </Button>
                    </div>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;