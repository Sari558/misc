import { useEffect } from "react";
import "./home.css";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import { useNavigate } from "react-router-dom";

function Home({
  darkMode,
  setDarkMode
}) {

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = darkMode
      ? "dark-theme"
      : "light-theme";
  }, [darkMode]);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className={`home ${
        darkMode ? "dark" : "light"
      }`}
    >
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo-container">
          <img
            src={
              darkMode
                ? logoDark
                : logoLight
            }
            alt="MISC"
            className="logo"
          />
        </div>

        <div className="nav-links">
          <button
            onClick={() =>
              scrollToSection("categories")
            }
          >
            Browse
          </button>

          <button
            onClick={() =>
              scrollToSection("features")
            }
          >
            Why MISC
          </button>

          <button
            onClick={() =>
              scrollToSection("how-it-works")
            }
          >
            How it works
          </button>
          <button
            onClick={() =>
              navigate("/sell"
              )
            }
          >
            Sell
          </button>
<button
  onClick={() =>
    navigate("/reviews")
  }
>
  Reviews
</button>
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? "Dark 🌙"
              : "Light ☀️"}
          </button>

          <button className="login-btn">
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            Marketplace of Ideas
          </div>

          <h1>
            Buy, Sell & Discover
            <span>
              Startup Ideas
            </span>
          </h1>

          <p>
            MISC is a marketplace
            where entrepreneurs buy
            and sell startup ideas.
            Discover opportunities,
            validate concepts, and
            connect with ambitious
            founders.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                navigate("/browse")
              }
            >
              Browse Ideas
            </button>
<button
  className="secondary-btn"
  onClick={() =>
    navigate("/sell")
  }
>
  Sell an Idea
</button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>Easy Selling</h3>
              <p>
                List ideas quickly
              </p>
            </div>

            <div>
              <h3>
                Trusted Reviews
              </h3>
              <p>
                Community confidence
              </p>
            </div>

            <div>
              <h3>
                Direct Discovery
              </h3>
              <p>
                Reach buyers faster
              </p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={
              darkMode
                ? logoDark
                : logoLight
            }
            alt="MISC"
            className="hero-logo"
          />
        </div>
      </section>

      {/* CATEGORIES */}

      <section
        id="categories"
        className="categories-section"
      >
        <h2>
          Popular Categories
        </h2>

        <div className="categories-grid">
          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=SaaS"
              )
            }
          >
            SaaS
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=AI"
              )
            }
          >
            AI & ML
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=E-Commerce"
              )
            }
          >
            E-Commerce
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Marketplace"
              )
            }
          >
            Marketplace
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=FinTech"
              )
            }
          >
            FinTech
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=HealthTech"
              )
            }
          >
            HealthTech
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=EdTech"
              )
            }
          >
            EdTech
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Developer Tools"
              )
            }
          >
            Developer Tools
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Productivity"
              )
            }
          >
            Productivity
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Cybersecurity"
              )
            }
          >
            Cybersecurity
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Creator Economy"
              )
            }
          >
            Creator Economy
          </div>

          <div
            className="card"
            onClick={() =>
              navigate(
                "/browse?category=Gaming"
              )
            }
          >
            Gaming
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="features-section"
      >
        <h2>Why MISC?</h2>

        <div className="features-grid">
          <div className="feature">
            <h3>
              Easy Selling
            </h3>
            <p>
              Publish startup ideas
              in minutes.
            </p>
          </div>

          <div className="feature">
            <h3>
              Trusted Community
            </h3>
            <p>
              Reviews and profiles
              create trust.
            </p>
          </div>

          <div className="feature">
            <h3>
              Reach Buyers
            </h3>
            <p>
              Connect with founders
              actively searching for
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="how-section"
      >
        <h2>
          How It Works
        </h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>
              Submit Your Idea
            </p>
          </div>

          <div className="step">
            <span>2</span>
            <p>
              Connect With Buyers
            </p>
          </div>

          <div className="step">
            <span>3</span>
            <p>
              Complete The Deal
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}

      <section
        id="reviews"
        className="reviews-section"
      >
        <h2>
          What Our Community Says
        </h2>

        <div className="reviews-grid">
          <div className="review-card">
            MISC helped me present
            my idea to the right
            audience.
          </div>

          <div className="review-card">
            Clean, modern and easy
            to navigate.
          </div>

          <div className="review-card">
            A promising marketplace
            for entrepreneurs.
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <h2>
          Ready to turn ideas into
          reality?
        </h2>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              navigate("/browse")
            }
          >
            Browse Ideas
          </button>
<button
  className="secondary-btn"
  onClick={() =>
    navigate("/sell")
  }
>
  Sell an Idea
</button>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <img
          src={
            darkMode
              ? logoDark
              : logoLight
          }
          alt="MISC"
          className="footer-logo"
        />

        <p>
          The marketplace for
          startup ideas.
        </p>
      </footer>
    </div>
  );
}
export default Home;