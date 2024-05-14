
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './shared/Navbar/Navbar';
import ErrorPage from './pages/Error/ErrorPage';
import Footer from './shared/Footer/Footer';
import Services from './pages/Services/Services';
import AddService from './pages/Add Service/AddService';
import ManageService from './pages/Manage Service/ManageService';
import BookServices from './pages/Booked Service/BookServices';
import ServiceToDo from './pages/ServiceToDo/ServiceToDo';
// import { AuthContext } from './providers/AuthProvider';
// import Loader from './utility/Loader';
import PrivateRoute from './privateRoutes/PrivateRoute';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SignleService from './pages/SingleService/SignleService';


function App() {
  // const {loading} = useContext(AuthContext);
  const [isErrorPage, setIsErrorPage] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  // if(loading){
  //   return <Loader />
  // }

  return (
    <BrowserRouter>
    <Toaster />
     <div className='bg-white dark:bg-dark_bg'>
     <div className="main mx-auto px-2 lg:px-0">
      {!isErrorPage && <Navbar />}
       <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/services" element={<Services />} />

         <Route path="/services/:id" element={<PrivateRoute><SignleService /></PrivateRoute>} />

         <Route path="/add-service" element={<PrivateRoute><AddService /></PrivateRoute>} />
         <Route path="/manage-service" element={<PrivateRoute><ManageService /></PrivateRoute>} />
         <Route path="/booked-services" element={<PrivateRoute><BookServices /></PrivateRoute>} />
         <Route path="/service-to-do" element={<PrivateRoute><ServiceToDo /></PrivateRoute>} />



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
