// Utility functions for testing localStorage persistence

interface BookingData {
  id: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalType: string;
  rating: number;
  selectedTimeSlot: string;
  bookingDate: string;
  selectedDate: any;
  status: string;
}

export const createTestBooking = (): BookingData => {
  const testBooking: BookingData = {
    id: Date.now().toString(),
    hospitalName: "Test Hospital",
    hospitalAddress: "123 Test Street, Test City, TS 12345",
    hospitalType: "General Hospital",
    rating: 4.5,
    selectedDate: {
      dayLabel: "Today",
      dateLabel: "30 Jul",
      fullDate: new Date(),
      slotsAvailable: 10
    },
    selectedTimeSlot: "10:00 AM",
    bookingDate: new Date().toISOString(),
    status: "confirmed",
  };

  // Get existing bookings
  const existingBookings = localStorage.getItem("bookings");
  let bookings: BookingData[] = [];
  
  if (existingBookings) {
    try {
      bookings = JSON.parse(existingBookings);
    } catch (error) {
      console.error("Error parsing existing bookings:", error);
      bookings = [];
    }
  }

  // Add new booking
  bookings.push(testBooking);

  // Save to localStorage
  localStorage.setItem("bookings", JSON.stringify(bookings));
  
  // Dispatch event to notify components
  window.dispatchEvent(new CustomEvent("bookingUpdated"));
  
  console.log("Test booking created:", testBooking);
  return testBooking;
};

export const clearAllBookings = (): void => {
  localStorage.removeItem("bookings");
  window.dispatchEvent(new CustomEvent("bookingUpdated"));
  console.log("All bookings cleared");
};

export const getAllBookings = (): BookingData[] => {
  const bookings = localStorage.getItem("bookings");
  if (bookings) {
    try {
      return JSON.parse(bookings);
    } catch (error) {
      console.error("Error parsing bookings:", error);
      return [];
    }
  }
  return [];
};

// Add to window for testing purposes
if (typeof window !== 'undefined') {
  (window as any).testBookings = {
    create: createTestBooking,
    clear: clearAllBookings,
    getAll: getAllBookings
  };
}
