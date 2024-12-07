import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Auth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: results.user.uid,
      userName: results.user.displayName,
      userEmail: results.user.email,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
    navigate("/tracker");
  };
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
