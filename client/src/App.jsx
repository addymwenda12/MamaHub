import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Signup from "./pages/forms/signup";
import Form from "./pages/forms/form";
import Login from "./pages/forms/signin";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SideBar from "./components/Sidebar/sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


function App() {
  const location = useLocation();
  const isAuth =
    location.pathname === "/accounts/get-started" ||
    location.pathname === "/accounts/login" ||
    location.pathname === "/accounts/create-account";

  return (
    <section className="App">
      {isAuth ? (
        <Routes>
          <Route path={"/accounts/get-started"} element={<Form />} />
          <Route path={"/accounts/login"} element={<Login />} />
          <Route path={"/accounts/create-account"} element={<Signup />} />
        </Routes>
      ) : (
        <>
          <SideBar/>
          <Main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
          </Main>
        </>
      )}
    </section>
  );
}

export default App;
