import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={star <= rating ? "star active" : "star"}
        />
      ))}
    </div>
  );
};

export default StarRating;