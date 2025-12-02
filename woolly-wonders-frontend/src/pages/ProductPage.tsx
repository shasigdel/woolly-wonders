import React from 'react';
import Products from '../components/Products'; // Assuming this component renders the product grid
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { ShoppingBag, Sparkles } from 'lucide-react'; // Lucide icons

const ProductsPage: React.FC = () => {
  // Define the core colors used in the AboutPage and ContactPage for consistency
  const primaryGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const primaryColor = '#667eea';
  const secondaryColor = '#764ba2';

  return (
    <Box>
      {/* Hero Section - Using the consistent gradient theme */}
      <Box 
        sx={{ 
          background: primaryGradient, 
          color: 'white', 
          py: { xs: 10, md: 12 }, 
          textAlign: 'center',
          boxShadow: 3
        }}
      >
        <Container maxWidth="md">
          <Sparkles size={48} style={{ marginBottom: 16 }} />
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Discover Our Collection
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Handcrafted Himalayan goods: where ancient artistry meets modern ethical quality.
          </Typography>
        </Container>
      </Box>

      {/* Products Section - Placeholder for the product grid/listing */}
      {/* We add padding to the top and bottom to create separation */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            fontWeight="bold" 
            mb={4}
            sx={{ color: primaryColor }}
          >
            Featured Woolly Wonders
          </Typography>
          <Products />
        </Container>
      </Box>

      {/* Custom Orders Section - Enhanced CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#e2e8f0' }}>
        <Container maxWidth="md">
          <Paper 
            elevation={10} // Higher elevation for emphasis
            sx={{ 
              p: { xs: 4, md: 6 }, 
              textAlign: 'center', 
              borderRadius: '20px', 
              // Subtle background gradient for contrast
              background: 'linear-gradient(145deg, #ffffff, #f0f4f8)',
              border: `3px solid ${primaryColor}`, // Eye-catching border
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: secondaryColor }}>
              Looking for Something Specific?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Unlock unique designs! We specialize in sourcing and creating **custom orders** directly with our skilled Nepali artisans.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingBag size={20} />} // Lucide Icon
              onClick={() => window.location.href = '/contact'}
              sx={{
                background: primaryColor,
                '&:hover': {
                  background: secondaryColor,
                  transform: 'translateY(-2px)',
                },
                fontWeight: 'bold',
                padding: '10px 30px',
                borderRadius: '30px',
                transition: 'all 0.3s ease',
              }}
            >
              Inquire About Custom Orders
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductsPage;