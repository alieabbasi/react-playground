import { Link } from "react-router";
import { useCharactersListLogic } from "../../hooks/useCharactersListLogic";
import CharacterSearch from "../../components/CharacterSearch";
import { useState } from "react";

export default function CharactersList() {
  const [search, setSearch] = useState("");

  const { data, error } = useCharactersListLogic(search);
  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <CharacterSearch onSearch={(search) => setSearch(search)} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {data?.characters?.results?.map((character) => (
              <Link to={`/rick-and-morty/${character.id}`} key={character.id}>
                <img
                  src={character.image}
                  alt={character.name}
                  style={{ borderRadius: "12px" }}
                  loading="lazy"
                />
                <p>{character.name}</p>
              </Link>
            ))}
            {data?.characters?.results?.length === 0 && (
              <div>No characters found</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
