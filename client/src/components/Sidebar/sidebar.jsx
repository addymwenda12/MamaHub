import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../logo/Logo";
import Searchbar from "../Searchbar/Searchbar";

export default function SideBar() {
  const dashboard = [
    {
      id: 1,
      label: "chats",
      to: "/chats",
    },
    {
      id: 2,
      label: "groups",
      to: "/groups",
    },
    {
      id: 3,
      label: "continue learning",
      to: "/continueLearning",
    },
    {
      id: 4,
      label: "profile",
      to: "/profile",
    },
  ];

  return (
    <aside className="sidebar-container">
      <Logo />
      <Searchbar />
      <div className="dashboard sidebar-content">
        <h1 className="title">Dashboard</h1>
        <ul className="menu-list list">
          {dashboard.map((menuItem) => (
            <li className="menu-item list-item" key={menuItem.id}>
              <NavLink to={menuItem.to} className="link">
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="settings sidebar-content">
        <ul className="settings-list list">
          <li className="settings-item list-item">
            <div className="link">
              <MdGroup size={18} />
              <span>create a group</span>
            </div>
          </li>
          <li className="settings-item list-item">
            <NavLink to={"/settings"} className="link">
              <IoMdSettings size={18} />
              <span>settings</span>
            </NavLink>
          </li>
          <li className="settings-item list-item">
            <NavLink to={"/logout"} className="link logout">
              <TbLogout2 className="logout-icon" size={18} />
              <span>log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
