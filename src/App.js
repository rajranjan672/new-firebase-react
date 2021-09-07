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
         = <span style={{color:'#F60BD5'}}>{user.country}</span> , <span style={{color:'blue'}}>{user.phone}</span> , <span style={{color:'red'}}>{user.email}</span> , <span style={{color:user.gender.Male? '#26CCCF': '#EE44F7'}}>{user.gender} </span> ,  {user.minsleft} "min-left" , "on call" =<span style={{color:user.onCall? 'green': 'red'}}>{user.onCall ? "true": "false"}</span> , "isOnline" =<span style={{color: user.isOnline? '#26CF29': '#F20D35'}}>{user.isOnline ? "true": "false"}</span>  </li>
      ))}
    </div>
    
  );
}
export default App;
