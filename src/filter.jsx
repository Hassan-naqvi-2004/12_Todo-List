import React from 'react'

const Filter = () => {
    const fil = ['maria','hassan','ali','amna']
    console.log( fil)
   const g =  fil.filter((e)=> e !== "maria" )
   console.log( g)
  return (
    <div>
        hello
      
    </div>
  )
}

export default Filter
