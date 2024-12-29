import './post.css'
function Post({post}){
    // console.log(post)
    const {title,id,userId,body} = post;

    return (
        <div className="post">
            <p style={{color:'tomato'}}><small>Id: {id}</small></p>
            <p><small>userId: {userId}</small></p>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>

        </div>
    )
}
export default Post;