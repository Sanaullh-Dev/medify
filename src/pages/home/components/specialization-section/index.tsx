import Box from "@mui/material/Box";
import drugstore from "@/assets/icons/drugstore.png";
import bloodSample from "@/assets/icons/Blood_sample.png";
import heartRate from "@/assets/icons/Heart_rate.png";
import heartRateMonitor from "@/assets/icons/Heart_rate_monitor.png";
import primary_care from "@/assets/icons/Primary_care.png";
import xRay from "@/assets/icons/X-Ray.png";
import piscologist from "@/assets/icons/piscologist.png";

export const SpecializationSection = () => {
  const spList: any = [
    { name: "Dentistry", image: drugstore },
    { name: "Primary Care", image: primary_care },
    { name: "Cardiology", image: heartRate },
    { name: "MRI Resonance", image: heartRateMonitor },
    { name: "Blood Test", image: bloodSample },
    { name: "Piscologist", image: piscologist },
    { name: "Laboratory", image: drugstore },
    { name: "X-Ray", image: xRay },
  ];

  return (
    <div
      style={{
        minHeight: "60vh",
        background: "linear-gradient(to right, #E7F0FF, #E8F1FF78 47%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        gap: "30px",
      }}
    >
      <h2
        style={{
          color: "#1B3C74",
          fontSize: "32px",
          fontWeight: "600",
          textAlign: "center",
          margin: "0",
        }}
      >
        Find By Specialisation
      </h2>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            width: "90%",
            justifyItems: "center",
            marginTop: "20px",
          }}
        >
          {spList.map((item: any, index: number) => (
            <button
              key={index + "_specialization"}
              className="specialization-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0px 34px 44px 0px #D5DBE470",
                textAlign: "center",
                height: "150px",
                width: "80%",
                maxWidth: "250px",
                transition: "transform 0.2s ease",
                cursor: "pointer",
                border: "none",
                marginBottom: "25px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => {}}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "10px",
                  objectFit: "contain",
                }}
              />
              <h3
                style={{
                  margin: "0",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#1B3C74",
                }}
              >
                {item.name}
              </h3>
            </button>
          ))}
        </div>
      </Box>
    </div>
  );
};
