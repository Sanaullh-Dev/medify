import faqImage from "@/assets/faq.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AddIcon from "@/assets/add-icon.svg";
import { useState } from "react";

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const faqList = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "We provide a wide range of medical services with experienced specialists to ensure the best care for your family.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "We focus on personalized care, advanced technology, and a patient-centric approach to healthcare.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Our team consists of highly qualified professionals with years of experience in providing compassionate care to seniors.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "You can book an emergency appointment through our website or by calling our helpline. We prioritize urgent cases to ensure timely care.",
    },
  ];
  return (
    <div style={{ padding: "20px", background: "white" }}>
      <h2 style={{ textAlign: "center", background: "white" }}>
        Frequently Asked Questions
      </h2>
      <div
        style={{
          padding: "20px 0",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={faqImage}
          alt="FAQ"
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
        <div
          style={{
            width: "50%",
            maxWidth: "700px",
            marginLeft: "20px",
            flex: 1,
          }}
        >
          {faqList.map((item, index) => (
            <Accordion
              key={index + "_faq"}
              style={{
                marginBottom: "10px",
                border: "none",
                boxShadow: "none",
              }}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={
                  <img
                    src={AddIcon}
                    alt="Expand Icon"
                    style={{ width: "15px", height: "15px" }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  color: "var(--secondary-color)",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                <p>{item.question}</p>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontWeight: "400",
                  fontSize: "0.875rem",
                  color: "gray",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                <p>{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
