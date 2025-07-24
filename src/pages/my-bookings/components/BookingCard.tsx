import React from "react";
import { Card, Box, Typography, Avatar } from "@mui/material";
import HospitalIcon from "@/assets/hospital_icon.png";
import likeIcon from "@/assets/icons/like.png";

interface BookingData {
  id: number;
  hospitalName: string;
  hospitalAddress: string;
  hospitalType: string;
  rating: number;
  selectedTimeSlot: string;
  bookingDate: Date;
}

interface BookingCardProps {
  booking: BookingData;
}

export const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
        padding: { xs: "20px", md: "30px 30px" },
        minHeight: { xs: "auto", md: "180px" },
      }}
    >
      {/* First Column - Hospital Icon */}
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
          {/* Hospital Name */}
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
            {booking.hospitalName}
          </h3>

          {/* Address */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            {booking?.hospitalAddress}
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
            {booking.hospitalType} • Multi-specialty hospital with advanced
            medical facilities
          </Typography>

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
              {booking.rating}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Third Column - Booking Details */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "center",
          marginTop: { xs: "16px", md: "0" },
          minWidth: { xs: "auto", md: "200px" },
        }}
      >
        {/* Time Slot */}
        <Typography
          variant="h6"
          sx={{
            color: "var(--primary-color)",
            fontWeight: 600,
            fontSize: { xs: "16px", md: "18px" },
            marginBottom: "12px",
            textAlign: { xs: "center", md: "right" },
            border: "1px solid var(--primary-color)",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
        >
          {booking.selectedTimeSlot}
        </Typography>

        {/* Date Chip */}
        <Box
          sx={{
            backgroundColor: "transparent",
            border: "2px solid #00d084",
            color: "#00d084",
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14px" },
            padding: "8px 16px",
            height: "auto",
            borderRadius: "8px",
            "& .MuiChip-label": {
              padding: "4px 8px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#00d084",
              fontWeight: 600,
              fontSize: { xs: "12px", md: "14px" },
              textAlign: "center",
            }}
          >
            {new Date(booking.bookingDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
