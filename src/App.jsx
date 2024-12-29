import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../Todo'
import Actor from './Actor'
import Singer from './Singer'
import Book from './Book'
import Event from './event'
import Counter from './counter'
import Users from './users'
import Friends from './Friends'
import Posts from './core-concepts-recap/Posts'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['sakib','shoriful','Jasim','Rubel','Salman shah']
  
  const islamicSingers = [
    {id: 1 , name:'Mohiuddin Tanbir', age: 30},
    {id:2, name: 'Masud reja', age:28},
    {id:3, name : 'Nurul mostafa', age:31},
    {id:4, name : 'Saimon reja', age:35},
  ]
  
  const bois = [
    {id:1, name: 'physics', price:100},
    {id:2, name: 'Math', price:200},
    {id:3, name: 'Sensor', price:300},
    {id:4, name: 'Micro', price:400},
    {id:5, name: 'Internet', price:500},
  ]
  return (
    <>
      <h2>React core concepts recap</h2>
      <ol style={{margin:'20px'}}>
        <li>Components</li>
        <li>JSX</li>
        <li>props</li>
        <li>event handler</li>
        <li>state</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>

      <hr style={{margin:'50px'}} />
      <h2>React core concepts</h2>
      <Friends></Friends>
      <Users></Users>
      <Todo task='learn React' isDone={true}></Todo>
      <Todo task='Learn core component' isDone={false}></Todo>
      <Todo task='learn JSX' isDone={true}></Todo>
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name='Mobile' price='30k'></Device>
      <Device name='watch' price='3k'></Device>
      <Device name='Monitor'></Device>
      <Student grade='7'  score='50'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
      {/* <Actor name='Manna'></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {
        bois.map(book => <Book books = {book}></Book>)
      }
{/* 
      {
        islamicSingers.map(singer => <Singer singer ={singer}></Singer>)
      } */}


      {/* event handlers */}

    <Event></Event>

    {/* Counter */}
    
    <Counter></Counter>
    </>
  )
}
function Student({grade = 1 ,score = 0}){
  const name = 'Mohin'
  const age = 21
  return (<div className='Student'>
    <h1>My Name is {name}</h1>
    <h2>I am {age} years old</h2>
    <h3>Class: {grade}</h3>
    <h3>Score: {score}</h3>
  </div>)
}

function Developer(){
  const devStyle = {
    border:'10px blue solid',
    padding:'10px',
    borderRadius:'10px',
    margin: '20px 0px',
    backgroundColor:'aqua',
  }
  return (
    <div style={devStyle}>
      <h1>Coding:</h1>
      <h2>Language:</h2>
    </div>
  )
}
function Device(props){
  // console.log(props)
  const devStyle = {
    padding:'10px',
    border:'5px solid purple',
    margin:'10px',
    borderRadius:'10px',
    fontSize:'50px',
    color:'white',
    backgroundColor:'tomato'
  }
  return(
    <div style={devStyle}>This device: {props.name}
    <div style={devStyle}>Price is: {props?.price ? props.price : 'Free'}</div>
    </div>
  )
}

export default App
