import Banner from "../../components/banner/Banner";
import ItemContainer from "../../components/itemContainer/ItemContainer";
import PostItem from "../../components/posts/Post-item";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home-page">
      <Banner />
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <section className="sharedPost homepage-section">
          <h1 className="title">shared journeys</h1>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </section>
        <section className="recommended homepage-section">
          <div className="header">
            <h1 className="title">Recommendations</h1>
            <Link to={"/groups"} className="more-btn">
              view more
            </Link>
          </div>
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
        </section>
      </div>
    </section>
  );
};

export default Home;
