function Friend({friend}){
    const {name,email} = friend

    const friendStyle = {
        border:'2px solid tomato',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',
        color:'white',
        fontSize:'20px',
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}
export default Friend;