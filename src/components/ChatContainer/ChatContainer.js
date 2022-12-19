import MessageEmisor from "../MessageEmisor/MessageEmisor";
import MessageReceptor from "../MessageReceptor/MessageReceptor";
import { collection, query, onSnapshot, getFirestore, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ChatContainer = (props) => {
  const auth = getAuth()
  const [uid, setUid] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUid(user.uid)
    })
  }, []);
  
  const firestore = getFirestore(props.DB);

  const [messages, setMessages] = useState([]);

  const queryChats = query(collection(firestore, "chats"), orderBy("date"));
  useEffect(() => {
    onSnapshot(queryChats, (querySnapshot) => {
      setMessages(querySnapshot.docs)
    });
  }, []);


  return (
    <section style={{ height: '60vh' }} className="scroll-hide overflow-y-auto w-full flex flex-col  bg-gray-50 rounded p-2">
      <ul>
        {
          messages.map(doc => {
            const data = doc.data();
            return data.uid === uid ? <MessageEmisor key={data.date} {...data} /> : <MessageReceptor key={data.date}  {...data} />
          })
        }
      </ul>
    </section>
  )
}
export default ChatContainer;