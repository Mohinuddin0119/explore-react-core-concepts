import { useEffect, useState } from "react";
import Post from './post'
function Posts(){
    const [posts,setPosts]= useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return(
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map((post)=> <Post post={post}></Post>)
            }
        </div>
    )
}
export default Posts;

/**
 * 1.create state to hold data store
 * 2.create use effect with no dependencies
 * 3.use fetch to load data
 */