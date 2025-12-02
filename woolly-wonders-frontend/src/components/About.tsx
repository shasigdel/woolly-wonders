import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material"; // Added useTheme
import { Sparkles, Mountain } from "lucide-react"; // Importing Lucide icons

const About: React.FC = () => {
  // Use constant colors for consistency
  const PRIMARY_COLOR = '#667eea'; // Core Blue/Purple
  const SECONDARY_COLOR = '#764ba2';
  const TEXT_DARK = '#1a202c'; // Dark text color

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Mountain size={48} style={{ color: PRIMARY_COLOR, marginBottom: 8 }} />
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ 
              color: SECONDARY_COLOR, // Using consistent secondary color for the title
              textShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }} 
          >
            Our Story: From Nepal to Baltimore
          </Typography>
        </Box>

        {/* Content: flex container for image and text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="https://placehold.co/800x600/667eea/ffffff?text=Himalayan+Artistry" // Placeholder/Fallback Image
            alt="Baltimore Christmas Village"
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: "400px" },
              height: "auto",
              borderRadius: 4, // More rounded corners
              objectFit: "cover",
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)', // Shadow matching primary color
            }}
          />

          {/* Text Card */}
          <Paper
            elevation={8} // Increased elevation for a lifted look
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4, // Matching rounded corners
              flex: 1,
              borderLeft: `5px solid ${PRIMARY_COLOR}`, // Accent border for style
              background: '#f8fafc', // Slight off-white background
            }}
          >
            <Box sx={{ color: TEXT_DARK, lineHeight: 1.8 }}>
              
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: PRIMARY_COLOR }}>
                <Sparkles size={20} style={{ marginRight: 8, transform: 'translateY(-2px)' }} />
                Handcrafted Heritage
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: "1.125rem" }}>
                Woolly Wonders is a Delaware-based business specializing in
                high-quality winter clothing and accessories inspired by the rich
                artisanal heritage of the Himalayas. Since 2013, we have proudly
                offered a curated collection of woolen sweaters, cozy essentials, and vibrant felted
                products — all ethically made in Nepal by skilled Himalayan
                artisans.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: "1.125rem" }}>
                Our commitment to craftsmanship, authenticity, and **sustainable
                sourcing** has been at the heart of our business from the beginning.
                Since our inception, we have been a dedicated participant in
                Christmas markets, sharing the warmth and artistry of Himalayan
                textiles with local communities year after year.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
                At Woolly Wonders, every piece tells a story of tradition,
                quality, and care — bringing the authentic charm of Nepal directly to your winter
                wardrobe.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;