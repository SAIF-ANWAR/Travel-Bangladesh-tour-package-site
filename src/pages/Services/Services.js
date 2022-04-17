import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import service1 from '../../images/services/services-1.jpg'
import service2 from '../../images/services/services-2.jpg'
import service3 from '../../images/services/services-3.jpg'

const Services = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 py-2'>
                    <Card style={{ width: '22rem' }} className="shadow-lg">
                        <Card.Img variant="top" src={service1} />
                        <Card.Body>
                            <Card.Title>Holiday Package</Card.Title>
                            <Card.Text>
                                Holiday package is more expensive since it's holidays. The demand
                                is higher than other occasions.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><span className='fw-bold'>Package:</span> 2 Days 3 Nights</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Rate:</span> 500 USD</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Ratings:</span> 9/10</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button as={Link} to="/checkout" variant="primary">Check Out</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 py-2'>
                    <Card style={{ width: '22rem' }} className="shadow-lg">
                        <Card.Img variant="top" src={service2} />
                        <Card.Body>
                            <Card.Title>Regular Package</Card.Title>
                            <Card.Text>
                                Holiday package is more expensive since it's holidays. The demand
                                is higher than other occasions.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><span className='fw-bold'>Package:</span> 3 Days 4 Nights</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Rate:</span> 300 USD</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Ratings:</span> 8.5/10</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button as={Link} to="/checkout" variant="primary">Check Out</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4  py-2'>
                    <Card style={{ width: '22rem' }} className="shadow-lg">
                        <Card.Img variant="top" src={service3} />
                        <Card.Body>
                            <Card.Title>Special Package</Card.Title>
                            <Card.Text>
                                Holiday package is more expensive since it's holidays. The demand
                                is higher than other occasions.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><span className='fw-bold'>Package:</span> 4 Days 5 Nights</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Rate:</span> 400 USD</ListGroupItem>
                            <ListGroupItem><span className='fw-bold'>Ratings:</span> 8/10</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button as={Link} to="/checkout" variant="primary">Check Out</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;