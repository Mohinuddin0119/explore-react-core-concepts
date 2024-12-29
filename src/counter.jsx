import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    function Add(){
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        if(newCount < 0){
            alert('negative value is not count')
            return newCount;
        }
        setCount(newCount)
    }
    return (
        <div style={{border:'2px solid tomato', margin:'10px', wordSpacing:'10px'}}>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>Counter: {count}</p>
            <button onClick={Add}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
export default Counter;