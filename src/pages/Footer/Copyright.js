import React from 'react';

const Copyright = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center mt-3 py-1' style={{ backgroundColor: '#1f1e21' }}>
            <small className='text-light'>copyright @ {year}. All rights reserved</small>
        </div>
    );
};

export default Copyright;