import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

//Material UI
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

//Importing css
import './pages.css';

//Custom Ui component
import LogoutButton from '../components/logout';
import DragAndDrop from '../components/dragAndDrop';
import HashButton from '../components/hashButton';

const useStyles = makeStyles( ( theme ) => ( {
    box: {
        backgroundColor: '#84A7CF',
        padding: 4,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-end",
        backdropFilter: "blur(10px)",
    },
    navButton: {
        marginLeft: 10
    },
    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    hashButton:{
        marginTop:'25px',
        display:'flex',
        justifyContent:'center'         
    }
} ) );


function Hash ()
{
    const classes = useStyles();
    const { isAuthenticated, user } = useAuth0();

    return (
        <div>
            <div className="navBar">
                <Box className={ classes.box } component='span' m={ 1 } >
                    { isAuthenticated && (
                        <Avatar
                            variant="rounded"
                            alt={ user.name }
                            src={ user.picture }
                        />
                    ) }

                    <div>
                        {/* If user is logined show this */ }
                        { isAuthenticated && (
                            <div className={ classes.navButton }>
                                <LogoutButton />
                            </div>
                        ) }
                    </div>
                </Box>
            </div>
            <div>
                <Container fixed className={ classes.Container }>
                    <div>
                        <DragAndDrop />
                    </div>
                    <div className={ classes.hashButton }>
                        <HashButton />
                    </div>
                </Container>
            </div>
        </div>
    );

}

export default Hash;
