import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

//Material ui components
import Button from '@material-ui/core/Button';


const LoginButton = () =>
{
    const { loginWithRedirect } = useAuth0();


    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={ <classes className="classes.box"></classes> }
                onClick={ () => loginWithRedirect() }
            >
                Sign In
            </Button>
        </div>
    );
};

export default LoginButton;