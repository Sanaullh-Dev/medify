import React, { useState, useRef } from "react";
import {
  Card,
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toast } from 'react-toastify';
import HospitalIcon from "@/assets/hospital_icon.png";
import likeIcon from "@/assets/icon/like.png";

interface HospitalCardProps {
  hospital: {
    "Hospital Name": string;
    Address: string;
    City: string;
    State: string;
    "ZIP Code": string;
    "Hospital Type"?: string;
    "Hospital Ownership"?: string;
    rating?: number;
  };
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hospitalName = hospital["Hospital Name"];
  const address = hospital.Address;
  const city = hospital.City;
  const state = hospital.State;
  const zipCode = hospital["ZIP Code"];
  const hospitalType = hospital["Hospital Type"] || "General Hospital";
  const rating = hospital["Hospital overall rating"];

  // Scroll functions for day tabs
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Generate dates for the next 7 days
  const generateDates = () => {
    const dates: Array<{
      dayLabel: string;
      dateLabel: string;
      fullDate: Date;
      slotsAvailable: number;
    }> = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      let dayLabel;
      if (i === 0) dayLabel = "Today";
      else if (i === 1) dayLabel = "Tomorrow";
      else dayLabel = date.toLocaleDateString("en-US", { weekday: "short" });

      const dateLabel = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });

      dates.push({
        dayLabel,
        dateLabel,
        fullDate: date,
        slotsAvailable: Math.floor(Math.random() * 15) + 5,
      });
    }
    return dates;
  };

  const dates = generateDates();

  // Generate time slots
  const generateTimeSlots = () => {
    const morning: string[] = [];
    const afternoon: string[] = [];
    const evening: string[] = [];

    // Morning slots: 9:00 AM - 12:00 PM
    for (let hour = 9; hour < 12; hour++) {
      morning.push(`${hour}:00 AM`);
      morning.push(`${hour}:30 AM`);
    }

    // Afternoon slots: 1:00 PM - 6:00 PM
    for (let hour = 1; hour <= 6; hour++) {
      afternoon.push(`${hour}:00 PM`);
      afternoon.push(`${hour}:30 PM`);
    }

    // Evening slots: 7:00 PM - 9:00 PM
    for (let hour = 7; hour <= 9; hour++) {
      evening.push(`${hour}:00 PM`);
      if (hour < 9) evening.push(`${hour}:30 PM`);
    }

    return { morning, afternoon, evening };
  };

  const timeSlots = generateTimeSlots();

  const handleBookingClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTimeSlotSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

  const handleBookAppointment = () => {
    if (selectedTimeSlot) {
      const appointmentData = {
        id: Date.now().toString(), // Simple ID generation
        hospitalName: hospitalName,
        hospitalAddress: `${address}, ${city}, ${state} ${zipCode}`,
        hospitalType: hospitalType,
        rating: rating,
        selectedDate: dates[selectedDay],
        selectedTimeSlot: selectedTimeSlot,
        bookingDate: new Date().toISOString(),
        status: "confirmed",
      };

      // Get existing appointments from localStorage
      const existingAppointments = localStorage.getItem("bookings");
      let appointments: any[] = [];

      if (existingAppointments) {
        try {
          appointments = JSON.parse(existingAppointments);
        } catch (error) {
          console.error("Error parsing existing appointments:", error);
          appointments = [];
        }
      }

      // Add new appointment
      appointments.push(appointmentData);

      // Save back to localStorage
      localStorage.setItem("bookings", JSON.stringify(appointments));

      // Show success message using toast
      toast.success(
        `Appointment booked successfully for ${selectedTimeSlot} on ${dates[selectedDay].dayLabel}, ${dates[selectedDay].dateLabel}!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Reset the form
      setSelectedTimeSlot(null);
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Original Hospital Card - unchanged */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: isExpanded ? "0" : "16px",
          padding: { xs: "20px", md: "30px 30px" },
          minHeight: { xs: "auto", md: "180px" },
        }}
      >
        {/* First Column - Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            marginRight: { xs: "0", md: "20px" },
            marginBottom: { xs: "16px", md: "0" },
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "var(--primary-color-light)",
              width: { xs: 80, md: 110 },
              height: { xs: 80, md: 110 },
            }}
          >
            <img
              src={HospitalIcon}
              alt="Hospital Icon"
              style={{
                width: "60%",
                height: "auto",
                marginBottom: "10px",
              }}
            />
          </Avatar>
        </Box>

        {/* Second Column - Details */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: { xs: "0", md: "20px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box>
            {/* Title */}
            <h3
              style={{
                color: "var(--primary-color)",
                fontWeight: 600,
                fontSize: "18px",
                marginBottom: "8px",
                lineHeight: 1.3,
                paddingBottom: "10px",
                margin: "0 0 8px 0",
              }}
            >
              {hospitalName}
            </h3>

            {/* Subtitle - Location */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 600,
              }}
            >
              {address}, {city}, {state} {zipCode}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                marginBottom: "12px",
                fontSize: { xs: "12px", md: "14px" },
                display: { xs: "none", sm: "block" }, // Hide on very small screens
              }}
            >
              {hospitalType} • Multi-specialty hospital with advanced medical
              facilities
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {/* Rating box */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#00C853",
                  borderRadius: "6px",
                  padding: { xs: "3px 6px", md: "4px 8px" },
                  gap: "4px",
                }}
              >
                <img
                  src={likeIcon}
                  alt="Like Icon"
                  style={{ width: "14px", height: "14px" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {rating}
                </Typography>
              </Box>
              {/* Free text and description */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00C853",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  FREE
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontWeight: 300,
                    fontSize: { xs: "10px", md: "14px" },
                    display: { xs: "none", sm: "block" }, // Hide on very small screens
                  }}
                >
                  ₹500 Consultation fee at clinic
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Third Column - Availability and Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            minWidth: { xs: "100%", md: "200px" },
            marginTop: { xs: "16px", md: "0" },
            gap: "10px",
          }}
        >
          {/* Available Today */}
          <p
            style={{
              color: "#00C853",
              fontWeight: 500,
              fontSize: "14px",
              marginBottom: "10px",
              margin: "0 0 10px 0",
            }}
          >
            Available Today
          </p>

          {/* Book Button */}
          <Button
            variant="contained"
            onClick={handleBookingClick}
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              borderRadius: "6px",
              padding: { xs: "8px 16px", md: "10px 20px" },
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "300px", md: "none" },
              "&:hover": {
                backgroundColor: "var(--primary-color-dark, #1e8acc)",
              },
            }}
          >
            Book FREE Center Visit
          </Button>
        </Box>
      </Card>

      {/* Separate Expandable Booking Section */}
      {isExpanded && (
        <Card
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
            padding: { xs: "20px", md: "30px" },
          }}
        >
          {/* Day Tabs with Arrow Navigation */}
          <Box sx={{ position: "relative", mb: 3 }}>
            {/* Left Arrow */}
            <IconButton
              onClick={scrollLeft}
              sx={{
                position: "absolute",
                left: -10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            {/* Scrollable Day Tabs */}
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 2,
                px: 3,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              {dates.map((date, index) => (
                <Box
                  key={`${date.dayLabel}-${date.dateLabel}`}
                  onClick={() => setSelectedDay(index)}
                  sx={{
                    minWidth: "200px",
                    textAlign: "center",
                    padding: "12px 16px",
                    border: "1px solid transparent",
                    borderBottom:
                      selectedDay === index
                        ? "3px solid var(--primary-color)"
                        : "1px solid gray",
                    backgroundColor: "white",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color:
                        selectedDay === index ? "var(--primary-color)" : "#333",
                      mb: 0.5,
                    }}
                  >
                    {date.dayLabel}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#666",
                      display: "block",
                      mb: 0.5,
                    }}
                  >
                    {date.dateLabel}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#00C853",
                      fontWeight: 500,
                    }}
                  >
                    {date.slotsAvailable} slots available
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
              onClick={scrollRight}
              sx={{
                position: "absolute",
                right: -10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          {/* Time Slots */}
          <Box sx={{ mb: 3 }}>
            {/* Morning */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 3,
                pb: 3,
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Box sx={{ minWidth: "120px", mr: 3 }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333",
                    margin: 0,
                  }}
                >
                  Morning
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  flex: 1,
                }}
              >
                {timeSlots.morning.map((slot) => (
                  <Chip
                    key={slot}
                    label={slot}
                    onClick={() => handleTimeSlotSelect(slot)}
                    variant="outlined"
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid var(--primary-color)",
                      backgroundColor:
                        selectedTimeSlot === slot
                          ? "var(--primary-color)"
                          : "transparent",
                      color:
                        selectedTimeSlot === slot
                          ? "white"
                          : "var(--primary-color)",
                      "&:hover": {
                        backgroundColor:
                          selectedTimeSlot === slot
                            ? "var(--primary-color)"
                            : "#f0f8ff",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Afternoon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 3,
                pb: 3,
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Box sx={{ minWidth: "120px", mr: 3 }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333",
                    margin: 0,
                  }}
                >
                  Afternoon
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  flex: 1,
                }}
              >
                {timeSlots.afternoon.map((slot) => (
                  <Chip
                    key={slot}
                    label={slot}
                    onClick={() => handleTimeSlotSelect(slot)}
                    variant="outlined"
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid var(--primary-color)",
                      backgroundColor:
                        selectedTimeSlot === slot
                          ? "var(--primary-color)"
                          : "transparent",
                      color:
                        selectedTimeSlot === slot
                          ? "white"
                          : "var(--primary-color)",
                      "&:hover": {
                        backgroundColor:
                          selectedTimeSlot === slot
                            ? "var(--primary-color)"
                            : "#f0f8ff",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Evening */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 3,
              }}
            >
              <Box sx={{ minWidth: "120px", mr: 3 }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333",
                    margin: 0,
                  }}
                >
                  Evening
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  flex: 1,
                }}
              >
                {timeSlots.evening.map((slot) => (
                  <Chip
                    key={slot}
                    label={slot}
                    onClick={() => handleTimeSlotSelect(slot)}
                    variant="outlined"
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid var(--primary-color)",
                      backgroundColor:
                        selectedTimeSlot === slot
                          ? "var(--primary-color)"
                          : "transparent",
                      color:
                        selectedTimeSlot === slot
                          ? "white"
                          : "var(--primary-color)",
                      "&:hover": {
                        backgroundColor:
                          selectedTimeSlot === slot
                            ? "var(--primary-color)"
                            : "#f0f8ff",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* Book Appointment Button */}
          {selectedTimeSlot && (
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                onClick={handleBookAppointment}
                sx={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "var(--primary-color-dark, #1e8acc)",
                  },
                }}
              >
                Book Appointment for {selectedTimeSlot}
              </Button>
            </Box>
          )}
        </Card>
      )}
    </>
  );
};
