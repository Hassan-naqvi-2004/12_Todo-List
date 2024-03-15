import React, { useState, useRef } from 'react'
import { ImPower } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";



const App = () => {

  const [todo, setTodo] = useState([]);
  const [mycolor,setMycolor]=useState('')
  
  const ref = useRef(null);
  console.log(ref);

  // const handleClick = ()=>{
  //   setTodo([...todo,{text:ref.current.value,color:mycolor}])
  //   ref.current.value=''
  // }

  const handleClick = ()=>{
      setTodo([... todo,{text:ref.current.value,color:mycolor}])
      ref.current.value=''
  }

  const handleDel = (item)=>{
    setTodo(todo.filter((e)=> item !== e ))
  }
  const themeColor = (col)=>{
    setMycolor(col)

  }
  const bg = {
    backgroundColor:mycolor,
   
  }
  return (
    <div>


<div className='main'> 
      <nav> 
      <div className='navbar'>
        <h1>TODO LIST <ImPower /></h1>
        <div className="buttons">
          <button className='green' onClick={()=> themeColor('green')}></button>
          <button className='blue' onClick={()=> themeColor('rgb(170, 170, 199)')}></button>
          <button className='yellow' onClick={()=>themeColor('yellow')}></button>

        </div>
      <div className='btn'>  
      <input type="text" ref={ref}/>
      <button onClick={handleClick} ><IoMdAdd /></button>
      </div>
      </div>
      </nav>   
      

      {todo.map((item,i)=>{
      return(
        <>
        <div className='ap' style={bg}>
        <p>{`${i+1}:${item.text}`}</p>
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

