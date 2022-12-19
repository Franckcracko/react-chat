import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import HeaderChat from "../HeaderChat/HeaderChat";
import InputChat from "../InputChat/InputChat"

const Chat = (props) => {
  const auth = getAuth();
  const [user, setUser] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return setUser(user.uid);
      setUser('')
    })
  }, []);
  

  return (
    <article style={{minHeight:'50vh'}} className="shadow-md w-4/5 mx-auto my-2 ">
      <HeaderChat />
      {
        user !== '' ?
          <div className="p-1">
            <ChatContainer DB={props.DB} />
            <InputChat className="absolute bottom-0" DB={props.DB} />
          </div>
          :
          <h2 className="m-auto mt-30 font-medium text-center">Incia Sesion</h2>
      }
    </article>
  )
}

export default Chat;















// INICIA SESION PARA MANDAR MENSAJES WUAPA 😘