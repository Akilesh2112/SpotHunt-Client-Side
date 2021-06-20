import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';   //button onclick navigate to /hash page

//Importing css
import './pages.css';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


//import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';

//Importing custom UI from components folder

//import SignIn from '../components/login';
import LogoutButton from '../components/logout';
import LoginButton from '../components/login';

const useStyles = makeStyles( ( theme ) => ( {
    // Main:{
    //     display:'flex',
    // },
    box: {
        backgroundColor: '#84A7CF',
        padding: 4,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    navButton: {
        marginLeft: 10
    },
    Container: {
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
} ) );


function UserAuth ()
{
    const classes = useStyles();
    const { isAuthenticated, user } = useAuth0();
    const history = useHistory();
    const handleClick = () => history.push( '/hash' );

    return (
        
        <div className={ classes.Main }>
            <Box className={ classes.box } component='span' m={ 1 } >
                { isAuthenticated && (
                    <Avatar
                        variant="rounded"
                        alt={ user.name }
                        src={ user.picture }
                    />
                ) }

                <div>
                    {/* If user is Not logined show this */ }
                    { !isAuthenticated && (
                        <div className={ classes.navButton }>
                            <LoginButton />
                        </div>
                    ) }

                    {/* If user is logined show this */ }
                    { isAuthenticated && (
                        <div className={ classes.navButton }>
                            <LogoutButton />
                        </div>
                    ) }
                </div>
            </Box>

            <Container fixed className={ classes.Container }>

                <Button variant="contained" color="primary" onClick={ handleClick }>
                    Hash Image
                </Button>

            </Container>
        </div>
    );
}


export default UserAuth;