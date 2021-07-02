import React, {useState} from 'react';


const Form =()=>{
    const [name, setName] = useState("")
    const [FName, setFName] = useState();
    const [lname, setlname] = useState();
    const [Lname, setLname] = useState("");
    const [email, setemail] = useState();
    const [Email, setEmail] = useState();
    const [number, setnumber] = useState();
    const [Number, setNumber] = useState();
    const inputEvent =(event)=>{ 
        setName(event.target.value);   
    }
    const inputsEvent =(event)=>{ 
        setlname(event.target.value);
    }
    const inputEmailEvent = (event)=>{
        setemail(event.target.value);
    }
    const inputNumberEvent = (event)=>{
        setnumber(event.target.value);
    }
    const onSubmit =( event)=>{
        event.preventDefault();
        setFName(name);
        setLname(lname);
        setEmail(email);
        setNumber(number);
    }
return(
    <>
    <div className="cam">
    <div id="cam-lens"/>
    <div id="cam-line"/>
    </div>
    <div className="container">
    <form onSubmit={onSubmit}>
    <span className="msg">
        <h1>Hello, {FName} {Lname}</h1>
        <p>{Email}</p>
        <p>{Number}</p>
        </span>
        <input type="text" placeholder="First Name" onChange={inputEvent} value={name}/>
        <br/>
        <input type="text" placeholder="Last Name" onChange={inputsEvent} value={lname}/>
        <br/>
        <input type="email" placeholder="Your Email" onChange={inputEmailEvent} value={email}/>
        <br/>
        <input type="number" placeholder="Your Mobile Number" onChange={inputNumberEvent} value={number}/>
        <button type='submit' onClick={onSubmit}>Click Me 👍🏻 </button>
        </form>
    </div>
    <div id="bottom">
        <div id="bottom-btn"/>
    </div>

    </>
)
}

export default Form;