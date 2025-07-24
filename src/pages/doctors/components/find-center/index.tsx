import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, Autocomplete } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import searchIcon from "@/assets/icons/search.png";

import { UIButton } from "@/ui-kit/button";
import { ButtonVariants } from "@/constant/defaultValues";

interface FindDoctorsBarProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  onSearch: () => void;
}

export const FindDoctorsBar: React.FC<FindDoctorsBarProps> = ({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  onSearch
}) => {
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
    if (selectedState) {
      const fetchCities = async () => {
        setLoadingCities(true);
        try {
          const response = await fetch(
            `https://meddata-backend.onrender.com/cities/${selectedState}`
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
      // Only reset city if it's not an initial load with selectedCity prop
      if (!selectedCity) {
        setSelectedCity("");
      }
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState, selectedCity, setSelectedCity]);

  // Ensure the selected city from props is maintained even if not in cities list initially
  useEffect(() => {
    if (selectedCity && cities.length > 0 && !cities.includes(selectedCity)) {
      // Add the selectedCity to cities list if it's not already there
      // This handles cases where the city from URL params might not be in the fetched list
      setCities(prev => {
        if (!prev.includes(selectedCity)) {
          return [selectedCity, ...prev];
        }
        return prev;
      });
    }
  }, [selectedCity, cities]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "20%", md: "19%" }, // Position so half is visible over hero, half extends below
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, width: "100%" }}>
          <Autocomplete
            options={states}
            value={selectedState}
            onChange={(_, newValue) => setSelectedState(newValue || "")}
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
                        <RoomOutlinedIcon sx={{ color: "#2AA7FF" }} />
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
        </Box>
        <Box sx={{ flex: 1, width: "100%" }}>
          <Autocomplete
            options={cities}
            value={selectedCity}
            onChange={(_, newValue) => setSelectedCity(newValue || "")}
            loading={loadingCities}
            disabled={!selectedState}
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
                        <RoomOutlinedIcon sx={{ color: "#2AA7FF" }} />
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
            <UIButton variant={ButtonVariants.PRIMARY} onClick={onSearch}>
              <img src={searchIcon} alt="Search" width="20" /> Search
            </UIButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
