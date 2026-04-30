import { useEffect, useState } from "react";
function App()
{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(error => { console.log('Error:',error);
      setLoading(false);
    });
  },[]);
 
  if(loading){
    return <h2> LOADING...</h2>;
  }

  return(
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(users => (
        <li key={users.id}><b> {users.name}</b> : {users.email}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;