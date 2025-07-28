import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/leaderboard/`)
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4 text-center">Leaderboard</h1>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, idx) => (
                <tr key={entry._id}>
                  <th scope="row">{idx + 1}</th>
                  <td>{entry.user}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
