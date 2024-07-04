import Banner from "../../components/banner/Banner"
import PostItem from "../../components/posts/Post-item"
import './home.css'

const Home = () => {
  return (
    <section className='Home-page'>
      <Banner/>
      <section className="sharedPost">
        <h1 className="title">shared journeys</h1>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </section>
    </section>
  )
}

export default Home
