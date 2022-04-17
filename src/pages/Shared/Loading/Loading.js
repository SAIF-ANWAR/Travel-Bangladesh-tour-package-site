import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '200px' }} className='w-150 d-flex justify-content-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;