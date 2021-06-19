import React from "react";
import
{
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/privateRoute";

import UserAuth from "./pages/UserAuth"
import Hash from "./pages/Hash";
import Loading from "./components/loading";


function MainRouter ()
{
    const { isLoading } = useAuth0();
    if(isLoading){
        return <Loading />
    }
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ UserAuth } />
                <PrivateRoute path="/hash" component={ Hash } />
            </Switch>
        </Router>
    );
}

export default MainRouter;