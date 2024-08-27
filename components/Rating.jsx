import { FaStar } from "react-icons/fa";

const Rating = ({
  totalStars = 5,
  defaultValue,
  size = 20,
  color = "#ccc",
  activeColor = "#ffc107",
}) => {
  const rating = defaultValue;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: rating }, (_, index) => (
        <FaStar
          key={index}
          size={size}
          className="cursor-pointer"
          color={index < rating ? activeColor : color}
          onClick={() => handleRating(index)}
        />
      ))}
      {/* Empty Stars to complete the total stars */}
      {Array.from({ length: totalStars - rating }, (_, index) => (
        <FaStar
          key={`empty-${index}`}
          size={size}
          className="cursor-pointer"
          color={color}
        />
      ))}
    </div>
  );
};

export default Rating;
