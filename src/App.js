import React, { useState, useEffect, Fragment} from "react";
import analytics from "./firebase";


function App() {
  const [users, setusers] =useState([])

  useEffect(() => {
    const fetchdata = async() => {
      const db = analytics.firestore()
      const data = await db.collection("users").get()
      setusers(data.docs.map(doc => doc.data()))
    }
    fetchdata()
  }, [])

  return(
   <Fragment>
      <ul>
      {users.map(user => {
        return(
        <li key ={user.name}>{user.name}</li>
        )
      })}
      </ul>
    </Fragment>
    
  );
}

export default App;












// import { useState, React, Fragment} from "react";
// import UsersList from "./component/UsersList";

// function App() {
//   const [users, setUsers] =useState([]);
//   const [loading, setisLoading] =useState(false);

//   async function fetchUserhandler() {
//     setisLoading(true);
    
//     const response = await fetch('https://console.firebase.google.com/u/0/project/speakapp-d4970/firestore/data/~2Fusers/myusers.json');
//     const data = response.json();

//     const transformedUsers = data.map((user) => {
//       return {
//         name: user.name,
//         phone: user.phone,
//       };
//     });
    
//     setUsers(transformedUsers);
    
//     setisLoading(false);
//   }

//   return(
//    <Fragment>
//      <section>
//        <button onClick={fetchUserhandler}>get usets</button>
//      </section>
//      <section>
//        {!loading && users.length > 0 && <UsersList users={users} />}
//        {!loading && users.length === 0 && <p>Found no user</p>}
//        {!loading && <p>Loading...</p>}
//      </section>
//     </Fragment>
    
//   );
// };

// export default App;