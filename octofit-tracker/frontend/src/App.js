

import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './logo.png';


function App() {
  useEffect(() => {
    // Set favicon dynamically
    const favicon = document.getElementById('dynamic-favicon');
    if (!favicon) {
      const link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = logo;
      document.head.appendChild(link);
    } else {
      favicon.href = logo;
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Logo" style={{height: '40px', marginRight: '12px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
            OctoFit
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow text-center">
              <div className="card-body">
                <h1 className="display-4 mb-3">Welcome to OctoFit</h1>
                <h4 className="mb-0">Mergington High School Fitness Tracker</h4>
                <p className="mt-3">Use the navigation menu to explore activities, leaderboard, teams, users, and workouts.</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
