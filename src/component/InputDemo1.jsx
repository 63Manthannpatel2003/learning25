import React,{useState} from 'react'

export const InputDemo1 = () => {
    const [name,setname]=useState("")
    const[email,setemail]=useState("")

    const namehandler=(event)=>{
        console.log(event.target.value)

    }
  return (
    <div style={{textAlign:"Center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME : </label>
            <input type = 'text' placeholder='Enter Name'
            onChange={(event)=>{namehandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>EMAIL : </label>
            <input type = 'email' placeholder='Enter Email'
            onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
        </div>
        </div>
  )
}
