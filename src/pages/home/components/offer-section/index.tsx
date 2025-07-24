import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import offerCard1 from "@/assets/offer-1.png";
import offerCard2 from "@/assets/offer-2.png";
import "./OfferSection.css";

export const OfferSection = () => {
  const offerCards = [
    {
      id: 1,
      image: offerCard1,
    },
    {
      id: 2,
      image: offerCard2,
    },
    {
      id: 3,
      image: offerCard1,
    },
    {
      id: 4,
      image: offerCard2,
    },
    {
      id: 5,
      image: offerCard1,
    },
    {
      id: 6,
      image: offerCard2,
    },
  ];

  return (
    <div
      className="offer-section"
      style={{
        marginTop: "200px", // Space for the bottom half of floating component 
        padding: "20px 0", 
        paddingTop: "180px",
        position: "relative", 
        background: "white",
      }}
    >
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        className="custom-swiper"
      >
        {offerCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <img
                src={card.image}
                alt={`Offer ${card.id}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
