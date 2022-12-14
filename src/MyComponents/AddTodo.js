import React, { useState } from 'react'
import '../App.css';

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
 
  const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("Title or desc cannot be blank");
     }
else{
    
    addTodo(title, desc);
    setTitle("");
    setDesc("");
    
     }
   

  }
    return (
     <div className="container my-3">
         <h3> Add Notes </h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                {/* <label for="title" className="form-label">Title</label> */}
                
                <input  placeholder="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control1" id="title" />
               
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <textarea type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
           
            <button type="submit" className="btn btn-sm btn-success">Add to do</button>
        </form>
     </div>
    )
}
