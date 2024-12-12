import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      userName: results.user.displayName,
      userEmail: results.user.email,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
    navigate("/tracker");
  };

  if (isAuth) {
    return <Navigate to="/tracker" />;
  }

  return (
    <div className="container">
      <div className="login">
        <h2>Sign in to continue</h2>
        <button className="login-button" onClick={signInWithGoogle}>
          <div className="btn">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <p>Sign in with Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};
