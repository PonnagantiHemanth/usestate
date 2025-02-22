import {useState,useEffect} from 'react'

const Temp = () => {
  return (
    <div>
      
      <Demo />
    </div>
  );
};

export default Temp;

// function Demo  () {
//   const [count,setCount] = useState(0) 
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick = {() => setCount(count+1)}>Click</button>
//     </div>
//   )
// }

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data));
//   }, []); // Empty dependency array → Runs only once when component mounts

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }





function Demo () {
  const [users,setusers] = useState([])
  useEffect(() => {
    async function main() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json() 
      setusers(data);
    }
    main()
  },[])
  return (
    <div>
      <ul>
        {users.map((eachItem) => 
        <li key = {eachItem.id}>{eachItem.email}</li>
        
        )}
      </ul>
    </div>
  )
}

