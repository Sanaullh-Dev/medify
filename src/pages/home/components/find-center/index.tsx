import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Card,
  CardContent,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import searchIcon from "@/assets/icons/search.png";
import doctor from "@/assets/icons/doctors.png";
import drugstore from "@/assets/icons/drugstore.png";
import hospital from "@/assets/icons/hospitals.png";
import capsule from "@/assets/icons/capsule.png";
import ambulance from "@/assets/icons/ambulance.png";

import { UIButton } from "@/ui-kit/button";
import { ButtonVariants } from "@/constant/defaultValues";
import { routePaths } from "@/router/hooks";

interface ServiceCard {
  id: string;
  label: string;
  icon: React.ReactElement;
}

const services: ServiceCard[] = [
  {
    id: "doctors",
    label: "Doctors",
    icon: <img src={doctor} alt="Doctors" style={{ width: 40, height: 40 }} />,
  },
  {
    id: "labs",
    label: "Labs",
    icon: <img src={drugstore} alt="Labs" style={{ width: 40, height: 40 }} />,
  },
  {
    id: "hospitals",
    label: "Hospitals",
    icon: (
      <img src={hospital} alt="Hospitals" style={{ width: 40, height: 40 }} />
    ),
  },
  {
    id: "medical-store",
    label: "Medical Store",
    icon: (
      <img
        src={capsule}
        alt="Medical Store"
        style={{ width: 40, height: 40 }}
      />
    ),
  },
  {
    id: "ambulance",
    label: "Ambulance",
    icon: (
      <img src={ambulance} alt="Ambulance" style={{ width: 40, height: 40 }} />
    ),
  },
];

export const FindCenter: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const response = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (state) {
      const fetchCities = async () => {
        setLoadingCities(true);
        try {
          const response = await fetch(
            `https://meddata-backend.onrender.com/cities/${state}`
          );
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        } finally {
          setLoadingCities(false);
        }
      };

      fetchCities();
      setCity(""); // Reset city when state changes
    } else {
      setCities([]);
      setCity("");
    }
  }, [state]);

  const handleSearch = () => {
    if (!state || !city) return;

    // Navigate to find doctors page with state and city as query parameters
    const searchParams = new URLSearchParams({
      state: state,
      city: city,
    });

    // Navigate with query parameters
    navigate(`${routePaths.findDoctors}?${searchParams.toString()}`);
  };

  const handleServiceClick = () => {
    // Since we're using the second input for city now, we could update this logic
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "-120%", md: "-90%" }, // Position so half is visible over hero, half extends below
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        padding: { xs: 3, md: 4 },
        width: { xs: "calc(100% - 32px)", md: "90%" },
        maxWidth: "1200px",
        zIndex: 10, // Ensure it floats above other content
      }}
    >
      {/* First Row - Search Inputs and Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ flex: 1, width: "100%" }}>
          <div id="state">
            <Autocomplete
              options={states}
              value={state}
              onChange={(_, newValue) => setState(newValue || "")}
              loading={loadingStates}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="State"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "#2AA7FF" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "&:hover fieldset": {
                        borderColor: "#2AA7FF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#2AA7FF",
                      },
                    },
                  }}
                />
              )}
            />
          </div>
        </Box>
        <Box sx={{ flex: 1, width: "100%" }}>
          <div id="city">
            <Autocomplete
              options={cities}
              value={city}
              onChange={(_, newValue) => setCity(newValue || "")}
              loading={loadingCities}
              disabled={!state}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="City"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "#2AA7FF" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "&:hover fieldset": {
                        borderColor: "#2AA7FF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#2AA7FF",
                      },
                    },
                  }}
                />
              )}
            />
          </div>
        </Box>
        <Box
          sx={{
            flex: { xs: 1, md: "none" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              "& button": {
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 20px",
                fontSize: "16px",
                minWidth: "140px",
              },
            }}
          >
            <UIButton
              disabled={!state || !city}
              variant={ButtonVariants.PRIMARY}
              onClick={handleSearch}
              type="submit"
              id="searchBtn"
            >
              <img src={searchIcon} alt="Search" width="20" /> Search
            </UIButton>
          </Box>
        </Box>
      </Box>

      {/* Second Row - Center Text */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color: "var(--secondary-color)",
            fontWeight: 500,
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          You may be looking for
        </Typography>
      </Box>

      {/* Third Row - Service Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              flex: {
                xs: "1 1 calc(50% - 8px)",
                sm: "1 1 calc(33.333% - 16px)",
                md: "1 1 calc(20% - 16px)",
              },
              minWidth: "120px",
              maxWidth: { xs: "150px", md: "180px" },
            }}
          >
            <Card
              onClick={() => handleServiceClick()}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                backgroundColor:
                  service.id === "hospitals" ? "#2AA7FF" : "#f8fafc",
                border:
                  service.id === "hospitals"
                    ? "1px solid #2AA7FF"
                    : "1px solid #e2e8f0",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                height: "100%",
                "&:hover": {
                  backgroundColor:
                    service.id === "hospitals" ? "#1e8acc" : "#e6f3ff",
                  borderColor: "#2AA7FF",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 16px rgba(42, 167, 255, 0.2)",
                },
              }}
            >
              <CardContent sx={{ py: 3, px: 2 }}>
                <Box
                  sx={{
                    mb: 1,
                    "& img": {
                      filter:
                        service.id === "hospitals"
                          ? "brightness(0) invert(1)"
                          : "none", // Make icon white for hospitals
                    },
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: service.id === "hospitals" ? "white" : "gray",
                    fontWeight: 500,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: 1.2,
                  }}
                >
                  {service.label}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
