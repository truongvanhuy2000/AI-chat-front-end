import axios from "axios";

const AxiosConfig = (userID: string) => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_BACKEND
    // axios.defaults.withCredentials = true?
    axios.interceptors.request.use(
        config => {
            config.headers['user-id'] = userID
            return config;
        },
        error => Promise.reject(error)
    )
}

export default AxiosConfig