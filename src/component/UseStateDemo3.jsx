import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    //usestate demo 1
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
        console.log("count= ", count);
    }

    //UseStateDemo 2
    const [isLoading, setisLoading] = useState(true);
    const [array, setarray] = useState([]);// for array
    const [form, setForm] = useState({name:"",email:"",date:"",time:"",address:""}); //for object
    
    //Ticket booking states
    const [name, setname] = useState(""); //for string

    const Loading = () => {
        isLoading == true ? setisLoading(false) : setisLoading(true);
        // setisLoading(false);

    }

    const changeName = (event) => {
        setname(event.target.value);
    }
    const handleFormChange=(event)=>{
        setForm({...form,[event.target.name]:event.target.value});
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        alert("Ticket booked successfully!");
    }


    
    //user admin login stats
    const[login,setLogin]=useState({username:"",password:"",role:""});
    const handleLoginChange=(e)=>{
        setForm({...login,[e.target.name]:e.target.value});
    }
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        alert(`Login as ${login.role}`);
    }


    //blood doantion stats
    const[donation,setDonation]=useState({Name:"",Bgroup:"",Contact:"",City:"",Age:""});
    const handleDonateChange=(e)=>{
        setDonation({...donation,[e.target.name]:e.target.value});
    }
    const handleDonateSubmit=(e)=>{
        e.preventDefault();
        alert("Donation successful");
    }
    return (
        <div style={{ textAlign: "center" }}>

            {/* Demo 1 */}
            <h2>UseStateDemo</h2>
            <br />
            <button onClick={() => { increaseCount() }}>increase count={count}</button>

            {/* Demo 2 */}
            <h2>Use State Demo 2</h2>
            {isLoading == true ? "Loading..." : (
                <>
                Enter your name: <input type="text" value={name} onChange={changeName} /> {name}
                </>
            )}
            <br />
            <button onClick={() => { Loading() }}>loading  {isLoading == true ? "stop" : "start"}</button>
            <br />
            {/* Demo 3 */}
            {/* Enter your name: <input type="text" value={name} onChange={changeName}/> {name} */}


        <br></br>
        <br></br>
            <h1>Ticket Booking</h1>
      <form onSubmit={handleFormSubmit}>
        <input name="name" placeholder="Name" onChange={handleFormChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleFormChange} required />
        <input name="date" type="date" onChange={handleFormChange} required />
        <input name="time" type="time" onChange={handleFormChange} required />
        <input name="seats" type="number" placeholder="Seats" onChange={handleFormChange} required />
        <button type="submit">Book Ticket</button>
      </form>
            <br />
      <h1>User/Admin Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input name="username" placeholder="Username" onChange={handleLoginChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleLoginChange} required />
        <select name="role" onChange={handleLoginChange} required>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
      <br />
      <h1>Blood Donation</h1>
      <form method="POST"  onSubmit={handleDonateSubmit}>
        <input name="Name" placeholder="Name" onChange={handleDonateChange} required />
        <input name="Bgroup" placeholder='Bgroup' onChange={handleDonateChange} required />
        <input name="City" placeholder="City" onChange={handleDonateChange} required />
        <input name="Contact" placeholder="Contact" onChange={handleDonateChange} required />
        <input name="Age" type="number" placeholder="Age" onChange={handleDonateChange} required />
        <button type="Submit">Login</button>
      </form>



        </div>
    )
}
