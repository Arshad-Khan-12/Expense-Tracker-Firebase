import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

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
    <div className="login">
      <p>Sign in with Google to continue</p>
      <button className="login-button" onClick={signInWithGoogle}>
        {" "}
        Sign in with Google{" "}
      </button>
    </div>
  );
};
