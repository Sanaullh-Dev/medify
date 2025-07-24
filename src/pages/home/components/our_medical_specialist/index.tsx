import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./our_specialist.css";
import heena from "@/assets/dr_heena.png";
import khan from "@/assets/dr_ahmad_khan.png";
import ankur from "@/assets/dr_ankur.png";

export const OurMedicalSpecialist = () => {
  const drsList: any = [
    {
      id: 1,
      name: "Dr. Heena Sachdeva",
      image: heena,
      specialization: "Orthopadics",
    },
    {
      id: 2,
      name: "Dr. Ahmad Khan",
      image: khan,
      specialization: "Neurologist",
    },
    {
      id: 3,
      name: "Dr. Ankur Sharma",
      image: ankur,
      specialization: "Medicine",
    },
    {
      id: 4,
      name: "Dr. Heena Sachdeva",
      image: heena,
      specialization: "Orthopadics",
    },
    {
      id: 5,
      name: "Dr. Ahmad Khan",
      image: khan,
      specialization: "Neurologist",
    },
    {
      id: 6,
      name: "Dr. Ankur Sharma",
      image: ankur,
      specialization: "Medicine",
    },
    {
      id: 7,
      name: "Dr. Heena Sachdeva",
      image: heena,
      specialization: "Orthopadics",
    },
    {
      id: 8,
      name: "Dr. Ahmad Khan",
      image: khan,
      specialization: "Neurologist",
    },
    {
      id: 9,
      name: "Dr. Ankur Sharma",
      image: ankur,
      specialization: "Medicine",
    },
  ];

  return (
    <div
      style={{
        padding: "20px 0",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        background: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: "30px 0",
          color: "#1B3C74",
          fontSize: "32px",
        }}
      >
        Our Medical Specialist
      </h2>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={false}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: function (_index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          marginTop: "50px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "50px",
        }}
        className="custom-swiper"
      >
        {drsList.map((card) => (
          <SwiperSlide key={card.id} style={{ width: "280px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "270px",
                width: "260px",
                margin: "0 auto",
                paddingTop: "25px",
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                background:
                  "linear-gradient(to bottom right, #E1F3FF, #2AA7FF)",
              }}
            >
              <img
                src={card.image}
                alt={`Doctor ${card.name}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                {card.name}
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "15px",
                  color: "var(--primary-color)",
                }}
              >
                {card.specialization}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
