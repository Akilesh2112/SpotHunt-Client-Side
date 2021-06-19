import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Material ui components
import Button from '@material-ui/core/Button';

const LogoutButton = () =>
{
    const { logout } = useAuth0();

    //Creating a logout method
    const logoutWithRedirect = () =>
        logout( {
            returnTo: window.location.origin,
        } );

    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={ <classes className="classes.box"></classes> }
                onClick={ () => logoutWithRedirect() }
            >
                Sign Out
            </Button>
        </div>
    );
};

export default LogoutButton;