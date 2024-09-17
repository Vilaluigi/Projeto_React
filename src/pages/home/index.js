import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  let [filmes, Setfilmes] = useState({});
  let [load, Setload] = useState(true);
  useEffect(() => {
    async function LoadApi() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "20e04bcef25e80affb4a9f76dae335b3",
          language: "pt-BR",
          page: 1,
        },
      });

      Setfilmes(response.data.results);
      Setload(false);
    }
    LoadApi();
  }, []);

  if (load) {
    return (
      <div>
        <h1> Carregando filmes ...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((item) => {
          return (
            <article key={item.id}>
              <strong>{item.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
              <Link to={`/filme/${item.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
