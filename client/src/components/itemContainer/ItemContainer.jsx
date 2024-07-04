import "./itemContainer.css";
import { IoMdAddCircleOutline } from "react-icons/io";

const ItemContainer = () => {
  return (
    <div className="item-container">
      <div className="user-Avatar-container">
        <img src="../../images/image-forms.jpg" alt="avatar" />
      </div>
      <div className="user-details-wrapper">
        <div className="header">
          <h1 className="username">Mothers</h1>
          <button className="follow-btn">
            <IoMdAddCircleOutline size={14} color="#FFFFFF" />
            <span>Follow</span>
          </button>
        </div>
        <p className="categories">family planning</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
          quam sit amet....
        </p>
      </div>
    </div>
  );
};

export default ItemContainer;
