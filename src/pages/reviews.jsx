import "./reviews.css";

import { useNavigate } from "react-router-dom";

function Review({
  darkMode
}) {

  const navigate =
    useNavigate();

  const reviews = [

    {
      name: "Alex M.",
      rating: 5,
      title:
        "Excellent Marketplace",
      text:
        "Very professional experience. Easy to browse startup opportunities."
    },

    {
      name: "Sarah K.",
      rating: 5,
      title:
        "Clean & Modern",
      text:
        "The platform feels polished and easy to navigate."
    },

    {
      name: "Daniel R.",
      rating: 4,
      title:
        "Found Great Ideas",
      text:
        "Discovered several interesting concepts worth exploring."
    },

    {
      name: "Emma T.",
      rating: 5,
      title:
        "Very Promising",
      text:
        "MISC has a lot of potential for connecting founders and buyers."
    }

  ];

  return (

    <div
      className={`review-page ${
        darkMode
          ? "dark"
          : "light"
      }`}
    >

      <nav className="review-navbar">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/")
          }
        >
          ← Back Home
        </button>

        <h1>
          Community Reviews
        </h1>

      </nav>

      <section className="review-hero">

        <h2>
          Trusted by Entrepreneurs
        </h2>

        <p>
          Read experiences from
          people using MISC.
        </p>

      </section>

      <section className="rating-overview">

        <div className="rating-box">

          <h1>4.8</h1>

          <div className="stars">
            ★★★★★
          </div>

          <p>
            Based on community
            feedback
          </p>

        </div>

      </section>

      <section className="reviews-grid">

        {reviews.map(
          (review, index) => (

          <div
            key={index}
            className="review-card"
          >

            <div className="stars">
              {"★".repeat(
                review.rating
              )}
            </div>

            <h3>
              {review.title}
            </h3>

            <h4>
              {review.name}
            </h4>

            <p>
              {review.text}
            </p>

          </div>

        ))}
      </section>

      <section className="review-cta">

        <h2>
          Share Your Experience
        </h2>

        <p>
          Help the MISC community
          by leaving a review.
        </p>

        <button
          className="write-review-btn"
          onClick={() =>
            navigate(
              "/create-review"
            )
          }
        >
          Write a Review
        </button>

      </section>

    </div>

  );
}

export default Review;