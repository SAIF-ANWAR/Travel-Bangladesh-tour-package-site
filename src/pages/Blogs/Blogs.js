import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Difference between authorization and authentication</h1>
                <p>Ans: Authorization is the process of controlling access to some of the functions in an application.
                    It allows one party to access other resources.
                    Whereas authentication is the process of checking the users' identity to access functions. it may request user name, password or any kind
                    of input required to validate the user identity.
                </p>
            </div>
            <div>
                <h1>Why do I use Firebase?  What other options do you have to implement authentication?</h1>
                <p>Ans: Firebase provides me server-less backend for my mobile and web applications.
                    I do not reuire to develop my own backend. It saves a lot of time and cost to build my own backend.
                    Firebase also provides secured authentication system.
                    <br />

                </p>
            </div>
        </div>
    );
};

export default Blogs;