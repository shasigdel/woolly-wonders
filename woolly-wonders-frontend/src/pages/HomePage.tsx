import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Paper, Avatar } from "@mui/material";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import CustomerFeedbackList from "../components/CustomerFeedbackList";

// Carousel images
const carouselImages = [
  '/2.jpeg',
  '/3.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg'
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Design Constants matching ProductsPage
  const primaryGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const christmasGradient = 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)';
  const primaryColor = '#667eea';
  const secondaryColor = '#764ba2';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* 1. Hero Section */}
      <Box
        sx={{
          background: primaryGradient,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
            {/* Logo Avatar */}
          <Avatar
            src="/woolly-wonders.png"
            alt="Woolly Wonders Logo"
            sx={{
              width: 200,
              height: 200,
              mb: 4,
              border: '4px solid white',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              mx: 'auto'
            }}
          />
          
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Welcome to Woolly Wonders
          </Typography>
          
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Since 2013, we've been bringing authentic Himalayan craftsmanship to Delaware 
            and beyond. Every piece is handmade with care by skilled artisans in Nepal.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            {/* LINKED TO PRODUCTS PAGE */}
            <Button
              variant="contained"
              size="large"
              href="/products"
              endIcon={<ArrowRight size={20} />}
              sx={{
                bgcolor: 'white',
                color: primaryColor,
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                '&:hover': {
                  bgcolor: '#f8fafc',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s'
              }}
            >
              Shop Collection
            </Button>
            
            {/* LINKED TO ABOUT PAGE */}
            <Button
              variant="outlined"
              size="large"
              href="/about"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Learn Our Story
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 2. Carousel Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="md">
          <Paper
            elevation={10}
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: { xs: '300px', md: '400px' }
            }}
          >
            <Box
              component="img"
              src={carouselImages[currentSlide]}
              alt="Featured Woolly Wonder"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'fadeIn 0.5s ease-in',
                '@keyframes fadeIn': {
                  '0%': { opacity: 0 },
                  '100%': { opacity: 1 },
                },
              }}
            />
            {/* Dots */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1
              }}
            >
              {carouselImages.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: idx === currentSlide ? 24 : 8,
                    height: 8,
                    borderRadius: idx === currentSlide ? '4px' : '50%',
                    bgcolor: idx === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 3. Values Section (Using CSS Grid for stability) */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            fontWeight="bold" 
            mb={6}
            sx={{ color: '#1a202c' }}
          >
            Why Choose Woolly Wonders
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',             
              sm: '1fr 1fr',         
              md: 'repeat(4, 1fr)'   
            },
            gap: 4
          }}>
            {[
              { icon: '🏔️', title: 'Authentic Craft', text: 'Handmade by skilled artisans in Nepal using traditional techniques.' },
              { icon: '✨', title: 'Premium Quality', text: 'Using only the finest materials to ensure lasting beauty and warmth.' },
              { icon: '🤝', title: 'Fair Trade', text: 'Supporting artisan communities with fair wages and sustainable practices.' },
              { icon: '💝', title: 'Perfect Gifts', text: 'Unique, thoughtful gifts that bring warmth and joy to your loved ones.' }
            ].map((item, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: '16px',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>{item.icon}</Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.text}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 4. Christmas Section */}
      <Box sx={{ background: christmasGradient, py: { xs: 8, md: 10 }, color: 'white' }}>
        <Container maxWidth="md">
          <Paper
            elevation={10}
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              borderRadius: '20px',
              bgcolor: 'white',
              color: '#1a202c'
            }}
          >
            <Box 
              component="img"
              src="/baltimore-christmas.png" 
              alt="Baltimore Christmas Village"
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '16px',
                mb: 4,
                boxShadow: 3
              }}
            />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Find Us at Christmas Village
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
              We've been proud participants in Christmas Village since our beginning. 
              Come visit us to see and feel the quality of our products in person!
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                bgcolor: '#dc2626',
                borderRadius: '30px',
                padding: '10px 30px',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#991b1b' }
              }}
            >
              Get Directions
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* 5. Contact Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="sm">
          <Paper
            elevation={10}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: '20px',
              background: 'linear-gradient(145deg, #ffffff, #f0f4f8)',
              border: `2px solid ${primaryColor}`,
            }}
          >
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: secondaryColor }}>
              Get In Touch
            </Typography>
            
            {/* Contact Items */}
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8fafc', borderRadius: '12px' }}>
                <Phone size={24} style={{ color: primaryColor }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">Text us</Typography>
                  <Typography variant="body2" color="text.secondary">302-563-0058</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8fafc', borderRadius: '12px' }}>
                <MapPin size={24} style={{ color: primaryColor }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">Visit us</Typography>
                  <Typography variant="body2" color="text.secondary">Baltimore Christmas Village, West Shore Park</Typography>
                </Box>
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<Mail size={20} />}
              href="/contact"
              sx={{
                mt: 4,
                background: primaryColor,
                borderRadius: '30px',
                fontWeight: 'bold',
                padding: '12px',
                '&:hover': {
                  background: secondaryColor,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Send a Message
            </Button>
          </Paper>
        </Container>
      </Box>
      
      {/* 6. Customer Feedback */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
         <CustomerFeedbackList/>
      </Container>

    </Box>
  );
};

export default HomePage;