import { useEffect, useState } from "react";
import { fetchCredits } from "../../service/Api/Api";
import { Actor, Actors } from "../../styled/Styled";

export default function FilmCasts({ id }) {
  const [casts, setCast] = useState([]);

  useEffect(() => {
    casts.length > 0 &&
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
  }, [casts.length]);

  useEffect(() => {
    const fetch = async () => {
      const casts = await fetchCredits(id);
      setCast(casts);
    };
    fetch();
  }, [id]);

  return (
    <Actors>
      {casts.map((cast) => (
        <Actor key={cast.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="100px"
              onError={(e) => {
                e.target.src =
                  "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg";
              }}
            />
          </div>
          <div>
            {" "}
            <p>Name: {cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </Actor>
      ))}
    </Actors>
  );
}
