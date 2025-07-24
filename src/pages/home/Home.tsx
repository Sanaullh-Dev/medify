import React from "react";
import "./Home.css";
import heroImag from "../../assets/hero_img.png"; // Assuming you have a hero image in assets
import { UIButton } from "../../ui-kit";
import { OfferSection } from "./components/offer-section";
import { SpecializationSection } from "./components/specialization-section";
import { OurMedicalSpecialist } from "./components/our_medical_specialist";
import { Blogs } from "./components/blogs";
import { FAQ } from "./components/faq";
import { DownloadApp } from "./components/download-app";
import { Footer } from "@/components/footer";
import { FindCenter } from "./components/find-center";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="home-container">
          <div className="hero-section">
            <div>
              <p
                style={{
                  color: "black",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                }}
              >
                Skip the travel! Find Online
              </p>
              <h1 className="hero-title">
                Medical <span>Centers</span>
              </h1>
              <p className="hero-subtitle">
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </p>
              <div className="hero-actions">
                <UIButton onClick={() => {}}>
                  Find Centers
                </UIButton>
              </div>
            </div>
            <img
              src={heroImag}
              alt="Hero"
              style={{ width: "auto", height: "60vh" }}
            />
          </div>
        </div>
        <FindCenter />
      </div>
      <OfferSection />
      <SpecializationSection />
      <OurMedicalSpecialist />
      <Blogs />
      <FAQ />
      <DownloadApp />
      <Footer />
    </div>
  );
};
