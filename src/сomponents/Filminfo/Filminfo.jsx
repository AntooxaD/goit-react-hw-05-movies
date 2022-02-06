import { MoviePoster, FilmContainer, ImgThumb } from "../../styled/Styled";

export default function FilmInfo({ film }) {
  const { title, vote_average, overview, genres, release_date, poster_path } =
    film;

  return (
    film && (
      <>
        <FilmContainer>
          <ImgThumb>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width="50px"
              onError={(e) => {
                e.target.src =
                  "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg";
              }}
            />
          </ImgThumb>
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2>Overview </h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>
              {genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </FilmContainer>
      </>
    )
  );
}
