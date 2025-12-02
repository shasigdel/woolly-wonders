import React from 'react';
import Contact from '../components/Contact'; // Assuming Contact form component exists
import { Box, Typography, Paper, Avatar, Divider } from '@mui/material'; // Added Divider
import { MapPin, Phone, MessageSquare, Clock, HelpCircle, ShoppingBag, Truck } from 'lucide-react'; // Lucide icons

const ContactPage: React.FC = () => {
  // Define the core colors used in the AboutPage for consistency
  const primaryGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const primaryColor = '#667eea';
  const secondaryColor = '#764ba2';

  // Updated contact info using Lucide icons and consistent colors
  const contactInfo = [
    {
      Icon: MapPin, // Lucide icon
      title: 'Location',
      details: ['Baltimore, USA', 'Find us at Baltimore Christmas Village - West Shore Park'],
      color: primaryColor, // Consistent primary color
    },
    {
      Icon: Phone, // Lucide icon
      title: 'Phone',
      details: ['Text us at +1 302 563 0058', 'Quick response guaranteed'],
      color: '#48bb78', // A fresh green (success color)
    },
    {
      Icon: MessageSquare, // Lucide icon (for Social Media)
      title: 'Social Media',
      details: ['Follow us on Facebook - Woolly Wonders', 'See new arrivals first'],
      color: '#f6ad55', // An attractive orange/amber (warning color)
    },
    {
      Icon: Clock, // Lucide icon
      title: 'Market Hours',
      details: ['Visit us at Christmas markets', 'Seasonal availability'],
      color: '#e53e3e', // A deep red (error color)
    },
  ];

  const faqs = [
    {
      Icon: ShoppingBag,
      question: 'Where can I see your products in person?',
      answer:
        "We participate in Christmas Village throughout November in Baltimore. Contact us to find out where we'll be next!",
    },
    {
      Icon: HelpCircle,
      question: 'Do you offer custom orders?',
      answer:
        'Yes! We work with our artisans in Nepal to create custom pieces. Send us a message with your requirements.',
    },
    {
      Icon: Truck,
      question: 'How long does shipping take?',
      answer:
        'Contact us for current shipping times. Each piece is handmade, so timing may vary based on availability.',
    },
  ];

  return (
    <Box>
      {/* HERO SECTION */}
      <Box sx={{ 
          background: primaryGradient, 
          color: 'white', 
          py: { xs: 8, md: 12 }, 
          textAlign: 'center',
          boxShadow: 3
        }}>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Ready to Connect?
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
          We'd love to hear from you! Send us a message, or use the quick links below to find us 
          during the market season.
        </Typography>
      </Box>

      {/* --- */}

      {/* CONTACT CARDS */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            maxWidth: 1200,
            mx: 'auto',
            px: 2,
          }}
        >
          {contactInfo.map((info, index) => (
            <Paper
              key={index}
              elevation={8} // Increased elevation for a floating look
              sx={{
                p: 4,
                textAlign: 'center',
                width: { xs: '100%', sm: '45%', lg: '22%' },
                borderRadius: '16px', // Rounded corners
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 15,
                }
              }}
            >
              {/* Lucide Icon in Avatar */}
              <Avatar
                sx={{
                  bgcolor: info.color,
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 2,
                  boxShadow: `0 4px 12px ${info.color}33`, // Subtle shadow matching color
                }}
              >
                <info.Icon size={32} color="white" />
              </Avatar>

              <Typography variant="h5" fontWeight="bold" gutterBottom color="text.primary">
                {info.title}
              </Typography>
              
              <Divider sx={{ mb: 1.5, width: '50%', mx: 'auto' }} />

              {info.details.map((detail, idx) => (
                <Typography variant="body1" color="text.secondary" key={idx} sx={{ mb: 0.5 }}>
                  {detail}
                </Typography>
              ))}
            </Paper>
          ))}
        </Box>
      </Box>

      {/* --- */}

      {/* CONTACT FORM */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ color: primaryColor }}>
                Send Us A Message
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={4}>
                Have a question about an order, custom work, or product availability? Use the form below.
            </Typography>
            <Contact />
        </Box>
      </Box>

      {/* --- */}

      {/* FAQ SECTION */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#e2e8f0' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: 800,
            mx: 'auto',
            px: 2,
          }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: secondaryColor }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" mb={3}>
            Quick answers to our most common customer inquiries.
          </Typography>

          {faqs.map((faq, idx) => (
            <Paper 
                elevation={4} 
                sx={{ p: 3, borderRadius: '12px' }} 
                key={idx}
            >
              <Box display="flex" alignItems="flex-start" mb={1}>
                <faq.Icon size={24} style={{ color: primaryColor, marginRight: 12, flexShrink: 0 }} />
                <Typography variant="h6" fontWeight="bold">
                  {faq.question}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ pl: 4 }}>
                {faq.answer}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;