import React from 'react'

import '../App.css';
export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="card square-card"  >
        <div className="card-body">
            <h6 className="card-title">  {todo.title} </h6>
            <p className="card-text">{todo.desc}</p>
            <button className="btn  btn-danger" onClick={()=>{onDelete(todo)}}> Remove</button>
        </div>
        </div>
    )
}
