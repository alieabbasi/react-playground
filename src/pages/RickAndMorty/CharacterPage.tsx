import { useParams } from "react-router";
import { useCharacterLogic } from "../../hooks/useCharacterLogic";

export default function CharacterPage() {
  const { id } = useParams();
  const { data, error } = useCharacterLogic(id || "");
  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={data?.character?.image}
            alt={data?.character?.name}
            style={{ borderRadius: "12px", maxWidth: "240px" }}
          />
          <div>
            <h1>{data?.character?.name}</h1>
            <h2>Episodes:</h2>
            <ul>
              {data?.character?.episode?.map((episode) => (
                <li key={episode.episode}>
                  {episode.name} - {episode.episode}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
