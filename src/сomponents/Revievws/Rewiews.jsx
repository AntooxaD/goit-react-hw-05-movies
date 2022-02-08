import { ReviewsList } from "../../styled/Styled";
import { useEffect, useState } from "react";
import { fetchRewies } from "../../service/Api/Api";
import { useParams } from "react-router-dom";

export default function FilmReviews() {
  const [reviews, setReviews] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    reviews.length > 0 &&
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
  }, [reviews.length]);

  useEffect(() => {
    const fetch = async () => {
      const reviews = await fetchRewies(movieId);
      setReviews(reviews);
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ReviewsList>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don`t have any reviews for this film</p>
      )}
    </>
  );
}
