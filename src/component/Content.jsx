import React from 'react'

export const Content = () => {
    var Name = "MANTHAN"
    var age = 22
    var IsActive = true;
    var user = {
        firstName : "Manthan",
        lastName : "Patel",
        age : 22
    }
  return (
    <div style={{backgroundColor:'brown', flexDirection:"column",display:"flex",width:"100%",alignItems:"center",color:'aqua'}}>  
      Name = {Name}<br></br>
      Age = {age}<br></br>
      IsActive = {IsActive == true ? "Active" : "Not Active"}<br></br>
      user firstName = {user.firstName}<br></br>
      user lastName= {user.lastName}<br></br>
      age={user.age}<br></br>
 </div>
  )
}