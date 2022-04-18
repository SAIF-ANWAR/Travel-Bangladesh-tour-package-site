import React from 'react';
import notFound from '../../images/404-error-page-not-found.jpg'
const NotFound = () => {
    return (
        <div >
            <div className=" w-50 mx-auto" >
                <img width={600} src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;