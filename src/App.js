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
      <th className="heading" data-hover="varified" style={{backgroundColor:'#dbe6cc', columnWidth:'180px', cursor:'pointer'}}>Mobile</th>
      <th className="heading" data-hover="varified" style={{color: '#1350d4',fontWeight:'bold',backgroundColor:'#dbe6cc', columnWidth:'300px', cursor:'pointer'}}>email</th>
      <th  style={{backgroundColor:'#dbe6cc',columnWidth:'145px'}}>Gender</th>
      <th style={{backgroundColor:'#dbe6cc',columnWidth:'120px'}}>isOnline</th>
      <th style={{backgroundColor:'#dbe6cc', columnWidth:'120px'}}>onCall</th>
      <th className="heading1" data-hover="current" style={{backgroundColor:'#dbe6cc', columnWidth:'150px', cursor:'pointer'}}>minsleft</th>
      

      </tr>
      </thead>
      {users.map((user) => (
        <tr>
        <td className="box body" style={{color: '#1350d4', textAlign:"center", cursor:'pointer'}} >{user.name}</td>
        <td className="box body" style={{textAlign: 'center', cursor:'pointer'}}>{user.Country}</td>
        <td className="box body" style={{textAlign: 'center', cursor:'pointer'}}>{user.phone}</td>
        <td className="box body" style={{color: '#1350d4', textAlign:"center", cursor:'pointer'}}>{user.email}</td>
        <td className="box body" style={{marginLeft:'100px', textAlign:"center", cursor:'pointer'}}>{user.Gender}</td>
        <td className="box body" style={{color:user.IsOnline ?'#1ebd2e': '#e62412', fontWeight:'bold', textAlign:"center", cursor:'pointer'}}>{user.IsOnline ?"true": "false"}</td>
        <td className="box body" style={{color:user.OnCall? '#1ebd2e' :'#e62412', fontWeight:'bold', textAlign:"center", cursor:'pointer'}}>{user.OnCall? "true": "false"}</td>
        <td className="box body" style={{textAlign: 'center', cursor:'pointer'}}>{user.minsleft}</td>
        </tr>
      ))}
      </table>
    </div>
    </Fragment>
  );
}
export default App;
