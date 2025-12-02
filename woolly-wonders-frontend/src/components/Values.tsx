import React from 'react';
import { Leaf, Users, Heart } from 'lucide-react'; // Lucide Icons

import { Box, Typography, Paper, Avatar } from '@mui/material';

// --- Constants (Matching other components) ---
const PRIMARY_COLOR = '#667eea'; // Core Blue/Purple
const SECONDARY_COLOR = '#764ba2';
const ACCENT_BG = '#f0f4f8';

interface ValueCard {
  Icon: React.FC<any>; // Using React.FC for Lucide icons
  title: string;
  description: string;
  bgColor: string; // Background color for the avatar
  iconColor: string; // Color of the Lucide icon
}

const Values: React.FC = () => {
  const values: ValueCard[] = [
    {
      Icon: Heart, // Changed to Lucide Heart
      title: 'Ethical Craftsmanship',
      description:
        'All products are handmade by skilled Himalayan artisans, ensuring fair wages and respecting tradition.',
      bgColor: '#e0f7fa', // Very light blue
      iconColor: PRIMARY_COLOR,
    },
    {
      Icon: Leaf, // Changed to Lucide Leaf
      title: 'Sustainable Sourcing',
      description:
        'We use eco-friendly and natural wools, minimizing environmental impact to honor the high mountains.',
      bgColor: '#e8f5e9', // Light green
      iconColor: SECONDARY_COLOR,
    },
    {
      Icon: Users, // Changed to Lucide Users
      title: 'Community Connection',
      description:
        'Since 2013, we’ve connected artisans and customers through Christmas markets and shared values.',
      bgColor: '#f3e5f5', // Light purple
      iconColor: PRIMARY_COLOR,
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: ACCENT_BG }}>
      <Typography 
        variant="h4" 
        align="center" 
        fontWeight="bold" 
        gutterBottom
        sx={{ 
          mb: 5, 
          color: SECONDARY_COLOR, 
          textShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}
      >
        What We Stand For
      </Typography>

      {/* Responsive flex container */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mt: 4,
          maxWidth: 1200,
          mx: 'auto',
          px: 2,
        }}
      >
        {values.map((value, index) => {
            const Icon = value.Icon;
            return (
            <Box
                key={index}
                sx={{
                width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(33.33% - 22px)', // Adjusted width for better spacing
                },
                }}
            >
                <Paper
                elevation={8} // Increased elevation
                sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: '16px', // Rounded corners
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    height: '100%',
                    '&:hover': { 
                        boxShadow: 15, 
                        transform: 'translateY(-5px)', // Lift on hover
                    },
                }}
                >
                <Avatar
                    sx={{
                    bgcolor: value.bgColor,
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    }}
                >
                    <Icon size={32} style={{ color: value.iconColor }} />
                </Avatar>

                <Typography 
                    variant="h6" 
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: PRIMARY_COLOR }}
                >
                    {value.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {value.description}
                </Typography>
                </Paper>
            </Box>
        )})}
      </Box>
    </Box>
  );
};

export default Values;