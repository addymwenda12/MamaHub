import "./profile.css";

import { useContext } from "react";

import {
  FaRegCommentDots,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { Journeys, Media, Navigation, Recommedations } from "../../components";
import { GlobalContext } from "../../context/context";

const Profile = () => {
    const { currentUserSection } = useContext(GlobalContext);

  return (
    <section className="user-profile-section">
      <section className="user-profile-wrapper">
        <div className="user-profile-image-container">
          <img src="" alt="" />
        </div>
        <h1 className="user-profile-name">name</h1>
        <div className="profile-action-buttons-wrapper">
          <button>
            <FaRegCommentDots size={16} color="white" />
            chat
          </button>
          <BsThreeDots size={14} />
        </div>
        <div className="user-bio-wrapper">
          <h2 className="title">Bio</h2>
          <p className="user-bio">this is my bio</p>
        </div>
        <div className="user-contacts-wrapper">
          <h2 className="title">Contacts</h2>
          <div className="user-contacts">
            <FaWhatsapp size={22} color="#545454"/>
            <FaInstagram size={22} color="#545454"/>
            <FaFacebook size={22} color="#545454" />
          </div>
        </div>
      </section>
      <section className="user-media-wrapper">
        <Navigation />
        {currentUserSection === "journeys" ? (
          <Journeys/>
        ) : currentUserSection === "media" ? (
          <Media />
        ) : currentUserSection === "recommendations" ? (
          <Recommedations />
        ) : null}
      </section>
    </section>
  );
};

export default Profile;
