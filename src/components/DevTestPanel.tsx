import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { createTestBooking, clearAllBookings, getAllBookings } from '../utils/testData';

export const DevTestPanel: React.FC = () => {
  const [bookingsCount, setBookingsCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const bookings = getAllBookings();
      setBookingsCount(bookings.length);
    };

    updateCount();
    
    const handleBookingUpdate = () => {
      updateCount();
    };

    window.addEventListener('bookingUpdated', handleBookingUpdate);
    return () => window.removeEventListener('bookingUpdated', handleBookingUpdate);
  }, []);

  const handleCreateTestBooking = () => {
    createTestBooking();
  };

  const handleClearBookings = () => {
    clearAllBookings();
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: 2,
        borderRadius: 2,
        zIndex: 1000,
        minWidth: 250,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Dev Test Panel
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Current bookings: {bookingsCount}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button 
          variant="contained" 
          size="small" 
          onClick={handleCreateTestBooking}
          sx={{ backgroundColor: '#2196f3' }}
        >
          Create Test Booking
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          onClick={handleClearBookings}
          sx={{ backgroundColor: '#f44336' }}
        >
          Clear All Bookings
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          onClick={handleReloadPage}
          sx={{ backgroundColor: '#ff9800' }}
        >
          Reload Page (Test Persistence)
        </Button>
      </Box>
    </Box>
  );
};
