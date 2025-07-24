import patientCare from "@/assets/patient.png";
import checkIcon from "@/assets/check.svg";
import { Avatar, Box, Card, CardContent, CardMedia } from "@mui/material";
import blogImage from "@/assets/blog-img.png";
import drImage from "@/assets/dr_heena.png";
import ourFamilies from "@/assets/our_families.png";

export const Blogs = () => {
  const checkPoint = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
  ];

  const blogList: any = [
    {
      id: 1,
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      date: "March 31, 2022",
      category: "Medical",
      image: blogImage,
    },
    {
      id: 2,
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      date: "March 31, 2022",
      category: "Medical",
      image: blogImage,
    },
    {
      id: 3,
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      date: "March 31, 2022",
      category: "Medical",
      image: blogImage,
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 0",
          color: "#1B3C74",
        }}
      >
        <img
          src={patientCare}
          alt="Patient Care"
          style={{
            width: "50%",
            maxWidth: "550px",
            height: "auto",
            margin: "0px 50px",
          }}
        />
        <div
          style={{
            margin: "0px 50px",
            maxWidth: "550px",
            width: "50%",
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: "var(--primary-color)",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </p>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: "600",
              color: "var(--secondary-color)",
            }}
          >
            Patient{" "}
            <span style={{ color: "var(--primary-color)" }}>Caring</span>
          </h2>
          <p style={{ fontSize: "16px", color: "gray" }}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div>
            {checkPoint.map((point, index) => (
              <div
                key={index}
                style={{
                  alignItems: "center",
                  justifyItems: "center",
                  height: "50px",
                  display: "flex",
                }}
              >
                <img
                  src={checkIcon}
                  alt="Check Point"
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                <p
                  style={{
                    display: "inline",
                    marginTop: "15px",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "var(--secondary-color)",
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 0", background: "white" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "600",
            color: "var(--primary-color)",
          }}
        >
          Blog & News
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "var(--secondary-color)",
            textAlign: "center",
          }}
        >
          Read Our Latest News
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {blogList.map((blog) => (
            <Card
              key={blog.id + "_blog"}
              sx={{ maxWidth: 345, borderRadius: "5px", margin: "20px" }}
            >
              <CardMedia
                sx={{ height: 260, borderRadius: "5px" }}
                image={blogImage}
                title="green iguana"
              />
              <CardContent style={{ marginTop: "0px", padding: "5px 10px" }}>
                <div>
                  <p style={{ margin: "5px 0", color: "gray" }}>
                    Medical &nbsp; | &nbsp; March 31, 2022
                  </p>
                </div>
                <p
                  style={{
                    margin: "5px 0",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                  }}
                >
                  6 Tips To Protect Your Mental Health When You’re Sick
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={drImage}
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: "lightgray",
                      alignItems: "center",
                    }}
                  />
                  <p style={{ marginLeft: "10px", marginTop: "15px" }}>
                    Rebecca Lee
                  </p>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
              color: "var(--primary-color)",
              padding: "0",
              margin: "0",
            }}
          >
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <h2
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--secondary-color)",
            }}
          >
            Our Families
          </h2>
          <p style={{ fontSize: "16px", color: "gray", marginTop: "15px" }}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <img
          src={ourFamilies}
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          alt="Our Families"
        />
      </div>
    </div>
  );
};
