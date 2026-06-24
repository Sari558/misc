import "./browse.css";
import { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Browse({
  darkMode,
  setDarkMode
}) {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const initialCategory =
    searchParams.get("category") ||
    "All";

  const [selectedCategory,
    setSelectedCategory] =
    useState(initialCategory);

  const [search,
    setSearch] =
    useState("");

  const categories = [
    "All",
    "SaaS",
    "AI",
    "E-Commerce",
    "Marketplace",
    "FinTech",
    "HealthTech",
    "EdTech",
    "Developer Tools",
    "Productivity",
    "Cybersecurity",
    "Creator Economy",
    "Gaming"
  ];

  const listings = [
    {
      id: 1,
      title: "AI Resume Builder",
      category: "AI",
      price: "$500"
    },

    {
      id: 2,
      title: "Gym Management SaaS",
      category: "SaaS",
      price: "$750"
    },

    {
      id: 3,
      title: "Restaurant Marketplace",
      category: "Marketplace",
      price: "$1000"
    },

    {
      id: 4,
      title: "Crypto Budget Tracker",
      category: "FinTech",
      price: "$900"
    },

    {
      id: 5,
      title: "Medical Booking Platform",
      category: "HealthTech",
      price: "$1200"
    },

    {
      id: 6,
      title: "Online Course Builder",
      category: "EdTech",
      price: "$850"
    },

    {
      id: 7,
      title: "Creator Sponsorship Hub",
      category: "Creator Economy",
      price: "$1400"
    },

    {
      id: 8,
      title: "Gaming Tournament Platform",
      category: "Gaming",
      price: "$1100"
    }
  ];

  const filteredListings =
    listings.filter((listing) => {

      const categoryMatch =
        selectedCategory === "All"
        ||
        listing.category ===
        selectedCategory;

      const searchMatch =
        listing.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return categoryMatch &&
             searchMatch;
    });

  return (
    <div
  className={`browse-page ${
    darkMode ? "dark" : "light"
  }`}
>
      <nav className="browse-navbar">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back Home
        </button>

        <h1>
          Browse Startup Ideas
        </h1>

      </nav>

      <section className="browse-hero">

        <h2>
          Discover Opportunities
        </h2>

        <p>
          Browse startup ideas,
          business concepts,
          and innovative projects.
        </p>

      </section>

      <section className="search-section">

        <input
          className="search-bar"
          type="text"
          placeholder="Search startup ideas..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </section>

      <section className="filter-section">

        {categories.map(
          (category) => (

          <button
            key={category}
            className={
              selectedCategory ===
              category
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedCategory(
                category
              )
            }
          >
            {category}
          </button>

        ))}
      </section>

      <section className="listing-grid">

        {filteredListings.map(
          (listing) => (

          <div
            className="listing-card"
            key={listing.id}
          >

            <div
              className="listing-category"
            >
              {listing.category}
            </div>

            <h3>
              {listing.title}
            </h3>

            <p>
              Startup concept ready
              for validation.
            </p>

            <div
              className="listing-footer"
            >

              <span>
                {listing.price}
              </span>

              <button
                className="view-btn"
              >
                View Idea
              </button>

            </div>

          </div>

        ))}
      </section>

    </div>
  );
}

export default Browse;