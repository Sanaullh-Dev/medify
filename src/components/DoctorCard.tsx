import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
  Rating,
  Box,
  IconButton,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  AccessTime,
  Star,
  FavoriteOutlined,
  ShareOutlined,
} from '@mui/icons-material';

interface DoctorCardProps {
  doctor: {
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    location: string;
    phone: string;
    availability: string;
    image: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 400, 
        margin: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            src={doctor.image}
            alt={doctor.name}
            sx={{ 
              width: 60, 
              height: 60, 
              marginRight: 2,
              bgcolor: 'primary.main' 
            }}
          >
            {doctor.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box flex={1}>
            <Typography variant="h6" component="h3" fontWeight="bold">
              {doctor.name}
            </Typography>
            <Chip 
              label={doctor.specialty} 
              size="small" 
              color="primary" 
              variant="outlined" 
            />
          </Box>
          <Box>
            <IconButton size="small" color="primary">
              <FavoriteOutlined />
            </IconButton>
            <IconButton size="small" color="primary">
              <ShareOutlined />
            </IconButton>
          </Box>
        </Box>

        <Box mb={2}>
          <Box display="flex" alignItems="center" mb={1}>
            <Star color="primary" sx={{ fontSize: 16, mr: 0.5 }} />
            <Rating 
              value={doctor.rating} 
              precision={0.1} 
              size="small" 
              readOnly 
            />
            <Typography variant="body2" color="text.secondary" ml={1}>
              {doctor.rating} ({doctor.reviews} reviews)
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOn color="action" sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {doctor.location}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" mb={1}>
            <Phone color="action" sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {doctor.phone}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <AccessTime color="action" sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {doctor.availability}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {doctor.experience} years of experience
        </Typography>

        <Box display="flex" gap={1}>
          <Button 
            variant="outlined" 
            fullWidth 
            size="small"
            sx={{ borderRadius: '20px' }}
          >
            View Profile
          </Button>
          <Button 
            variant="contained" 
            fullWidth 
            size="small"
            sx={{ borderRadius: '20px' }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
