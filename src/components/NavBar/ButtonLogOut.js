import { getAuth, signOut } from "firebase/auth";

const ButtonLogOut = ({setNameUser}) => {
  const auth = getAuth();
  const signOuth = (auth,setNameUser)=>{
    signOut(auth).then(() => {
      setNameUser('')
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }
  return (
    <button
      className="bg-pink-500 rounded p-1 text-base"
      onClick={() => signOuth(auth,setNameUser)}>
      Salir
    </button>
  )
}
export default ButtonLogOut;