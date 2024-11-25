import axios from "axios";

const AxiosConfig = () => {
    axios.interceptors.request.use(
        config => {
            if (!config.headers.Authorization) {
                const token = localStorage.getItem('auth.bearerToken')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
            return config;
        },
        error => Promise.reject(error)
    )
}

export default AxiosConfig