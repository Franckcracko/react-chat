import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonAuth from "./ButtonAuth";
import ButtonLogOut from "./ButtonLogOut";

const NavBar = (props) => {
  const auth = getAuth();
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setNameUser (user.displayName)  
    })
  }, []);

  return (
    <nav className="w-full bg-violet-600 px-4 py-1 flex items-center justify-between">
      <h3 className="font-semibold text-white text-xl">I❤️You</h3>
      <ul className="flex items-center gap-x-3 text-white text-lg">
        <li className="text-base"> <Link to="/recuerdos">Recuerdos🫂</Link> </li>
        <li className="text-base"> <Link to="/chats">Chat💬</Link> </li>
        <li className="text-base">
          {
            nameUser !== '' ? <ButtonLogOut setNameUser={setNameUser}/> : <ButtonAuth DB={props.DB} />
          }
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;