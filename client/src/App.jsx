import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Signup from "./pages/forms/Form.jsx";
import Form from "./pages/forms/GetStarted";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SideBar from "./components/Sidebar/sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


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
            <SideBar/>
            <div style={{flex:1,padding:'0 10px'}}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
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
