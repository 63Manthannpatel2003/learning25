import React from 'react'
import { useForm } from 'react-hook-form'
export const FormDemo4 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required*"
            }
        },
        contactValidator: {
            pattern: {
                value: /[6-9]{1}[0-9]{9}/,
                message: "contact is not valid*"
            }
        },
        codeValidator: {
            validate: (value) => {
                //value  == ok
                return value == "royal" || "code must be royal"
            }
        }
    }
    return (
        <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='enter name' {...register("name",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>{errors.name?.message}</span>
            </div>
            <div>
                <label>Contact</label>
                <input type='text' placeholder='enter Contact' {...register("contact",validationSchema.contactValidator)}></input>
                <span style={{color:"red"}}>
                    {
                        errors.contact?.message
                    }
                </span>
            </div>
            <div>
                <label>Enter code</label>
                <input type='text' placeholder='enter code' {...register("code",validationSchema.codeValidator)}></input>
                {
                    errors.code?.message
                }
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
            </form>
            </div>
    )
}
