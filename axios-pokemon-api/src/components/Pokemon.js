import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data.results);
        setApiData(response.data.results);
      })
      .catch((err) => {
        console.log("error");
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      {apiData.map((pokemon, index) => {
        return (
          <div key={index}>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
