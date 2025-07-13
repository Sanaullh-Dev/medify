import React from 'react';
import { 
  LocalHospital, 
  PersonSearch, 
  CalendarToday, 
  Medication 
} from '@mui/icons-material';
import { Container, Typography, Box } from '@mui/material';
import { DoctorCard } from '../components';
import './Home.css';

const Home: React.FC = () => {
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
              <div className="feature-icon">
                <LocalHospital sx={{ fontSize: '3rem', color: 'white' }} />
              </div>
              <h3>Hospital Search</h3>
              <p>Find the best hospitals and medical centers near you</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <PersonSearch sx={{ fontSize: '3rem', color: 'white' }} />
              </div>
              <h3>Doctor Consultation</h3>
              <p>Connect with qualified doctors for online and offline consultations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CalendarToday sx={{ fontSize: '3rem', color: 'white' }} />
              </div>
              <h3>Easy Booking</h3>
              <p>Book appointments with your preferred doctors and hospitals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Medication sx={{ fontSize: '3rem', color: 'white' }} />
              </div>
              <h3>Medicine Delivery</h3>
              <p>Get your prescribed medicines delivered to your doorstep</p>
            </div>
          </div>
        </div>

        <div className="featured-doctors-section">
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              mb={6}
              sx={{ color: 'white', fontWeight: 700 }}
            >
              Featured Doctors
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
              <DoctorCard 
                doctor={{
                  name: "Dr. Sarah Johnson",
                  specialty: "Cardiologist",
                  experience: "15",
                  rating: 4.9,
                  reviews: 234,
                  location: "Central Hospital, NYC",
                  phone: "+1 (555) 123-4567",
                  availability: "Available Today",
                  image: ""
                }}
              />
              <DoctorCard 
                doctor={{
                  name: "Dr. Michael Chen",
                  specialty: "Neurologist",
                  experience: "12",
                  rating: 4.8,
                  reviews: 189,
                  location: "Metro Medical Center",
                  phone: "+1 (555) 987-6543",
                  availability: "Next Available: Tomorrow",
                  image: ""
                }}
              />
              <DoctorCard 
                doctor={{
                  name: "Dr. Emily Rodriguez",
                  specialty: "Pediatrician",
                  experience: "10",
                  rating: 4.9,
                  reviews: 312,
                  location: "Children's Hospital",
                  phone: "+1 (555) 456-7890",
                  availability: "Available Now",
                  image: ""
                }}
              />
            </Box>
          </Container>
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

export default Home;
