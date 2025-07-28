import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://scaling-space-bassoon-g9g7xgrgjg63ww-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4 text-center">Workouts</h1>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={workout._id}>
                  <th scope="row">{idx + 1}</th>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
