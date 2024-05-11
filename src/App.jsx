
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { useContext, useState } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './shared/Navbar/Navbar';
import ErrorPage from './pages/Error/ErrorPage';
import Footer from './shared/Footer/Footer';
import Services from './pages/Services/Services';
import { AuthContext } from './providers/AuthProvider';
import Loader from './utility/Loader';


function App() {
  const {loading} = useContext(AuthContext);
  const [isErrorPage, setIsErrorPage] = useState(false);

  if(loading){
    return <Loader />
  }

  return (
    <BrowserRouter>
    <Toaster />
     <div className='bg-white dark:bg-dark_bg'>
     <div className="main mx-auto">
      {!isErrorPage && <Navbar />}
       <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/services" element={<Services />} />



         <Route path="*" element={<ErrorPage setIsErrorPage={setIsErrorPage} message={"The following route is not found"} />} />
       </Routes>
       </div>
     </div>
     {!isErrorPage && <Footer />}
     </div>
   </BrowserRouter>
  )
}

export default App
