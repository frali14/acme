import React           from 'react'
import { createBrowserHistory } from "history";
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";
import Homepage from "../pages/Homepage";

export const history = createBrowserHistory();

const Router = () => {
    return <div>
        <Switch>
            <Route path={'/login'} component={Login}/>
            <PrivateRoute path={'/logout'} component={Logout}/>
            <PrivateRoute exact path={'/'} component={Homepage}/>
            <Route component={NotFound} />
        </Switch>
    </div>
}
export default Router