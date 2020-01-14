import React , { useState } from  "react"
import  "../navbar/sidebar.css"


const mysidebar=props=>{

let drawerclasses="setsidebar";
if(props.show){
    drawerclasses="setsidebaropen";
}

return(
    <div className={drawerclasses} >
    <ul>
<li> <a href=""> Home </a></li>
<li><a href="#turn">Services</a></li>

<li><a href="">Signup</a></li>


    </ul>
    
    
    </div>
);
};





export default mysidebar;