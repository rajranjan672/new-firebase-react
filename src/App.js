import { collection, getDocs } from "@firebase/firestore";

import React, { useState, useEffect} from "react";
import db from "./firebase";

function App() {
  const [users, setusers] =useState([]);

  useEffect(() => {
    (async () => {
        const userCollection = collection(db, "users");
        const userSnapshot = await getDocs(userCollection);
        setusers(userSnapshot.docs.map((doc) => doc.data()));
    })();
}, []);

  return(
    <div>
      {users.map((user) => (
        <li key ={user.name}>{user.name}
        -{user.phone} - {user.email} - {user.gender} - {user.country} - {user.minsleft}"min"- {user.onCall}"on call" - {user.isOnline}"isOnline"  </li>
      ))}
    </div>
    
  );
}
export default App;
