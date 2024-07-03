import {Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './pages/forms/signin'
import Signup from './pages/forms/signup'

function App() {

  return (
    <section>
      <Routes>
        <Route path={'/accounts/login'} element={<Login/>}/>
        <Route path={'/accounts/create-account'} element={<Signup/>}/>
      </Routes>
    </section>
  )
}

export default App
