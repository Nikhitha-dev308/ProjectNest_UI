import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate
import Navbar from './Components/Student/Navbar';
import Login from './Components/Student/Login';
import Signup from './Components/Student/StudentSignup';
import HomeScreen from './HomeScreen/homeScreen';
import Home from './Components/Expert/Home';
import Dashboard from './Pages/Student/Dashboard';
import ExpertSignup from './Components/Expert/ExpertSignup';
import ExpertLogin from './Components/Expert/ExpertLogin';
import Terms from './Pages/Terms';
import CreateProject from './Pages/Student/CreateProject';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminSignup from './Components/Admin/AdminSignup';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Projects from './Pages/Expert/Projects';
import ExpertDashboard from './Pages/Expert/ExpertDashboard';
import Profile from './Pages/Student/StudentProfile';
import ExpertProfile from './Pages/Expert/ExpertProfile';
import FreeResources from './Pages/Student/FreeResources';
import Freeresources from './Pages/Expert/Freeresources';
import AskAi from './Pages/Student/AskAi';
// import About from './Components/About'

// Define ProtectedRoute here itself
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isStudentAuthenticated = localStorage.getItem('email') ? true : false;
  const isExpertAuthenticated = localStorage.getItem('expertEmail') ? true : false;
  const isAdminAuthenticated = localStorage.getItem('adminEmail') ? true : false;

  if (!isStudentAuthenticated && !isExpertAuthenticated && !isAdminAuthenticated) {
    return;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/student/login' element={<Login />} />
        <Route path='/student/signup' element={<Signup />} />
        <Route path='/expert/home' element={<Home />} />
        <Route path='/expert/login' element={<ExpertLogin />} />
        <Route path='/expert/signup' element={<ExpertSignup />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/signup' element={<AdminSignup />} />
        {/* Protected Routes */}
        <Route
          path='/student/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <freeResources/> */}
        <Route
          path='/expert/dashboard'
          element={
            <ProtectedRoute>
              <ExpertDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/student/createproject'
          element={
            <ProtectedRoute>
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path='/student/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/student/askai'
          element={
            <ProtectedRoute>
              <AskAi />
            </ProtectedRoute>
          }
        />
        <Route
          path='/student/freeresources'
          element={
            <ProtectedRoute>
              <FreeResources />
            </ProtectedRoute>
          }
        />
        <Route
          path='/projects'
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path='/expert/profile'
          element={
            <ProtectedRoute>
              <ExpertProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/expert/freeresources'
          element={
            <ProtectedRoute>
              <Freeresources />
            </ProtectedRoute>
          }
        />



        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
