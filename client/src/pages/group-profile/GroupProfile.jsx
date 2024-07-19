import "./groupProfile.css";
import {
  GroupBanner,
  GroupNavigation,
  Journeys,
  Media,
  Recommedations,
} from "../../components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";

const GroupProfile = () => {
  const { currentGroupSection } = useContext(GlobalContext);
  const { id } = useParams();
  const [group, setGroup] = useState(null);

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
        </section>
      </section>
    );
  }
};

export default GroupProfile;
