import { useEffect, useState } from "react";
import Friend from "./Friend";

function Friends(){
    const [friends,setFriends] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    const friendStyle = {
        border:'2px solid aqua',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={friendStyle}>
            <h3>Friends:{friends.length}</h3>
            {
                friends.map((friend) => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
export default Friends;