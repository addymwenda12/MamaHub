import "./App.css";

import { Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";


import { Navbar, Sidebar, Main, Footer,Chatbox } from "./components";
import {FormsContainer,CreateProfile,Home, Group} from './pages'
import { GlobalContext } from "./context/context";
import CreateGroup from "./pages/forms/CreateGroup";

const cookies = new Cookies();

const apiKey = "q4yxdb8badm6";
//authToken is used to check if the user is logged in or has signed up
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

function App() {
  
  const {isGroupSelected}=useContext(GlobalContext)

  //check if the user is logged in if not sends them to the get started page to log in or create an account
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
        {/* the profile token is used to check if the user has updated their profile
          available in cookies when creating the profile or logging in; saved in the database
        */}
        {
         cookies.get('profile Token') === undefined ? 
         <Routes>
           <Route path={"/create-profile"} element={<CreateProfile/>} />
         </Routes>
           :
          <>
        <Main>
            <Sidebar /> 
            <div style={{ flex: 1,overflow:'hidden'}}>
              <Navbar />
              {
                // check if a group is selected from the sidebar if selected then show the chatbox else other content
                isGroupSelected ? 
                <Chatbox/>
                :
                <div style={{padding:'0 10px',minHeight:'100vh',width:'100%'}}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/groups" element={<Group/>} />
                    <Route path="/create-group" element={<CreateGroup/>}/>
                  </Routes>
                </div>
              }
            </div>
        </Main>
        <Footer />
        </>
}
      </section>
    </section>
  );
}

export default App;
