import { Typography, Box, Link } from "@mui/material";
import logo from "@/assets/logo.svg";

// Company links data
const companyLinks = [
  { id: "about", label: "About Us", href: "#" },
  { id: "pricing", label: "Our Pricing", href: "#" },
  { id: "gallery", label: "Our Gallery", href: "#" },
  { id: "appointment", label: "Appointment", href: "#" },
  { id: "privacy", label: "Privacy Policy", href: "#" },
];

// Services links data
const servicesLinks = [
  { id: "orthology", label: "Orthology", href: "#" },
  { id: "neurology", label: "Neurology", href: "#" },
  { id: "dental", label: "Dental Care", href: "#" },
  { id: "ophthalmology", label: "Ophthalmology", href: "#" },
  { id: "cardiology", label: "Cardiology", href: "#" },
];


const pages = [
  { id: "about", label: "About Us", href: "#" },
  { id: "pricing", label: "Our Pricing", href: "#" },
  { id: "gallery", label: "Our Gallery", href: "#" },
  { id: "appointment", label: "Our Appointment", href: "#" },
  { id: "privacy", label: "Privacy Policy", href: "#" },
];

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1B3C74",
        color: "white",
        padding: "40px 0 20px",
      }}
    >
      {/* Main Footer Content */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "30px",
            justifyContent: "space-between",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "30px",
            },
          }}
        >
          {/* Column 1: Logo and App Name */}
          <Box sx={{ flex: "1", minWidth: "250px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "80px",
              }}
            >
              <img
                src={logo}
                alt="Medify Logo"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "12px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "var(--primary-color)",
                }}
              >
                Medify
              </Typography>
            </Box>

            {/* Social Media Links */}
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              {/* Facebook */}
              <Box
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ width: 20, height: 20, fill: "#2AA7FF" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </Box>
              </Box>

              {/* Twitter */}
              <Box
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ width: 20, height: 20, fill: "#2AA7FF" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </Box>
              </Box>

              {/* YouTube */}
              <Box
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ width: 20, height: 20, fill: "#2AA7FF" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </Box>
              </Box>

              {/* Pinterest */}
              <Box
                component="a"
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ width: 20, height: 20, fill: "#2AA7FF" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Column 2: Company Links */}
          <Box sx={{ flex: "1", minWidth: "200px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {companyLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  sx={{
                    color: "#B8C5D6",
                    textDecoration: "none",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "&:hover": {
                      color: "#2AA7FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Box
                    component="svg"
                    sx={{ width: 12, height: 12, fill: "white" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6l-1.41-1.41z" />
                  </Box>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 3: Services */}
          <Box sx={{ flex: "1", minWidth: "200px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {servicesLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  sx={{
                    color: "#B8C5D6",
                    textDecoration: "none",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "&:hover": {
                      color: "#2AA7FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Box
                    component="svg"
                    sx={{ width: 12, height: 12, fill: "white" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6l-1.41-1.41z" />
                  </Box>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 4: pages */}
          <Box sx={{ flex: "1", minWidth: "250px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {pages.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  sx={{
                    color: "#B8C5D6",
                    textDecoration: "none",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "&:hover": {
                      color: "#2AA7FF",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Box
                    component="svg"
                    sx={{ width: 12, height: 12, fill: "white" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6l-1.41-1.41z" />
                  </Box>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom Copyright Section */}
        <Box
          sx={{
            borderTop: "1px solid #2A4A73",
            paddingTop: "20px",
            textAlign: "left",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#B8C5D6",
              fontSize: "14px",
            }}
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
