/*import React , {useState,useEffect} from 'react'
import Axios   from 'axios'
function UserList() {
    const [user, setUser] = useState([])
    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) =>{
           console.log(response);
           setUser(response.data)
       })
    }, [])
    return (
        <div>
              <h1 >
              All users</h1>
            
        </div>
    )
}

export default UserList*/