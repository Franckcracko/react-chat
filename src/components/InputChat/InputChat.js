import { useEffect, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const InputChat = (props) => {
  const firestore = getFirestore(props.DB);
  const auth = getAuth();

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    })
  }, []);

  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    addDoc(collection(firestore, "chats"), {
      name: user.displayName,
      message,
      uid: user.uid,
      date: Date.now()
    })
      .then(res => {
        console.log("Se envio!");
        event.target.reset()
      })
      .catch(error => { console.log(error) })

  }
  return (
    <footer>
      <form className="flex justify-center w-full py-2" onSubmit={submit}>
        <input type="text" className="w-3/4 rounded pl-2 py-1 mr-2 border focus:bg-blue-50" name="message" placeholder="..." onChange={handleInputChange} />
        <button className="rounded bg-blue-600 shadow-md text-white p-2" type="submit">Enviar</button>
      </form>
    </footer>
  )
}

export default InputChat;