import React from "react";
import { Link } from "react-router-dom";
import { Mountain, CheckCircle } from "lucide-react"; // Imported Lucide icons

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// --- Constants (Matching other components) ---
const PRIMARY_COLOR = '#667eea';
const SECONDARY_COLOR = '#764ba2';
const BACKGROUND_COLOR = '#1a202c'; // Deep navy/charcoal for the footer
const ACCENT_COLOR = '#93c5fd'; // Light blue accent

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: BACKGROUND_COLOR,
        color: "white",
        py: { xs: 6, md: 8 },
        px: 2,
        // Match the gradient style subtlely for the top border
        borderTop: `4px solid ${SECONDARY_COLOR}`, 
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Main Columns */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            mb: 6,
          }}
        >
          {/* Brand Section */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {/* Lucide Icon: Mountain (representing Himalayas) */}
              <Mountain size={36} style={{ color: PRIMARY_COLOR, marginRight: 8 }} />
              <Typography variant="h5" fontWeight="bold">
                Woolly Wonders
              </Typography>
            </Box>

            <Typography sx={{ color: "#cbd5e1", mb: 1, fontSize: '0.95rem' }}>
              Bringing Himalayan warmth to your winter wardrobe<br />
              Ethically made since 2013.
            </Typography>

            <Typography variant="body2" sx={{ color: "#94a3b8" }}>
              📍 Delaware, USA • Handcrafted in Nepal
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: PRIMARY_COLOR, mb: 2 }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Typography
                  key={item.to}
                  component={Link}
                  to={item.to}
                  sx={{
                    textDecoration: "none",
                    color: "#cbd5e1",
                    transition: "0.2s",
                    '&:hover': { color: ACCENT_COLOR, transform: 'translateX(4px)' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Values */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: PRIMARY_COLOR, mb: 2 }}
            >
              Our Commitment
            </Typography>

            <Box sx={{ color: "#cbd5e1", fontSize: "0.9rem", display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                "Ethical Craftsmanship",
                "Sustainable Sourcing",
                "Community Support"
              ].map((value, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle size={16} style={{ color: ACCENT_COLOR, marginRight: 8 }} />
                    <Typography component="span" sx={{ color: "#cbd5e1" }}>{value}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#334155", mb: 3 }} />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#94a3b8" }}
        >
          © {new Date().getFullYear()} Woolly Wonders. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;