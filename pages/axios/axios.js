import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/api/v1/"
});

// instance.defaults.withCredentials = true;
export default instance;