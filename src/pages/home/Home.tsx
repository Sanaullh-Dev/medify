import React from 'react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to Medify</h1>
          <p className="hero-subtitle">
            Your trusted healthcare companion for finding the best medical services
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Find Doctors</button>
            <button className="btn btn-secondary">Book Appointment</button>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Hospital Search</h3>
              <p>Find the best hospitals and medical centers near you</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>Doctor Consultation</h3>
              <p>Connect with qualified doctors for online and offline consultations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Easy Booking</h3>
              <p>Book appointments with your preferred doctors and hospitals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h3>Medicine Delivery</h3>
              <p>Get your prescribed medicines delivered to your doorstep</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">1000+</h3>
              <p className="stat-label">Doctors</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Hospitals</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50,000+</h3>
              <p className="stat-label">Happy Patients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};