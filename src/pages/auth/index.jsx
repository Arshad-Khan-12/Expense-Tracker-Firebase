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
    <div className="containe flex items-center justify-center min-h-screen text-center  w-full">
      <div className="login w-full max-w-md p-5 rounded-lg shadow-lg bg-white bg-opacity-60 backdrop-blur-lg border border-gray-300">
        <h2>Sign in to continue</h2>
        <button
          className="login-button w-1/2 mt-3 p-2 rounded bg-gray-200 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-700 hover:text-white"
          onClick={signInWithGoogle}
        >
          <div className="btn flex flex-col items-center">
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
