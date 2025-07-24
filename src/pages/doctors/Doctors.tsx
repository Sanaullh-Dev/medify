import React, { useEffect, useState } from "react";
import { FindDoctorsBar } from "./components/find-center";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { HospitalCard } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { FAQ } from "../home/components/faq";
import { DownloadApp } from "../home/components/download-app";
import { Footer } from "@/components/footer";

export const Doctors: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [states, setStates] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const stateParam = param.get("state") || "";
    const cityParam = param.get("city") || "";
    setStates(stateParam);
    setCity(cityParam);

    // Fetch hospitals if both state and city are available
    if (stateParam && cityParam) {
      fetchHospitalsData(stateParam, cityParam);
    }
  }, []);

  const fetchHospitalsData = async (stateName: string, cityName: string) => {
    if (!stateName || !cityName) {
      setHospitals([]); // Reset hospitals if state or city is empty
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
          stateName.trim()
        )}&city=${encodeURIComponent(cityName.trim())}`
      );

      if (response.ok) {
        const data = await response.json();
        setHospitals(data);
      } else {
        setHospitals([]);
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setHospitals([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchHospitals = async () => {
    if (!states || !city) {
      setHospitals([]); // Reset hospitals if state or city is empty
      return;
    }

    // Update URL with selected state and city
    const searchParams = new URLSearchParams();
    searchParams.set("state", states);
    searchParams.set("city", city);

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl, { replace: true });

    // Fetch hospitals with current state and city
    await fetchHospitalsData(states, city);
  };

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "var(--primary-color)",
            zIndex: 1,
            borderRadius: "0 0 15px 15px",
          }}
        />
        <FindDoctorsBar
          selectedState={states}
          setSelectedState={setStates}
          selectedCity={city}
          setSelectedCity={setCity}
          onSearch={fetchHospitals}
        />
        <Box
          sx={{
            alignItems: "left",
            padding: "40px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              margin: 0,
            }}
          >
            {loading
              ? "Searching medical centers..."
              : `${hospitals.length} medical centers available in ${city.toLowerCase()}`}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CheckCircleOutlineOutlinedIcon
              sx={{ marginRight: "5px", marginTop: "10px" }}
            />
            <Typography
              variant="body2"
              style={{
                marginTop: "10px",
                color: "var(--secondary-color)",
              }}
            >
              Book appointments with minimum wait-time & verified doctor details
            </Typography>
          </div>

          {/* Hospital Cards */}
          <Box sx={{ marginTop: "40px" }}>
            {(() => {
              if (loading) {
                return (
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "var(--secondary-color)",
                      padding: "40px",
                    }}
                  >
                    Loading hospitals...
                  </Typography>
                );
              } else if (hospitals.length === 0) {
                return (
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "var(--secondary-color)",
                      padding: "40px",
                    }}
                  >
                    No hospitals found. Please try a different location.
                  </Typography>
                );
              } else {
                return hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital.id || hospital._id || hospital.name}
                    hospital={hospital}
                  />
                ));
              }
            })()}
          </Box>
        </Box>
      </div>
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
};
