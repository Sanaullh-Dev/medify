import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import searchIcon from "@/assets/icons/search.png";
import { UIButton } from "@/ui-kit/button";
import { ButtonVariants } from "@/constant/defaultValues";
import { BookingCard } from "./components/BookingCard";
import "./MyBookings.css";

// Mock booking data - replace with real data from API
// const mockBookings = [
//   {
//     id: 1,
//     hospitalName: "Apollo Hospitals",
//     address: "Sector 26, Noida-201301, Uttar Pradesh",
//     description: "Multi-specialty hospital with advanced medical facilities",
//     likeCount: 128,
//     selectedSlot: "11:30 AM",
//     selectedDate: "24 April 2024",
//     patientName: "John Doe",
//     doctorName: "Dr. Ahmad Khan",
//   },
//   {
//     id: 2,
//     hospitalName: "Fortis Healthcare",
//     address: "Sector 62, Noida-201309, Uttar Pradesh",
//     description: "Leading healthcare provider with world-class infrastructure",
//     likeCount: 95,
//     selectedSlot: "2:00 PM",
//     selectedDate: "25 April 2024",
//     patientName: "Jane Smith",
//     doctorName: "Dr. Ankur Sharma",
//   },
//   {
//     id: 3,
//     hospitalName: "Max Super Speciality Hospital",
//     address: "Sector 19, Noida-201301, Uttar Pradesh",
//     description: "Super specialty hospital with cutting-edge technology",
//     likeCount: 156,
//     selectedSlot: "10:00 AM",
//     selectedDate: "26 April 2024",
//     patientName: "Mike Johnson",
//     doctorName: "Dr. Heena Sachdeva",
//   },
// ];

export const MyBookings: React.FC = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [allMyBookings, setAllMyBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const myBookingsStore = localStorage.getItem("bookings");

  useEffect(() => {
    if (myBookingsStore) {
      setMyBookings(JSON.parse(myBookingsStore));
      setAllMyBookings(JSON.parse(myBookingsStore));
    }
  }, [myBookingsStore]);

  const handleSearch = () => {
    // Implement search functionality here
    if (searchQuery.trim() === "") {
      setMyBookings(allMyBookings); // Reset to all bookings if search query is empty
      return;
    }
    const filteredBookings = allMyBookings.filter((booking: any) =>
      booking.hospitalName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMyBookings(filteredBookings);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Top Search Bar */}
      <Box
        sx={{
          backgroundColor: "var(--primary-color)",
          paddingY: { xs: 3, md: 1.5 },
          paddingX: { xs: 1, md: 1 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Left side - My Bookings Title */}
          <h1
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "24px",
              textAlign: "center",
              margin: 0,
            }}
          >
            My Bookings
          </h1>

          {/* Right side - Search Box */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: { xs: 2, md: 3 },
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
              width: { xs: "100%", md: "1000px" },
              maxWidth: "500px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                placeholder="Search Your Bookings"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim() === "") {
                    setMyBookings(allMyBookings); // Reset to all bookings if search query is empty
                  }
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={searchIcon}
                          alt="Search"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid var(--primary-color)",
                    },
                  },
                }}
              />
              <UIButton
                variant={ButtonVariants.PRIMARY}
                onClick={handleSearch}
                className="search-button"
                type="submit"
                id="searchBtn"
              >
                <img
                  src={searchIcon}
                  alt="Search"
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                />
                Search
              </UIButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bookings List and Ads Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingX: { xs: 2, md: 4 },
          paddingY: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 4,
          }}
        >
          {/* Left Column - Bookings List */}
          <Box sx={{ flex: 1 }}>
            {myBookings.length > 0 ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {myBookings.map((booking: any) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  textAlign: "center",
                  paddingY: 8,
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#666", marginBottom: 2 }}
                >
                  No bookings found
                </Typography>
                <Typography variant="body2" sx={{ color: "#999" }}>
                  {searchQuery
                    ? "Try adjusting your search terms"
                    : "You don't have any bookings yet"}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Right Column - Ads Box */}
          <Box
            sx={{
              width: { xs: "100%", lg: "300px" },
              height: "fit-content",
              position: "sticky",
              top: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "var(--primary-color)",
                  marginBottom: 2,
                  fontWeight: 600,
                }}
              >
                Health Tips & Offers
              </Typography>
              <img
                src="/src/assets/ads.png"
                alt="Health Advertisement"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#666", lineHeight: 1.6 }}
              >
                Stay healthy with our expert medical advice and special offers
                on health checkups.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
