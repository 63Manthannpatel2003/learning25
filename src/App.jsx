import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import { Header } from './component/Header'
// import Footer from './component/Footer'
// import { Content } from './component/Content'
// import { AboutUs } from './component/aboutus'
// import { ArrayDemo1 } from './component/ArrayDemo1'
// import { ArrayDemo2 } from './component/ArrayDemo2'
// import { ArrayDemo3 } from './component/ArrayDemo3'
// import { ArrayDemo4 } from './component/ArrayDemo4'
// import { ArrayDemo5 } from './component/ArrayDemo5'
// import { UseStateDemo } from './component/UseStateDemo'
// import { UseStateDemo2 } from './component/UseStateDemo2'
// import { InputDemo1 } from './component/InputDemo1'
// import { UseStateDemo3 } from './component/UseStateDemo3'
import { Navbar } from './component/Navbar'
import { Route, Routes } from "react-router-dom";
import { HotstarWelcome } from './component/hotstar/HotstarWelcome'
import { HotstarHome } from './component/hotstar/HotstarHome'
import { HotstarMovies } from './component/hotstar/HotstarMovies'
import { Error404 } from './component/hotstar/Error404'
import { HotstarSeries } from './component/hotstar/HotstarSeries'
import { HotstarSports } from './component/hotstar/HotstarSports';
// import { play } from './component/hotstar/play';
import { Play } from './component/hotstar/Play';
import { FormDemo1 } from './component/Form/FormDemo1';
import { FormDemo2 } from './component/Form/FormDemo2';
import { FormDemo3 } from './component/Form/FormDemo3';
import { FormDemo4 } from './component/Form/FormDemo4';
import { FormDemo5 } from './component/Form/FormDemo5';


function App() {
   //js
  
  
 

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element = {<HotstarWelcome/>}></Route>
        <Route path="/home" element= {<HotstarHome/>}></Route>
        <Route path="/movies" element = {<HotstarMovies></HotstarMovies>}></Route>
        <Route path="/series" element = {<HotstarSeries></HotstarSeries>}></Route>
        <Route path="/sports" element = {<HotstarSports></HotstarSports>}></Route>
        {/* <Route path="/play/:id" element = {<Play/>}></Route> */}
        <Route path="/play/:id" element={<Play/>}></Route>
        <Route path="/*" element ={<Error404/>}></Route>
        <Route path ="/formdemo1" element={<FormDemo1></FormDemo1>}></Route>
        <Route path ="/formdemo2" element={<FormDemo2></FormDemo2>}></Route>
        <Route path ="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path ="/formdemo4" element={<FormDemo4></FormDemo4>}></Route>
        <Route path ="/formdemo5" element={<FormDemo5></FormDemo5>}></Route>
      </Routes>
      {/* <UseStateDemo></UseStateDemo>
      <UseStateDemo2></UseStateDemo2>
      <UseStateDemo3></UseStateDemo3> */}
      {/* <Header></Header><br></br>
      <Content></Content><br></br>
      <ArrayDemo1></ArrayDemo1> <br></br>
      <ArrayDemo2></ArrayDemo2><br></br>
      <ArrayDemo3></ArrayDemo3><br></br>
      <ArrayDemo4></ArrayDemo4>    <br></br>  
      <ArrayDemo5></ArrayDemo5> <br></br>
      <ArrayDemo6></ArrayDemo6> <br></br>
      <AboutUs></AboutUs>
      <Footer></Footer> */}
    </div>
  )
}

export default App
