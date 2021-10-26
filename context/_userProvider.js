import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState();

    useEffect(() => {
        setState(window.localStorage.getItem("News-token"));
    }, []);

    const router = useRouter();

    const token = state ? state : '';
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.interceptors.response.use(
        function (response) {
            // Do something before request is sent
            return response;
        },
        function (error) {
            // Do something with request error
            let res = error.response;
            if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                setState(null);
                window.localStorage.removeItem("News-token");
                router.push("/login");
            }
        }
    );

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };