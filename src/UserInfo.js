import React, { useState } from "react";


function UserInfo(){ 

    const [count,setCount]=useState(0);

    const handleSubmit=(e)=>{

       
        e.preventDefault();
        alert("Your information is sumitted successfully");
    }

    const handleZipChange=(e)=>{
        e.preventDefault();
        setCount(e.target.value)

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
         
            <label htmlFor="name">Name: </label><br />
            <input type='text' id='name' className="name" /><br />
            <label htmlFor="email">Email: </label><br />
            <input type='email' placeholder="shariful@gmail.com" id='email' className="email" /><br />
            <label htmlFor="password" >Password: </label><br />
            <input type='password' id='password' className="password" /><br />
            <label htmlFor="country">Country: </label><br />
            <input type='text' id='country' className="country" /><br />
            <label htmlFor="mobile">Mobile: </label><br />
            <input type='number' id='mobile' className="mobile" min={11} /><br />
            <label htmlFor="zip">ZIP: </label><br />
            <input type='number'value={count} id='zip' onChange={handleZipChange} className="zip" min={4} max={6} /><br />
            
<input type='submit' id='submit' />

        </form>
        
        </>
    )
}

export default UserInfo;