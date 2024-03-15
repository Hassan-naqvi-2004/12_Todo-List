import React, { useState, useRef } from 'react'
import { ImPower } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";



const App = () => {

  const [todo, setTodo] = useState([]);
  const ref = useRef(null);
  console.log(ref);

  const handleClick = ()=>{
    setTodo([...todo,ref.current.value])
    ref.current.value=''
  }

  const handleDel = (item)=>{
    setTodo(todo.filter((e)=> item !== e ))
  }
  return (
    <div>


<div className='main'> 
      <nav> 
      <div className='navbar'>
        <h1>TODO LIST <ImPower /></h1>
      <div className='btn'>  
      <input type="text" ref={ref}/>
      <button onClick={handleClick} ><IoMdAdd /></button>
      </div>
      </div>
      </nav>   
      

      {todo.map((item,i)=>{
      return(
        <>
        <div className='ap'>
        <p>{`${i+1}:${item}`}</p>
        <button onClick={()=>handleDel(item)}>delete</button>
        </div>
        </>
      )

      
      })}
    </div>
</div>  

  )
}

export default App

