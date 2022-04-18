import React from 'react';

const Blogs = () => {
    return (
        <div className='card w-75 mx-auto p-4'>
            <div className='card shadow-lg p-3 mb-2'>
                <h3>Difference between authorization and authentication</h3>
                <p>Ans: Authorization is the process of controlling access to some of the functions in an application.
                    It allows one party to access other resources.
                    Whereas authentication is the process of checking the users' identity to access functions. it may request user name, password or any kind
                    of input required to validate the user identity.
                </p>
            </div>
            <div className='card shadow-lg p-3 mb-2'>
                <h3>Why do I use Firebase?  What other options do you have to implement authentication?</h3>
                <p>Ans: Firebase provides me server-less backend for my mobile and web applications.
                    I do not reuire to develop my own backend. It saves a lot of time and cost to build my own backend.
                    Firebase also provides secured authentication system.
                    <br />
                    Other options are such as PingIdentity, ENTRUST, okta, Duo Access etc.
                </p>
            </div>
            <div className='card shadow-lg p-3 mb-2'>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Ans: Firebase Provides. </p>
                <li>Cloud  Firestone</li>
                <li>Cloud  Functions</li>
                <li>Cloud  Storage</li>
                <li>Hosting  </li>
                <li>Google Analytics</li>
                <li>Dynamic Links</li>
                <li>Cloud Messaging</li>
                <li>Remote Config</li>
            </div>
        </div>
    );
};

export default Blogs;