import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateRecipe from './pages/CreateRecipe'
import Home from './pages/Home'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const ProtectedRoute = ({children}) => {
    const currentUser = localStorage.getItem("user");

    if(!currentUser){
      return (<Link to="/login" />)
    } 
    return children;
  }

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/create-recipe' element = {<CreateRecipe />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
