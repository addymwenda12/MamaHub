import "./groupProfile.css";
import {
  GroupBanner,
  GroupNavigation,
  Journeys,
  Media,
  Recommedations,
  SuggestedContainer,
} from "../../components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";

const GroupProfile = () => {
  const { currentGroupSection } = useContext(GlobalContext);
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/all-users");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const getGroupDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/group-details",
        {
          params: { id },
        }
      );
      setGroup(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getGroupDetails();
  }, [id]);
  if (group) {
    return (
      <section className="group-profile">
        <GroupBanner group={group} />
        <section className="group-profile-body">
          <GroupNavigation />
          {currentGroupSection === "journeys" ? (
            <Journeys />
          ) : currentGroupSection === "media" ? (
            <Media />
          ) : currentGroupSection === "recommendations" ? (
            <Recommedations />
          ) : null}
          {users.length > 0 ? (
            <section className="suggested-section">
              <h1 className="title">suggested</h1>
              <section className="suggested-section-items">
                {users.map((user) => {
                  return <SuggestedContainer user={user} key={user._id} />;
                })}
              </section>
            </section>
          ) : null}
        </section>
      </section>
    );
  }
};

export default GroupProfile;
