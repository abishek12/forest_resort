import React, { useState } from "react";

const ReviewForm = () => {
  const [feedback, setFeedback] = useState("");
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };
  return (
    <div className="card p-4">
      <h4>Customer Feedback</h4>
      <textarea
        rows={4}
        className="form-control"
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Share your feedback..."
      />
      <button className="btn btn-primary mt-3" onClick={handleSubmitFeedback}>
        Submit Feedback
      </button>
    </div>
  );
};

export default ReviewForm;
