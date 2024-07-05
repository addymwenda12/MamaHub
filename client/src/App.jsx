import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Signup from "./pages/forms/form.jsx";
import Form from "./pages/forms/GetStarted";
import Home from "./pages/Home/Home";
import {Navbar,Sidebar,Main,Footer } from "./components";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const location = useLocation();
  const isAuth =
    location.pathname === "/get-started" ||
    location.pathname === "/account";

  return (
    <section className="App">
      {isAuth ? (
        <Routes>
          <Route path={"/get-started"} element={<Form />} />
          <Route path={"/account"} element={<Signup />} />
        </Routes>
      ) : (
        <section className="body">
          <Main>
            <Sidebar/>
            <div style={{flex:1,padding:'0 10px'}}>
            <Navbar />
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
            </div>
          </Main>
          <Footer/>
        </section>
      )}
    </section>
  );
}

export default App;
