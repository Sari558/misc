import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sell from "./pages/sell";
import Home from "./pages/home";
import Browse from "./pages/browse";
import Review from "./pages/reviews";
import CreateReview from "./pages/createreviews";
function App() {

  const [darkMode, setDarkMode] =
    useState(true);

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      <Route
        path="/browse"
        element={
          <Browse
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
<Route
  path="/sell"
  element={
    <Sell
      darkMode={darkMode}
    />
  }
/>
<Route
  path="/reviews"
  element={
    <Review
      darkMode={darkMode}
    />
  }
/>
<Route
  path="/create-review"
  element={
    <CreateReview
      darkMode={darkMode}
    />
  }
/>
    </Routes>
  );
}

export default App;