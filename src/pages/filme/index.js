import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./filme.css";
import { toast } from "react-toastify";
function Filme() {
  let [resposta, Useresposta] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function Busca() {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: "20e04bcef25e80affb4a9f76dae335b3",
          language: "pt-BR",
        },
      });

      Useresposta(response.data);
    }
    Busca();
  }, [id]);

  function salvarFilme() {
    const listaStor = localStorage.getItem("primeflix");
    let filmeSalvo = JSON.parse(listaStor) || [];
    const comparar = filmeSalvo.some((item) => item.id === resposta.id);
    if (comparar) {
      toast.warn("Filme já adicionado");
      return;
    }
    filmeSalvo.push(resposta);
    localStorage.setItem("primeflix", JSON.stringify(filmeSalvo));
    toast.success("filme salvo com sucesso");
  }
  return (
    <div className="filme-info">
      <h1>{resposta.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${resposta.backdrop_path}`}
        alt={Filme.title}
      />
      <h3>Sinopse</h3>
      <span>{resposta.overview}</span>

      <strong>Avaliação: {resposta.vote_average}/10</strong>

      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${resposta.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
