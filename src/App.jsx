
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './component/Footer'
import { ToastContainer } from 'react-toastify'


function App() {
 

  return (

    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Bounce}
/>
  

    <Routes>
      <Route element={<Home />}  path='/'></Route>
      <Route element={<Dashboard />} path='/dashboard'></Route>
      <Route element={<Projects />} path='/projects'></Route>
      <Route element={<Auth />} path='/login'></Route>
      <Route element={<Auth fromRegister={true} />} path='/register'></Route>
    
    </Routes>
    <Footer />
     
    </>
  )
}

export default App
