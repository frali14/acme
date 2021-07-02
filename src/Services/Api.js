import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL

const Get = ( url, defaultResponse) => {
    if (url) {
        return axios.get(url).then(res => res.data)
    } else {
        return Promise.resolve(defaultResponse)
    }
}

const Post = (url, parameters, defaultResponse = {data: []}) => {
    if (url) {
        return axios.post(url, parameters).then(res => res.data)
    } else {
        return Promise.resolve(defaultResponse)
    }
}

const AxiosService = {
    Get,
    Post,
}

export default AxiosService