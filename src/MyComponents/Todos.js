import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
    let myStyle = {
        minHeight: "80vh",
        margin:"50px auto",
    }
    return (
        <div>
        <div className="container" style={myStyle}>
            <h5 className="my-3" >your lists</h5>
            <div className="aligns">

            
         {props.todos.length===0? "No todos to display":
         props.todos.map((todo)=>{
             return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
         })
         }
         
         </div>
        </div>
        </div>
    )
}
