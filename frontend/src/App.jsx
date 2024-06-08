import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todos, setTodos] = useState([])
  useEffect(() =>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
     const json =await res.json();
     setTodos(json.todos);
    })
},[])
  return (
    <>
      {Todos.map(todo =><Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}
function Todo({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App
