import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit}= useForm()

    const submitHandler =(data)=>
        console.log("data.....",data)

  return (
    <div style ={{textAlign:"center"}} >
        <h1>Form Demo</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME<ul></ul></label>
                <input type='text' placeholder='enter your name'{...register("firstname")}></input>
                <br></br>
            </div>
            <div>
            <label>AGE</label>
                <input type='number' placeholder='enter your age'{...register("age")}></input>
                <br></br>
            </div>
            <div>
                <select {...register("country")}>
                    <option value="India">India</option>
                    <option value="Usa">Usa</option>
                    <option value="Fail">China</option>
                </select>
            </div>
            <div>
                <input type ="Submit"></input>
            </div>
            </form>
            
                <ul></ul>
                <ul></ul>
             <div style ={{textAlign:"center"}} >
            <h1>Personal Details</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FIRST NAME<ul></ul></label>
                <input type='text' placeholder='enter your first name'{...register("firstname")}></input>
                <br></br>
            </div>
            <div>
            <label>LAST NAME </label>
                <input type='text' placeholder='enter your last name'{...register("last name")}></input>
                <br></br>
            </div>
            <div>
            <label>GENDER</label>
                    MALE:<input type='radio' name='gender' value="male"{...register("gender")}></input>
                    FEMALE:<input type='radio' name='gender' value="female"{...register("gender")}></input>
            </div>
            <div>
                <input type ="Submit"></input>
            </div>
        </form>
        </div>
        <div style={{textAlign:"center"}}>
        <h1>Medical report</h1>
        
        </div>
        <ul></ul>
     <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>GENDER</label>
                FEMALE: <input type='radio' value="female" {...register("gender")} name='gender'></input>
                MALE: <input type='radio' value="male" {...register("gender")}  name='gender'></input>
                
            </div>
            <div>
                <label>REPORTS</label>
                CRC: <input type='checkbox' {...register("reports")} name='reports' value="crc"></input>
                CBC: <input type='checkbox' {...register("reports")} name='reports' value="cbc"></input>
                Food P: <input type='checkbox' {...register("reports")} name='reports' value="fp"></input>
        
            </div>
            <div>
                <input type ="Submit"></input>
            </div>
        </form>         
    </div>
       <div style={{ textAlign: "center" }}>
       <h1>FOOD</h1>
       <form onSubmit={handleSubmit(submitHandler)}>
         <div>
           <label>FoodName</label>
           <input type="text" {...register("fName")}></input>
         </div>
         <div>
             <label>veg-nonveg</label>
             VEG : <input type="radio" {...register("vegnonveg")} name="vegnonveg" value="veg"></input>
             NON-VEG : <input type="radio" {...register("vegnonveg")} name="vegnonveg" value="nonveg"></input>
         </div>
         <div>
             <label>Food-type</label>
             indian : <input type="checkbox" name="ftype" {...register("ftype")} value="indian"></input>
             kathiyvad : <input type="checkbox" name="ftype" {...register("ftype")} value="kathiyavad"></input>
             north : <input type="checkbox" name="ftype" {...register("ftype")} value="north"></input>
             west : <input type="checkbox" name="ftype" {...register("ftype")} value="west"></input>
         </div>
         <div>
             <input type="submit" value="order"></input>
         </div>
       </form>
     </div>
    </div>
  )
}




