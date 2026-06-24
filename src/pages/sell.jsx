import "./sell.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sell({
  darkMode
}) {

  const navigate = useNavigate();

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  return (

    <div
      className={`sell-page ${
        darkMode
          ? "dark"
          : "light"
      }`}
    >

      <nav className="sell-navbar">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/")
          }
        >
          ← Back Home
        </button>

        <h1>
          Sell Your Idea
        </h1>

      </nav>

      <section className="sell-hero">

        <h2>
          List Your Startup Idea
        </h2>

        <p>
          Turn ideas into opportunities.
          Create a listing and connect
          with entrepreneurs looking
          for their next venture.
        </p>

      </section>

      <section className="sell-form-container">

        <form
          className="sell-form"
        >

          <label>
            Startup Title
          </label>

          <input
            type="text"
            placeholder="AI Resume Builder"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          <label>
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >

            <option value="">
              Select Category
            </option>

            <option>
              SaaS
            </option>

            <option>
              AI
            </option>

            <option>
              E-Commerce
            </option>

            <option>
              Marketplace
            </option>

            <option>
              FinTech
            </option>

            <option>
              HealthTech
            </option>

            <option>
              EdTech
            </option>

          </select>

          <label>
            Asking Price
          </label>

          <input
            type="text"
            placeholder="$500"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
          />

          <label>
            Description
          </label>

          <textarea
            rows="8"
            placeholder="Describe your startup idea..."
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Create Listing
          </button>

        </form>

      </section>

    </div>
  );
}

export default Sell;