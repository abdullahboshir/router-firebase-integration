import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Plese Register now</h3>
            <form>
            <input type="email" placeholder='Your Email' />
            <br/>
            <input type="text" placeholder='Your Name' />
            <br/>
            <input type="password" placeholder='Password' />
            <br/>
            <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;