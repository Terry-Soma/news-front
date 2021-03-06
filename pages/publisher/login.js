import { GoogleLogin } from "react-google-login";
import styles from '../../styles/provider.module.css'
import { useRouter } from "next/dist/client/router";
import axios from "../axios/axios";


export default function Index() {
    const router = useRouter();
    const onSuccess = (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
        axios.post('user/oauth/', { token: id_token })
            .then(res => {
                localStorage.setItem("News-token", res.data.token);
            }
            ).catch(err => console.log(err));
    };

    return (

        <div className={styles.container}>
            <div className={styles.title__container}>
                <h1 className={styles.title}>   News сайтын нэвтрэх хэсэг </h1>
            </div>
            <GoogleLogin
                clientId="788478188804-2p34e0q7upag13prl82ou08uuh7alv5p.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={(err) => { console.log(err); }}
            />
        </div>
    )
}