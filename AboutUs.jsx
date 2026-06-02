import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <nav className="about-nav">
        <div className="nav-brand" onClick={() => navigate('/')}>🌿 Paradise Nursery</div>
        <div className="nav-links">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/products')}>Plants</button>
        </div>
      </nav>

      <div className="about-hero">
        <h1>Our Story</h1>
        <p className="about-subtitle">Rooted in passion, grown with care.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-icon">🌱</div>
          <h2>Who We Are</h2>
          <p>
            Paradise Nursery was founded in 2010 by a small group of plant lovers who believed
            that everyone deserves a little green in their lives. What started as a weekend
            hobby on a tiny backyard plot has blossomed into one of the most trusted online
            plant shops in the country.
          </p>
        </div>

        <div className="about-section">
          <div className="about-icon">🤝</div>
          <h2>Our Mission</h2>
          <p>
            We're on a mission to make plant parenthood easy, joyful, and accessible. We
            source our plants ethically from sustainable nurseries, and every plant ships
            with care instructions tailored specifically to your local climate.
          </p>
        </div>

        <div className="about-section">
          <div className="about-icon">🌍</div>
          <h2>Sustainability</h2>
          <p>
            Every purchase plants a tree through our partnership with One Tree Planted. Our
            packaging is 100% compostable, and we offset all shipping emissions. We believe
            that growing green means being green.
          </p>
        </div>

        <div className="about-section">
          <div className="about-icon">💚</div>
          <h2>Our Promise</h2>
          <p>
            If your plant doesn't arrive healthy, we'll replace it — no questions asked.
            Our team of plant experts is available 7 days a week to help you keep your
            plants thriving long after they arrive at your door.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <p>Ready to bring paradise home?</p>
        <button className="cta-btn" onClick={() => navigate('/products')}>
          Shop Plants
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
