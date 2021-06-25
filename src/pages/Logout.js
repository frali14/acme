import React from 'react'
import {Redirect} from 'react-router-dom'
import AuthService from "../Services/Auth";

export default function Logout() {

    AuthService.Logout()

    return <Redirect to={{pathname: `/login/`}}/>
}
