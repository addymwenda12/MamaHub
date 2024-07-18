import "./home.css";
import { Link } from "react-router-dom";
import { Banner, PostItem, ItemContainer } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [groups, setGroups] = useState([]);

  const getAllGroups = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/all-groups");
      setGroups(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);
  console.log(groups)

  return (
    <section className="Home-page">
      <Banner />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <section className="sharedPost homepage-section">
          <h1 className="title">shared journeys</h1>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </section>
        {groups.length > 0 ? (
          <section className="recommended homepage-section">
            <div className="header">
              <h1 className="title">Recommendations</h1>
              <Link to={"/groups"} className="more-btn">
                view more
              </Link>
            </div>
            {groups.slice(0,5).map((group) => {
              return (
                <ItemContainer
                  avatar={group.avatar}
                  name={group.name}
                  categories={group.topics}
                  key={group._id}
                />
              );
            })
}
          </section>
        ) : null}
      </div>
    </section>
  );
};

export default Home;
