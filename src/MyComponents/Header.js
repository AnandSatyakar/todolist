import React from 'react';
import '../App.css';
 
export default function Header() {

  let headerStyle = {
   
    width: "100%",
    height: "80px",
    

}



    return (
      
          <header className="bg-dark text-light" style={headerStyle}>
           <div className="container "> <h4 > To Do List  </h4> </div>
          

         
           
        </header>
       
    )
}
