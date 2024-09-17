import { Link } from "react-router-dom";
import "./favoritos.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
function Favoritos() {
  const [lista, Setlista] = useState([]);
  useEffect(() => {
    const lista = localStorage.getItem("primeflix");
    let transformar = JSON.parse(lista);
    Setlista(transformar);
  }, []);

  function excluir(id) {
    let filtrar = lista.filter((item) => {
      return item.id !== id;
    });
    Setlista(filtrar);
    localStorage.setItem("primeflix", JSON.stringify(filtrar));
    toast.success("Filme excluido com sucesso");
  }
  return (
    <div className="filmes">
      <h1>Página de Favoritos</h1>
      {lista.length === 0 && <span>Você não possui nenhum filme </span>}
      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
              <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
              <button onClick={() => excluir(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
