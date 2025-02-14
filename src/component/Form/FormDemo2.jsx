import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
   const {register,handleSubmit,formState:{errors}}= useForm()
  
      const submitHandler =(data)=>
          console.log("data.....",data)

      const ValidationSchema={

        validatename:{
            required:{
                value:true,
                message:"THIS FIELD IS REQUIRED*"
            }
        },
        validateeducation:{
            required:{
                value:true,
                message :"MANDATORY FIELD*"
            }
        },
        validateworkexperience:{
            required:{
                value:true,
                message : "EXPERIENCE IS MUST"
            },
            min: {
                value: 2,
                message: "MIN AGE 2 IS REQUIRED*"
            },
            max: {
                value: 5,
                message: "MAX AGE 5 IS REQUIRED*"
            }
        }
      }
  return (
    <div style={{textAlign:"center"}}>
       <h1> DETAILS FOR JOB</h1>
       <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                    <label>NAME<ul></ul></label>
                    <input type='text' placeholder='enter your name'{...register("firstname",ValidationSchema.validatename)}></input>
                    <span>{errors.firstname?.message}</span>
                    <br></br>
            </div>
            <div>
                <label>EDUCATION DETAIL<ul></ul></label>
                <input type='text' placeholder='enter your education detail'{...register("educationdetail",ValidationSchema.validateeducation)}></input>
                <span>{errors.educationdetail?.message}</span>
                <br></br>
            </div>
            <div>
                <label>WORK EXPERIENCE<ul></ul></label>
                <input type ='number' placeholder='enter your work experience'{...register("workexperience",ValidationSchema.validateworkexperience)}></input>
                <span>{errors.workexperience?.message}</span>
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
