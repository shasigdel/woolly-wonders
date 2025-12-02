import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Calendar, Heart, Globe } from "lucide-react";
import GoogleFeedbackForm from '../components/GoogleFeedbackForm';

// Mock Component for the internal About text
// In your real project, you might import this: import About from "../components/About";
const MockAbout = () => (
  <Box sx={{
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    p: { xs: 4, md: 6 },
    borderRadius: '24px',
    boxShadow: 3,
    typography: 'body1',
    fontSize: '1.125rem',
    color: 'text.secondary',
    lineHeight: 1.8
  }}>
    <Typography paragraph>
      Woolly Wonders is a Delaware-based business specializing in
      high-quality winter clothing and accessories inspired by the rich
      artisanal heritage of the Himalayas. Since 2013, we have proudly
      offered a curated collection of woolen sweaters, cozy essentials, and vibrant felted
      products — all ethically made in Nepal by skilled Himalayan artisans.
    </Typography>
    <Typography>
      Our commitment to craftsmanship, authenticity, and <strong>sustainable
      sourcing</strong> has been at the heart of our business from the beginning.
      Every piece tells a story of tradition, quality, and care.
    </Typography>
  </Box>
);

const milestones = [
  {
    year: "2013",
    title: "Our Beginning",
    description: "Woolly Wonders (formerly Land of Wool and Felt) was founded with a mission to bring authentic Himalayan craftsmanship to the United States.",
    icon: Calendar,
  },
  {
    year: "2013-Present",
    title: "Christmas Markets",
    description: "Dedicated participants in Christmas markets, sharing the warmth and artistry of Himalayan textiles with local communities.",
    icon: Heart,
  },
  {
    year: "Today",
    title: "Global Impact",
    description: "Supporting skilled artisans in Nepal while providing customers with ethically-made, high-quality winter wear.",
    icon: Globe,
  },
];

const AboutPage: React.FC = () => {
  // Design Constants
  const primaryGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const primaryColor = '#667eea';
  const textDark = '#1a202c';

  return (
    <Box>
      {/* 1. Hero Section - Matches HomePage exactly */}
      <Box 
        sx={{ 
          background: primaryGradient, 
          color: 'white', 
          py: { xs: 8, md: 12 }, 
          textAlign: 'center',
          boxShadow: 3
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Learn about our journey and commitment to ethical craftsmanship
          </Typography>
        </Container>
      </Box>

      {/* 2. Story Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            fontWeight="bold" 
            mb={6}
            sx={{ color: textDark }}
          >
            Our Story
          </Typography>
          <MockAbout />
        </Container>
      </Box>

      {/* 3. Mission Section */}
      <Box sx={{ 
        background: primaryGradient, 
        py: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern overlay */}
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Paper 
            elevation={10}
            sx={{ 
              p: { xs: 4, md: 6 }, 
              textAlign: 'center', 
              borderRadius: '24px' 
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: textDark }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4a5568' }}>
              To preserve and celebrate traditional Himalayan craftsmanship while supporting 
              Nepali artisans. We believe every purchase should make a positive impact on both 
              the artisan and the environment. Through fair trade practices and sustainable 
              materials, we're building a bridge between ancient traditions and modern values.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* 4. Journey/Timeline Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            fontWeight="bold" 
            mb={6}
            sx={{ color: textDark }}
          >
            Our Journey
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    textAlign: { xs: 'center', sm: 'left' },
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                      borderLeft: `4px solid ${primaryColor}`
                    }
                  }}
                >
                  <Box sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '16px',
                    background: primaryGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                  }}>
                    <Icon size={32} color="white" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: primaryColor, letterSpacing: 1, mb: 1, textTransform: 'uppercase' }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: textDark }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 5. Feedback Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="md">
          <Paper 
            elevation={2}
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: '20px',
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: textDark }}>
              Share Your Feedback
            </Typography>
            <Box sx={{ color: 'text.secondary', mb: 3 }}>
              <GoogleFeedbackForm />
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;