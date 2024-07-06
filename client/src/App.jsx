import "./App.css";

import { Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";


import { Navbar, Sidebar, Main, Footer,Chatbox } from "./components";
import {FormsContainer,CreateProfile,Home} from './pages'
import { GlobalContext } from "./context/context";

const cookies = new Cookies();

const apiKey = "q4yxdb8badm6";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      email: cookies.get("email"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}
console.log(cookies.get('profile token'))

function App() {
  
  const {isGroupSelected}=useContext(GlobalContext)

  if (!authToken) {
    return (
      <section className="App">
          <Routes>
            <Route path={"/get-started"} element={<FormsContainer />} />
          </Routes>
      </section>
    );
  }
  
  return (
    <section className="App">  
      <section className="body">
        {
          cookies.get('profile token') !== undefined ? 
          <>
        <Main>
            <Sidebar /> 
            <div style={{ flex: 1}}>
              <Navbar />
              {
                isGroupSelected ? 
                <Chatbox/>
                :
                <div style={{padding:'0 10px'}}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              }
            </div>
        </Main>
        <Footer />
        </>
        :
          <Routes>
            <Route path={"/create-profile"} element={<CreateProfile/>} />
          </Routes>
            }
      </section>
    </section>
  );
}

export default App;
