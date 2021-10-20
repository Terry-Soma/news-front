import axios from "axios";

const instance = axios.create({
    baseURL: process.env.BASE_URL
});
// instance.defaults.withCredentials = true;
export default instance;