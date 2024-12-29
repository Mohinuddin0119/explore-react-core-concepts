import './singer.css'

function Singer({singer}){
    console.log(singer)
    const {id,name,age} = singer
    return (
        <div className='singer'>        
            <p>ID : {id}</p>
            <p className='singer-name'>Singer name: {name}</p>
            <p>age: {age}</p>
        </div>
    )
}
export default Singer;