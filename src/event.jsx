function Event(){
    function myFunction(){
        alert('Clicked by me')
    }
    const handle2 = () =>{
        alert('Cliked 2')
    }
    const addToFive = (num) => {
        alert(num + 5)
    }
    return(
        <div>
            <button onClick={myFunction}>Click me</button>
            <button onClick={handle2}>Click me 2</button>
            <button onClick={() =>addToFive(5)}>Click me 3</button>
            <button onClick={() =>alert('four cliked by me')}>Click me 4</button>
            <button onClick={function myF(){ alert('Five cliked')}}>Click me 5</button>
        </div>
    )
}

export default Event;