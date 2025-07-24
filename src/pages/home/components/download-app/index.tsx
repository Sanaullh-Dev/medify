import mobileApp from "@/assets/mobile_app.png";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const DownloadApp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendLink = () => {};

  return (
    <div
      style={{
        padding: "40px 20px",
        paddingBottom: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          maxWidth: "500px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={mobileApp}
          alt="Download App"
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "auto",
            maxHeight: "550px",
          }}
        />
      </div>
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          maxWidth: "600px",
          padding: "0 20px",
        }}
      >
        <h4
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "var(--secondary-color)",
          }}
        >
          Download the <br />
          <span style={{ color: "var(--primary-color)" }}>Medify</span> App
        </h4>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            color: "#666",
            fontSize: "16px",
          }}
        >
          Get the link to download the app
        </Typography>

        <Box sx={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
          <TextField
            variant="outlined"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography sx={{ fontWeight: "500", color: "#1B3C74" }}>
                      +91
                    </Typography>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              maxWidth: "400px",
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
                "& fieldset": {
                  borderColor: "#ddd",
                },
                "&:hover fieldset": {
                  borderColor: "#2AA7FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2AA7FF",
                  borderWidth: "2px",
                },
              },
              "& .MuiInputBase-input": {
                padding: "12px 14px",
                fontSize: "16px",
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleSendLink}
            sx={{
              backgroundColor: "#2AA7FF",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(42, 167, 255, 0.3)",
              "&:hover": {
                backgroundColor: "#1B8FE6",
                boxShadow: "0 6px 16px rgba(42, 167, 255, 0.4)",
              },
            }}
          >
            Send SMS
          </Button>
        </Box>

        {/* Download Store Buttons */}
        <Box sx={{ marginTop: "30px" }}>
          <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {/* Google Play Store Button */}
            <Button
              onClick={() =>
                window.open("https://play.google.com/store", "_blank")
              }
              sx={{
                backgroundColor: "#000",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "160px",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              {/* Google Play Icon SVG */}
              <Box
                component="svg"
                sx={{ width: 28, height: 28, fill: "white" }}
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: 1,
                    color: "white",
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Button>

            {/* App Store Button */}
            <Button
              onClick={() => window.open("https://apps.apple.com/", "_blank")}
              sx={{
                backgroundColor: "#000",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "160px",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              {/* Apple Icon SVG */}
              <Box
                component="svg"
                sx={{ width: 28, height: 28, fill: "white" }}
                viewBox="0 0 24 24"
              >
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    lineHeight: 1,
                    color: "white",
                  }}
                >
                  App Store
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
