import React from 'react';
import '../pages/home.css'; // Add custom styles here

const Home = () => {
  return (
    <div className="home-page container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Section: Image */}
        <div className="col-md-6 text-center">
          <img
            src="src/assets/homeimg/hero_aera.png"
            alt="Student"
            className="img-fluid "
            style={{ maxWidth: '80%' }}
          />
        </div>

        {/* Right Section: Text and Search */}
        <div className="col-md-6">
          <h6 className="text-danger">The Leader in Online Learning</h6>
          <h1 className="fw-bold mb-4">
            Learn the Skills you <br /> Need to Succeed
          </h1>
          <p className="text-muted">
            Solve tasks and check the results right away. Courses so easy it is
            impossible not to understand.
          </p>

          {/* Search Bar */}
          <div className="input-group my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for courses"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Popular Tags */}
          <div>
            <span className="badge bg-light text-dark me-2">Popular:</span>
            {['App', 'Business', 'Course', 'Education'].map((tag, index) => (
              <span
                key={index}
                className="badge bg-secondary text-light me-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
