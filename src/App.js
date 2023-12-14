import Router from "./routes"
import './asstes/main.css'
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from "react-router-dom";
import Footer from "./components/header/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertow from "./components/header/Headertow";
import ScrollToTop from "./components/Scrolltotop";

function MainApp() {
  const params = useLocation();
  return (
    <>
      {params.pathname === "/Signin" ||
        params.pathname === "/Signup" || params.pathname === "/Forgetpassword" || params.pathname === "/Resetpassword" ? (
        <></>
      ) : (
        <>
          <Headertow />
        </>
      )}
      <ScrollToTop />
       {/* <GoogleOAuthProvider clientId="1047247944717-061jv17p2cr2m078vhrvd1faghg3vcp5.apps.googleusercontent.com"> */}
      <Router />
{/* </GoogleOAuthProvider> */}


      <ToastContainer />
      {params.pathname === "/Signin" ||
        params.pathname === "/Signup" || params.pathname === "/Forgetpassword" || params.pathname === "/Resetpassword" ? (
        <></>
      ) : (
        <>
          <Footer />
        </>
      )}
    </>
  );
}

export default MainApp;
