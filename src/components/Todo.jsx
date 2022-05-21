import React from 'react'
import { v4 as uuid } from 'uuid';
import { Todolist } from './Todolist';
import '../App.css'


export const Todo = () => {
    const [ todos, setTodos ] = React.useState([ ])

    const [input,setinputValue] = React.useState("")

     const handlechange = (e) => {
        setinputValue(e.target.value)
     }
    const handleAdd = () => {
        
        setTodos([...todos,{
            id: uuid(),
            title: input,
            status: false
        },])
        setinputValue("")

    }

    const onDelete = (id) => {
        let todosfunc = todos.filter(todo=>todo.id!==id) 
        setTodos(todosfunc)
    }
    
// console.log(todos)
  return (
    <div className='top'> 
        <div>
            {todos.map(todo=> (
            <Todolist key = {todo.id}  todo={todo} onDelete={onDelete} />
            ) )}    
        </div>  

        <div>
            <input className='inp' placeholder='Write Something' type="text" value={input} onChange = {handlechange} />

            <button className='addbtn' onClick={handleAdd} ><i class="fa-solid fa-plus"></i></button>
        </div>

             
        
    </div>
  )
}
