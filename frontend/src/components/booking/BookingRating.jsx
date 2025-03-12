import React, { useState } from "react";

const BookingRating = () => {
  const [rating, setRating] = useState(0);
  const [ratingsCount, setRatingsCount] = useState({
    5: 10,
    4: 8,
    3: 6,
    2: 4,
    1: 2,
  });
  const totalRatings = Object.values(ratingsCount).reduce(
    (acc, count) => acc + count,
    0
  );

  const handleRatingChange = (newValue) => {
    setRating(newValue);
    setRatingsCount((prevState) => ({
      ...prevState,
      [newValue]: prevState[newValue] + 1,
    }));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };

  const calculatePercentage = (count) => {
    if (totalRatings === 0) return 0;
    return (count / totalRatings) * 100;
  };
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card p-4">
          <h4>Rate Your Experience</h4>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "active" : ""}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
          <div className="rating-text tw-font-bold">
            <span>{rating ? `${rating}/5` : "No rating yet"}</span>
          </div>
          <div className="ratings-bar">
            {[5, 4, 3, 2, 1].map((star) => (
              <div
                key={star}
                className="rating-row"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <span className="tw-font-bold">{star}:</span>
                <div
                  className="bar-container tw-rounded-lg"
                  style={{
                    width: `${calculatePercentage(ratingsCount[star])}%`,
                  }}
                >
                  <div
                    className="bar"
                    style={{
                      width: `${calculatePercentage(ratingsCount[star])}%`,
                    }}
                  />
                </div>
                <span className="px-2">({ratingsCount[star]} Users)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingRating;
