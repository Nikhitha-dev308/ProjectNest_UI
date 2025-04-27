import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Use 'react-router-dom'
import Navbar from './Components/Student/Navbar/Navbar'
import Login from './Components/Student/Login/Login'
import Signup from './Components/Student/Signup/StudentSignup'
import HomeScreen from './HomeScreen/homeScreen'
import Home from './Components/Expert/Home'
import Dashboard from './Pages/Student/Dashboard/Dashboard'
import ExpertSignup from './Components/Expert/ExpertSignup'
import ExpertLogin from './Components/Expert/Login/ExpertLogin'
import Terms from './Pages/Terms'
import CreateProject from './Pages/Student/CreateProject'
// import About from './Components/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/student/login' element={<Login />} />
          <Route path='/student/signup' element={<Signup/>} />
          <Route path='/expert/home' element={<Home/>} />
          <Route path='/student/dashboard' element={<Dashboard/>}/>
          <Route path='/expert/login' element={<ExpertLogin/>}/>
          <Route path='/expert/signup' element={<ExpertSignup/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/createproject' element={<CreateProject/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
