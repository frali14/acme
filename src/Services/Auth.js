import AxiosService from "./Api";
import {history} from "../router/Router";

const Login = (values) => {
    const url = values ? `http://localhost:1337/auth/local` : null
    return AxiosService.Post(url, values, [])
}

const Logout = () => {
    localStorage.removeItem('slido-clone_auth')
    window.location = '/logout'
}

const GetToken = () => {
    const item = JSON.parse(localStorage.getItem('slido-clone_auth'))
    if (item) {
        return item.jwt;
    }
    return null;
}

const AuthService = {
    Login,
    Logout,
    GetToken
}

export default AuthService