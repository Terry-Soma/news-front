import { GoogleLogin } from "react-google-login";
import styles from "../../styles/provider.module.css";
import { useRouter } from "next/router";

import axios from "lib/_axios";
import { useContext } from "react";
import { UserContext } from "context/_userProvider";

export default function Index() {
  const router = useRouter();
  const [state, setState] = useContext(UserContext);
  /*  */ if (state && state !== null) router.push("/publisher/createPost");

  const onSuccess = (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}user/oauth/`, {
        token: id_token,
      })
      .then((res) => {
        setState(res.data.token);
        localStorage.setItem("News-token", res.data.token);
        router.push("/publisher/createPost");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div div className={styles.container}>
      <div className={styles.title__container}>
        <h1 className={styles.title}> News сайтын нэвтрэх хэсэг </h1>
      </div>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={(error) => console.log(error)}
      />
    </div>
  );
}
