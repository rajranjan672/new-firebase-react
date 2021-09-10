import { collection, getDocs } from "@firebase/firestore";
import React, { useState, useEffect, Fragment} from "react";

import db from "./firebase";
import './App.css'; 

function App() {
  const [users, setusers] =useState([]);

  useEffect(() => {
    (async () => {
        const userCollection = collection(db, "users");
        const userSnapshot = await getDocs(userCollection);
        setusers(userSnapshot.docs.map((doc) => doc.data()));
    })();
}, []);
  console.log(users)
  return(
    <Fragment>
    <div>
      <h1 className="details" style={{textAlign:'center', color:'#28c9a2', cursor:'pointer'}}>Users Details</h1>
    </div>
    
    <div>
      <table border="1px" position='absolute'>
      <thead>
      <tr>
      <th style={{color: '#1350d4',fontWeight:'bold', backgroundColor:'#dbe6cc', columnWidth:'120px'}}>Name</th>
      <th style={{backgroundColor:'#dbe6cc', columnWidth:'180px'}}>Country</th>
      <th style={{backgroundColor:'#dbe6cc', columnWidth:'180px'}}>Mobile</th>
      <th style={{color: '#1350d4',fontWeight:'bold',backgroundColor:'#dbe6cc', columnWidth:'300px'}}>email</th>
      <th style={{backgroundColor:'#dbe6cc',columnWidth:'145px'}}>Gender</th>
      <th style={{backgroundColor:'#dbe6cc',columnWidth:'120px'}}>isOnline</th>
      <th style={{backgroundColor:'#dbe6cc', columnWidth:'120px'}}>onCall</th>
      <th style={{backgroundColor:'#dbe6cc', columnWidth:'150px'}}>minsleft</th>

      </tr>
      </thead>
      {users.map((user) => (
        <tr>
        <td className="box" style={{color: '#1350d4', textAlign:"center", cursor:'pointer'}} >{user.name}</td>
        <td className="box" style={{textAlign: 'center', cursor:'pointer'}}>{user.country}</td>
        <td className="box" style={{textAlign: 'center', cursor:'pointer'}}>{user.phone}</td>
        <td className="box" style={{color: '#1350d4', textAlign:"center", cursor:'pointer'}}>{user.email}</td>
        <td className="box" style={{marginLeft:'100px', textAlign:"center", cursor:'pointer'}}>{user.gender}</td>
        <td className="box" style={{color:user.isOnline ?'#1ebd2e': '#e62412', fontWeight:'bold', textAlign:"center", cursor:'pointer'}}>{user.isOnline ?"true": "false"}</td>
        <td className="box" style={{color:user.onCall? '#1ebd2e' :'#e62412', fontWeight:'bold', textAlign:"center", cursor:'pointer'}}>{user.onCall? "true": "false"}</td>
        <td className="box" style={{textAlign: 'center', cursor:'pointer'}}>{user.minsleft}</td>
        </tr>
      ))}
      </table>
    </div>
    </Fragment>
  );
}
export default App;
