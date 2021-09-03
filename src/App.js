import React, { useState, useEffect} from "react";
import analytics from "./firebase";
  
function App() {
  const [users, setusers] =useState([]);

  useEffect(() => {
    const fetchuser = async() => {
      const db = analytics.firestore()
      const data = await db.collection("users").get()
      setusers(data.docs.map(doc => doc.data()))
    }
    fetchuser()
  }, [])

  return(
      <ul>
      {users.map(user => (
        <li key ={user.name}>{user.name}</li>
      ))}
      </ul>
    
  );
}

export default App;


