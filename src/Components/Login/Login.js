import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singINWithGoogle} = useFirebase()
    return (
        <div>
            <h3>Please Login!!</h3>
            <button onClick={singINWithGoogle}>Google Sign In</button>
            <form>
            <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;