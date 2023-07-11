import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('entertainment');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand mx-auto" to="/">
            Daily News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => handleCategoryChange('entertainment')}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/technology"
                  className="nav-link"
                  onClick={() => handleCategoryChange('technology')}
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sports"
                  className="nav-link"
                  onClick={() => handleCategoryChange('sports')}
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<NewsList category={selectedCategory} />} />
          <Route path="/music" element={<NewsList category="music" />} />
          <Route path="/movies" element={<NewsList category="movies" />} />
          <Route
            path="/technology"
            element={<NewsList category="technology" />}
          />
          <Route path="/sports" element={<NewsList category="sports" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
