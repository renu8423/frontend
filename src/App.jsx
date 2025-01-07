
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage.jsx'
import Aboutus from './pages/about.jsx'
import  NotFoundPage from "./pages/PageNotFound.jsx"
import Signup from './pages/signup.jsx'

function App() {
 

  return (
   <>
   {/* <Footer/> */}

   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/about' element={<Aboutus/>}></Route>
    <Route path='*' element={<NotFoundPage/>}></Route>
    <Route path='*' element={<Signup/>}></Route>
   </Routes>
   
      </>
  )
}

export default App
