import React from 'react';
import { signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { auth, provider } from '../Services/Firebase-auth';

const SignIn = () => {
  
  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const styles = {
    signinContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#fff"
    },
    hr: {
      width: "80%",
      border: "1px solid #ddd"
    },
    googleButton: {
      marginTop: "20px",
      width: "100%",
      maxWidth: "300px"
    }
  };

  return (
    <div style={styles.signinContainer}>
      <hr style={styles.hr} />
      <GoogleButton
        onClick={handleGoogleLogin}
        style={styles.googleButton}
      />
    </div>
  );
};

export default SignIn;
