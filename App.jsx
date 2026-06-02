import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-badge">🌿 Welcome to Paradise</div>

        <h1 className="landing-title">
          Paradise<br /><span>Nursery</span>
        </h1>

        <p className="landing-subtitle">
          Bring life, colour, and calm into your home. Browse our handpicked
          collection of beautiful houseplants — lovingly grown and delivered to your door.
        </p>

        <div className="landing-actions">
          <button className="btn-primary" onClick={() => navigate('/products')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => navigate('/about')}>
            Our Story
          </button>
        </div>
      </div>

      <p className="landing-footer">© 2025 Paradise Nursery · Growing happiness, one plant at a time</p>
    </div>
  );
}

export default App;
