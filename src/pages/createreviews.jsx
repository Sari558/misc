import "./createreviews.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateReview({
  darkMode
}) {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [rating, setRating] =
    useState("5");

  const [review, setReview] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Review submitted! (Demo)"
    );

    setName("");
    setRating("5");
    setReview("");
  };

  return (

    <div
      className={`create-review-page ${
        darkMode
          ? "dark"
          : "light"
      }`}
    >

      <nav className="review-navbar">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/reviews")
          }
        >
          ← Back to Reviews
        </button>

        <h1>
          Create Review
        </h1>

      </nav>

      <section className="create-review-hero">

        <h2>
          Share Your Experience
        </h2>

        <p>
          Help the MISC community
          by leaving honest feedback.
        </p>

      </section>

      <section className="review-form-wrapper">

        <form
          className="review-form"
          onSubmit={handleSubmit}
        >

          <label>
            Your Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            required
          />

          <label>
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) =>
              setRating(
                e.target.value
              )
            }
          >

            <option value="5">
              ★★★★★ (5)
            </option>

            <option value="4">
              ★★★★☆ (4)
            </option>

            <option value="3">
              ★★★☆☆ (3)
            </option>

            <option value="2">
              ★★☆☆☆ (2)
            </option>

            <option value="1">
              ★☆☆☆☆ (1)
            </option>

          </select>

          <label>
            Review
          </label>

          <textarea
            rows="8"
            placeholder="Tell us about your experience..."
            value={review}
            onChange={(e) =>
              setReview(
                e.target.value
              )
            }
            required
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Review
          </button>

        </form>

      </section>

    </div>

  );
}

export default CreateReview;