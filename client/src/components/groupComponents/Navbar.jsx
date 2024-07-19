import { useContext } from "react";
import "./styles.css";
import { GlobalContext } from "../../context/context";

const Navbar = () => {
  const { currentGroupSection, setCurrentGroupSection } =
    useContext(GlobalContext);

  const items = [
    {
      name: "journeys",
    },
    {
      name: "media",
    },
    {
      name: "recommendations",
    },
  ];
  console.log(currentGroupSection);

  return (
    <nav className="group-navigation-menu">
      {items.map((item) => {
        return (
          <button
            className={`group-navigation-button ${
              currentGroupSection === item.name ? "active" : ""
            }`}
            onClick={() => setCurrentGroupSection(item.name)}
            key={item.name}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
