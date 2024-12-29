// function Todo({task,isDone}){
//     return(
//         <div>Task: {task}</div>
//     )
// }

// ---conditional randering 

// conditonal randering option1
// function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional randering option 2
// function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return  (<li>Work on: {task}</li>)
// }
// conditional randering option 3 : ternary operator
// function Todo({task,isDone}){
//     return(
//         <li>{isDone? 'finished' : 'work on'} : {task}</li>
//     )
// }
// conditional randering option4 : and(&&)
// function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && ':finish'}</li>
//     )
// }
// conditional randering option4 : or(||)
function Todo({task,isDone}){
    return(
        <li>{task} {isDone || ': work on'}</li>
    )
}

export default Todo;

// 38_8(14.12.24)