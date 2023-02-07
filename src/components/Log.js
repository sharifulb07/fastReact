import React from "react";
function LogInButton(props){
    return <button  onClick={props.onClick}>LoggedIn</button>
}

function LogOutButton(props){
    return <button onClick={props.onClick} >LoggedOut now</button>
}


export  {LogInButton,LogOutButton};