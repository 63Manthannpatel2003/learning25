import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
   const {register,handleSubmit}= useForm()
  
      const submitHandler =(data)=>
          console.log("data.....",data)
  return (
    <div style={{textAlign:"center"}}>
       <h1> DETAILS FOR JOB</h1>
       <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                    <label>NAME<ul></ul></label>
                    <input type='text' placeholder='enter your name'{...register("firstname")}></input>
                    <br></br>
            </div>
            <div>
                <label>EDUCATION Detail<ul></ul></label>
                <input type='text' placeholder='enter your education detail'{...register("educationdetail")}></input>
                <br></br>
            </div>
            <div>
                <label>WORK EXPERIENCE<ul></ul></label>
                <input type ='alphanumeric' placeholder='enter your work experience'{...register("workexperience")}></input>
            </div>
            <div>
                <label>SKILL<ul></ul></label>
                <input type='text' placeholder='enter your Skill'{...register("educationskill")}></input>
                <br></br>
            </div>
            <input type ="Submit"></input>

        </form>
        <br /> <h1>EVENT REGISTRATION</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        {/* event registration :- event date, time ,location, ticket prce */}
                Event date: <input type="date" {...register("date")} id="" /> <br />
                Event time: <input type="time" {...register("time")} id="" /> <br />
                location: <input type="text" {...register("location")} id="" /> <br />
                Ticket price:  <br />
                <select {...register("ticketPrice")}>
                    <option value=""></option>
                    <option value="cheap">500</option>
                    <option value="cheaper">1000</option>
                    <option value="vheapest">1500</option>
                </select><br></br>
                <input type ="Submit"></input>
        </form>
       <br />
       <h1>FEEDBACK</h1>
       {/* feedback :- satisfcn with a product of service, suggstn for improvmnt, overall exp */}
       <form onSubmit={handleSubmit(submitHandler)}>
        give ratings: 
        <select {...register("rating")}>
                    <option value="Default">0</option>
                    <option value="bad">1</option>
                    <option value="ok">2</option>
                    <option value="good">3</option>
                    <option value="brilliant">4</option>
                    <option value="excellent">5</option>
        </select>
      <br></br> suggestion: <textarea {...register("suggest")} id=""></textarea> <br />
       overall experience: <input type="text" {...register("exp")} id="" />
<br></br>       <input type="submit" value="submit" />
       
       </form>


       </div>
       
       
  )
}
