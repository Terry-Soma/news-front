import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import 'styles/main.scss';
import { UserProvider } from 'context/_userProvider';


function MyApp({ Component, pageProps }) {

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );

}

export default MyApp
