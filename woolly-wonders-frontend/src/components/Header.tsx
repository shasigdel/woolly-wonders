import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, ShoppingBag, Mail, Menu, Compass } from "lucide-react"; // Imported Lucide icons

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'; // New
import ListItemText from '@mui/material/ListItemText'; // New

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Added Lucide icons to the navigation links
  const navLinks = [
    { path: '/', label: 'Home', Icon: Home },
    { path: '/about', label: 'About', Icon: Info },
    { path: '/products', label: 'Products', Icon: ShoppingBag },
    { path: '/contact', label: 'Contact', Icon: Mail }
  ];
  
  // Custom styles to match the 'AboutPage' aesthetic
  const primaryColor = '#667eea'; // From AboutPage gradient
  const secondaryColor = '#764ba2'; // From AboutPage gradient
  const activeColor = '#93c5fd';
  const logoTextColor = '#f8fafc'; // Light text for dark background

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        // Use a cleaner, slightly more vibrant gradient
        sx={{
          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
          boxShadow: 6, // Increased shadow for a modern lift
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: { xs: 56, md: 64 } }}>
          
          {/* Logo Section */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: logoTextColor,
            }}
          >
            {/* Logo Image */}
            <Box
              component="img"
              src="/woolly-wonders.png" // Ensure this path is correct
              alt="Woolly Wonders Logo"
              sx={{ width: 40, height: 40, mr: 1, borderRadius: '8px' }} // Slightly rounded logo
            />

            {/* Text next to the logo */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", lineHeight: 1, color: logoTextColor }}>
                Woolly Wonders
              </Typography>
              <Typography variant="caption" sx={{ color: activeColor, fontWeight: '500' }}>
                Artisanal Himalayan Goods
              </Typography>
            </Box>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                // Conditional styling for an 'active' tab look
                sx={{
                  color: isActive(link.path) ? activeColor : logoTextColor,
                  fontWeight: isActive(link.path) ? 'bold' : '600',
                  borderBottom: isActive(link.path) ? `3px solid ${activeColor}` : "none",
                  borderRadius: 0,
                  fontSize: "0.95rem",
                  px: 2,
                  py: 1,
                  minWidth: 'auto',
                  textTransform: 'none', // Prevent ALL CAPS
                  "&:hover": {
                    color: activeColor,
                    background: "rgba(255, 255, 255, 0.1)", // Subtle hover background
                    borderBottom: `3px solid ${activeColor}` // Show border on hover
                  }
                }}
              >
                {/* Use Lucide icon next to the label */}
                <link.Icon size={18} style={{ marginRight: 6 }} />
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Location/CTA - Using Lucide Compass */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1, color: logoTextColor }}>
            <Compass size={18} style={{ color: activeColor }} />
            <Typography variant="body2" sx={{ fontWeight: '600', color: logoTextColor }}>
              Chrishmas Village, Baltimore
            </Typography>
            {/* Added a call-to-action button for products */}
            <Button
                component={Link}
                to="/products"
                variant="contained"
                size="small"
                sx={{
                    ml: 2,
                    background: activeColor,
                    color: primaryColor,
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    '&:hover': {
                        background: 'white',
                        color: secondaryColor,
                    }
                }}
            >
                Shop Now
            </Button>
          </Box>

          {/* Mobile Menu Button - Using Lucide Menu */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: logoTextColor }}
            onClick={toggleDrawer(true)}
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, pt: 3 }}>
          <List>
            {navLinks.map((link) => {
                const Icon = link.Icon;
                return (
                <ListItem key={link.path} disablePadding>
                    <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={toggleDrawer(false)}
                    sx={{
                        fontWeight: isActive(link.path) ? 'bold' : 'normal',
                        color: isActive(link.path) ? primaryColor : '#1a202c', // Dark text color
                        borderLeft: isActive(link.path) ? `4px solid ${primaryColor}` : 'none',
                        py: 1.5,
                        px: 3,
                        '&:hover': {
                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        }
                    }}
                    >
                    <ListItemIcon>
                        <Icon size={20} color={isActive(link.path) ? primaryColor : '#4a5568'} />
                    </ListItemIcon>
                    <ListItemText primary={link.label} />
                    </ListItemButton>
                </ListItem>
            )})}
          </List>
          {/* Add location info in the drawer */}
          <Box sx={{ p: 3, borderTop: '1px solid #e2e8f0', mt: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{mb: 1}}>Location:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', color: primaryColor }}>
                <Compass size={16} style={{ marginRight: 8 }} />
                <Typography variant="body2" sx={{fontWeight: '600'}}>Chrishmas Village, USA</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;