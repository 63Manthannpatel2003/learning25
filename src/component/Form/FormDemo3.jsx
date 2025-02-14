import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Errors....", errors)

    const submitHandler = (data) => {
        alert("Submitted...")
        console.log("data......", data)
    }

    const ValidationSchema = {
        ageValidator: {
            required: {
                value: true,
                message: "AGE IS MANDATORY FIELD"
            },
            min: {
                value: 18,
                message: "MIN AGE 18 IS REQUIRED*"
            },
            max: {
                value: 60,
                message: "MAX AGE 60 IS REQUIRED*"
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "EMAIL IS REQUIRED*"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message : "PASSWORD IS REQUIRED*"
            },
            minLength:{
                value:8,
                message :"PASSWORD MUST BE > 8"
            },
            maxLength:{
                value:15,
                message : "PASSWORD MUST BE < 15"
            }
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>FORM DEMO 3</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' {...register("name", { required: { value: true, message: "NAME IS REQUIRED*" } })}></input>
                    <span style={{ color: "red" }}>{errors.name?.message}</span>
                    {/* {errors.name.message} */}
                    {/* {
                errors.name && errors.name.message
            } */}
                    {/* {
                        errors.name?.message
                    } */}
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' placeholder="Enter Age" {...register("age", ValidationSchema.ageValidator)}></input>
                    <span style={{ color: "red" }}>{errors.age?.message}</span>
                </div>
                <div>
                    <label>EMAIL</label>
                    <input type='text' placeholder="Enter vaild email" {...register("email", ValidationSchema.emailValidator)}></input>
                    <span style={{ color: "red" }}>{errors.email?.message}</span>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input type='password' placeholder = "Enter correct pass"  {...register("pass",ValidationSchema.passwordValidator)}></input>
                <span style={{color:"red"}}>{errors.pass?.message}</span>
                </div>


                <div>
                    <input type='SUBMIT' value="LOG IN"/>
                </div>
            </form>
        </div>
    )
}

