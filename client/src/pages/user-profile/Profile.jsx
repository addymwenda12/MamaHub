import "./profile.css";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/user-details",
        {
          params: { id },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [id]);

  if (user) {
    return (
      <section className="user-profile-section">
        <section className="user-profile-wrapper">
          <div className="user-profile-image-container">
            <img src={user.avatar} alt="" />
          </div>
          <h1 className="user-profile-name">{user.name}</h1>
          <div className="profile-action-buttons-wrapper">
            <button>
              <FaRegCommentDots size={16} color="white" />
              chat
            </button>
            <BsThreeDots size={14} className="fab-icon" />
          </div>
          <div className="user-bio-wrapper">
            <h2 className="title">Bio</h2>
            <p className="user-bio">{user.bio}</p>
          </div>
          <div className="user-contacts-wrapper">
            <h2 className="title">Contacts</h2>
            <div className="user-contacts">
              <FaWhatsapp size={25} color="#545454" />
              <FaInstagram size={25} color="#545454" />
              <FaFacebook size={25} color="#545454" />
            </div>
          </div>
        </section>
        <section className="user-media-wrapper">
          <Navigation />
          {currentUserSection === "journeys" ? (
            <Journeys />
          ) : currentUserSection === "media" ? (
            <Media />
          ) : currentUserSection === "recommendations" ? (
            <Recommedations />
          ) : null}
        </section>
      </section>
    );
  }
};

export default Profile;
