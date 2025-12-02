import React from "react";
import { Link } from "react-router-dom"; // Import Link for the Button
import { Mountain, Heart } from "lucide-react"; // Import Lucide icons

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button"; // Import Button

// --- Constants (Matching other components) ---
const PRIMARY_COLOR = '#667eea'; // Core Blue/Purple
const SECONDARY_COLOR = '#764ba2';
const ACCENT_COLOR = '#93c5fd'; // Light blue accent

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        // Use the consistent gradient background
        background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${SECONDARY_COLOR} 100%)`,
        color: "white",
        py: { xs: 10, md: 16 },
        textAlign: "center",
        boxShadow: 8, // Add strong shadow for depth
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Pattern (Optional, based on AboutPage) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Decorative Icon */}
        <Mountain size={64} style={{ marginBottom: 16, color: ACCENT_COLOR }} />

        <Typography
          variant="h2"
          fontWeight="900" // Extra bold font
          component="h1"
          sx={{ mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" }, textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
        >
          Himalayan Craftsmanship
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.7,
            opacity: 0.95,
            fontSize: { xs: "1.1rem", md: "1.35rem" }
          }}
        >
          High-quality winter clothing and accessories inspired by the rich
          artisanal heritage of the Himalayas.
        </Typography>
        
        {/* Call to Action Button */}
        <Button
          component={Link}
          to="/products"
          variant="contained"
          size="large"
          endIcon={<Heart size={20} />}
          sx={{
            mt: 3,
            bgcolor: ACCENT_COLOR, // Use light accent color for contrast
            color: SECONDARY_COLOR, // Dark text from the gradient
            fontWeight: 'bold',
            padding: '12px 36px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'white',
              color: PRIMARY_COLOR,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          Explore the Collection
        </Button>

        {/* Footer Text */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
            mt: 4,
          }}
        >
          Ethically made in Nepal by skilled Himalayan artisans since 2013.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;