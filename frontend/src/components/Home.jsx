import { Link } from "react-router-dom";
import "./Home.css";



const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage. Please log in to continue.</p>
      <Link to="/login">
        <button className="home-btn">Go to Login</button>
      </Link>
    </div>
  );
};

export default Home;
