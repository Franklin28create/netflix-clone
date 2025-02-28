import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjRlODBiNGFlZWQ2NjQyYWJhMzIwMmZhY2M0MTJhNyIsIm5iZiI6MTc0MDA3MDc0MS43MTI5OTk4LCJzdWIiOiI2N2I3NWY1NWEyMjg0NjY2ZjFlYWZhNTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.v2Lae2gUEKxtjFsUg8viQTPDYIlZO2Ud3HkBKfy3lLk",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, i) => (
          <div className="card" key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
