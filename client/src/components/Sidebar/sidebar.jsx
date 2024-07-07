import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import ItemWrapper from "./itemContainer";

import Cookies from "universal-cookie";


const cookies = new Cookies();

export default function SideBar() {
  
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("email"), 
    cookies.remove("hashedPassword");
    cookies.remove("name")
    cookies.remove("image")
    cookies.remove("profile Token")

    navigate("/get-started");
    window.location.reload();
  };
  const groups = [
    {
      id:1,
      name:'mothers',
    },
    {
      id:2,
      name:'The Family',
    }
  ]
  

  return (
    <aside className="sidebar-container">
      <Logo />
      <Searchbar />
      <div className="dashboard sidebar-content">
        <h1 className="title">Dashboard</h1>
        <ul className="menu-list list">

          <ItemWrapper title={'chats'} items={groups}/>
          <ItemWrapper title={'groups'}/>
          <ItemWrapper title={'continue reading'}/>

          <li className="menu-item list-item-header">
            <NavLink to={"/profile"} className="link">
              profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="settings sidebar-content">
        <ul className="settings-list list">
          <li className="settings-item list-item-header">
            <div className="link">
              <MdGroup size={18} />
              <span>create a group</span>
            </div>
          </li>
          <li className="settings-item list-item-header">
            <NavLink to={"/settings"} className="link">
              <IoMdSettings size={18} />
              <span>settings</span>
            </NavLink>
          </li>
          <li className="settings-item list-item-header">
            <div className="link logout" onClick={logout}>
              <TbLogout2 className="logout-icon" size={18} />
              <span>log out</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
