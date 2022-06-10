import React, { useContext, useState } from 'react'
import { Functioncontext } from '../Context/Function';

const Todos = () => {
    const {state,dispatch}=useContext(Functioncontext);
    const [isCompleated,setisCompleated]=useState(state.isCompleated)
    const Delete=(id)=>{
        dispatch({
          type:"remove",
          id:id
        })
    }

    const toggle=(id,isCompleated)=>{
      console.log(id,isCompleated);
    
    }
  return (
    <div>Todos
        {state.map((todo)=>(
            <div key={todo.id}>
                <input type="checkbox" checked={isCompleated} 
                onChange={(e)=>{setisCompleated(e.target.checked);toggle(todo.id)}} />
               <div>{todo.Task}</div> 
            <button onClick={()=>Delete(todo.id)} >Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Todos
