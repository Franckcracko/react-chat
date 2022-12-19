import providerGoogle from "../../auth_google";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const ButtonAuth = (props) => {
  const DB = props.DB;
  function autentificar(DB,provider) {
    const auth = getAuth(DB);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.  
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <button
      className="bg-pink-500 rounded p-1 text-base"
      onClick={() => autentificar(DB,providerGoogle)}>
      Iniciar Sesión🤔
    </button>
  )
}
export default ButtonAuth;