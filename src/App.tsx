import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate
import Navbar from './Components/Student/Navbar/Navbar';
import Login from './Components/Student/Login/Login';
import Signup from './Components/Student/Signup/StudentSignup';
import HomeScreen from './HomeScreen/homeScreen';
import Home from './Components/Expert/Home';
import Dashboard from './Pages/Student/Dashboard/Dashboard';
import ExpertSignup from './Components/Expert/ExpertSignup';
import ExpertLogin from './Components/Expert/Login/ExpertLogin';
import Terms from './Pages/Terms';
import CreateProject from './Pages/Student/CreateProject';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminSignup from './Components/Admin/AdminSignup';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Projects from './Components/Expert/Projects';
import ExpertDashboard from './Components/Expert/ExpertDashboard';
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
          path='/projects'
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />


        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
