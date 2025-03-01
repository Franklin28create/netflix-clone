import "./Home.css";
import NavBar from "../../components/Navbar/Navbar.jsx"
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Home = ({ isLoggedIn, userEmail }) => {

  useEffect(() => {
    if(isLoggedIn) toast.success(`Logged in as ${userEmail} !`)
  }, []);

  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <a href="#cards">
              <button className="btn">
                <img src={play_icon} alt="" /> Play
              </button>
            </a>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="more-cards" id="cards">
        <TitleCards title={"Blockbuster Movies"} category="top_rated" />
        <TitleCards title={"Only on Netflix"} category="popular" />
        <TitleCards title={"Upcoming"} category="upcoming" />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
