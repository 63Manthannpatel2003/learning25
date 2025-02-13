import React,{useState} from 'react'

export const UseStateDemo = () => {
    //var count=0;
    const[count,setCount]=useState(0)
    //count = state variable...
    //set count --> function --> it use for change update in state variable....
    //0 initial value

    function increaseCount (){
        //count ++;
        setCount(count+1)
        console.log("count =",count)
    }
    
  return (
    <div style ={{textAlign :"Center"}}>
        <h1>USE STATE DEMO</h1>
        <h2>Count : {count}</h2>
        {/* <button onClick={increaseCount}>increase</button> */}
        <button onClick={()=>{increaseCount()}}>increase</button>
</div>
  )
}
