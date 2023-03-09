import React,{useState} from "react";


function MyForm(){
    const [answer,setAnswer]=useState('');
    const[error,setError]=useState(null);
    const [status,setStatus]=useState('typinng');

    if(status==='success'){
        return <h1>That's  right</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await SubmitForm(answer);
            setStatus("success");
        }catch(err){
            setStatus('typing');
            setError(err);
        }
        
    }

    const handleText=(e)=>{
        setAnswer(e.target.value);
    }


    return(
        <>
        <h1>City  Quiz</h1>
        <p>In which city has a billboard that turn air to water </p>

        <form onSubmit={handleSubmit}>
            <textarea value={answer} onChange={handleText} disabled={status==='submitting'} /><br />
            <button disabled={answer.length===0 || status==="submitting"}>Submit</button><br />
            {error !==null && <p>{error.message}</p>}
        </form>



        </>
    )
}

function SubmitForm(answer){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let shouldError=answer.toLowerCase() !=='lima';
            if(shouldError){
                reject(new Error('Good jobs but your answer is wrong, Try Again '));
            }else{
                resolve();
            }
        }, 1500);
    })
}

export default MyForm;