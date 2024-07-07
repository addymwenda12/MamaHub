import "./navbar.css";

import { GlobalContext } from "../../context/context";
import menu from "./navMenu";

import { useContext} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'


import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";

const cookies = new Cookies()


export default function Navbar() {
  const {user}=useContext(GlobalContext)
  const navigate = useNavigate()
  const avatar = cookies.get('image')

  return (
    <nav
      className="navbar-container"
    >
      <ul className="nav-menu">
        {menu.map((menuItem) => {
          return (
            <NavLink
              key={menuItem.label}
              to={menuItem.to}
              className="menu-item"
              style={({ isActive }) =>
                isActive
                  ? { color: "#FF4F00", fontWeight: 600 }
                  : { color: "#5F5F5F" }
              }
            >
              {menuItem.label}
            </NavLink>
          );
        })}
      </ul>

      <div className="right-section">
        <MdOutlineAddBox size={24} className="icon-btns"/>
        <IoNotificationsOutline size={24} className="icon-btns"/>
        {
          user === null?
          <button className="login-btn" onClick={()=>navigate('/accounts/login')}>login</button>
          :
         <div className="avatar-container">
          <img src={avatar} alt="" className="avatar" />
         </div>
        }
      </div>
    </nav>
  );
}
