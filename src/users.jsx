import { useEffect, useState } from "react"

function Users(){
    const [users,setUsers] = useState([])

    // const handleAdd = () =>{
    //     const newUser = users.length + 1
    //     setUsers(newUser)
    // }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])


    const userStyle = {
        border:'2px solid tomato',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={userStyle}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

// declare a state to hold the data
// useEffect with call back and dependancy array
// use fetch hold the data

export default Users