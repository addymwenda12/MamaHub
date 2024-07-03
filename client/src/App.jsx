import {Routes,Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/forms/signup'
import Form from './pages/forms/form'
import Login from './pages/forms/signin'

function App() {

  return (
    <section>
      <Routes>
        <Route path={'/accounts/get-started'} element={<Form/>}/>
        <Route path={'/accounts/login'} element={<Login/>}/>
        <Route path={'/accounts/create-account'} element={<Signup/>}/>
      </Routes>
    </section>
  )
}

export default App
