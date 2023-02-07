import React from "react";



function Mailbox(props){
    const  messages=props.undreadmessage;
    return(<div>
        {messages.length>0 &&
        <h1>
            You have {messages.length} number messages to read here 
        </h1>
        }
    </div>)

}

export default Mailbox;