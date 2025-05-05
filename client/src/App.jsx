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
import Header from './components/Header'

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
    <div><div>
          <Header />
        </div>
      <Routes>
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/create-recipe' element = {<CreateRecipe />} />
        <Route path='/recipes' element = { <Home /> } />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
