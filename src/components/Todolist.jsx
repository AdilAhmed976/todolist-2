import React from 'react'
import { Todo } from './Todo'
import '../App.css'

export const Todolist = ({todo,onDelete}) => {
    console.log(todo)
const [isCompleted ,setCompleted] = React.useState(todo.status)

  return (

      <div className="main">

          <div className='box'  >
            
            <div>
              <p className={ isCompleted ? "line" : "" }  > {todo.title}  </p> 
            </div>

            <div>
                <input type="checkbox" onChange={(e)=>{setCompleted(e.target.checked)}}  />
                <button onClick={()=>onDelete(todo.id)}>Delete</button>
            </div>

                
          </div>

      </div>
  
  )
}
