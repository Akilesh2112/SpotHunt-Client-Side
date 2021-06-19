import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

//Material UI
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';


//Custom Ui component
import LogoutButton from '../components/logout';
import DragAndDrop from '../components/dragAndDrop';
import HashButton from '../components/hashButton';

const useStyles = makeStyles( ( theme ) => ( {
    box: {
        backgroundColor: 'pink',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
} ) );


function Hash ()
{
    const classes = useStyles();
    const { isAuthenticated, user } = useAuth0();

    return (
        <div>
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

            <Container fixed className={ classes.Container }>
                <DragAndDrop />
                <HashButton />
            </Container>
        </div>
    );

}

export default Hash;
