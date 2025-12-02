import React, { useState } from 'react';
import { Box, Container, Card, CardMedia, CardContent, Typography, Button, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'lucide-react';
// IMPORTS the new component
import ImageViewerDialog from '../components/ImageViewerDialog';

// --- Constants ---
const PRIMARY_COLOR = '#667eea';
const SECONDARY_COLOR = '#764ba2';
// --- Data with Categories ---
const productsData = [
  // Existing Items
  { name: 'Accessories', image: '/2.jpeg', price: '$75.00', category: 'Accessories', tag: 'BEST SELLER' },
  { name: 'Wool Jackets', image: '/3.jpeg', price: '$35.00', category: 'Accessories', tag: '' },
  { name: 'Accessories', image: '/4.jpeg', price: '$55.00', category: 'Accessories', tag: 'LAST CHANCE' },
  { name: 'Shawls', image: '/5.jpeg', price: '$120.00', category: 'Accessories', tag: '' },

  // New Items (Caps)
  { name: 'CP-01', image: '/woollen-cap.jpeg', price: '$40.00', category: 'Caps', tag: '' },
  { name: 'CP-02', image: '/woollen-cap2.jpeg', price: '$42.00', category: 'Caps', tag: 'HOT' },
  { name: 'CP-03', image: '/1.jpeg', price: '$45.00', category: 'Caps', tag: 'NEW' },

  // New Items (Jackets)
  { name: 'JC-01', image: '/woollen-jacket.jpeg', price: '$110.00', category: 'Jackets', tag: '' },
  { name: 'JC-02', image: '/woollen-jacket2.jpeg', price: '$115.00', category: 'Jackets', tag: 'BEST SELLER' },
  { name: 'JC-03', image: '/woollen-jacket3.jpeg', price: '$125.00', category: 'Jackets', tag: '' },
  { name: 'JC-04', image: '/woollen-jacket4.jpeg', price: '$105.00', category: 'Jackets', tag: 'NEW' },
  { name: 'JC-05', image: '/woollen-jacket5.jpeg', price: '$130.00', category: 'Jackets', tag: '' },
  { name: 'JC-06', image: '/6.jpeg', price: '$99.00', category: 'Jackets', tag: 'NEW' },
  { name: 'JC-07', image: '/7.jpeg', price: '$85.00', category: 'Jackets', tag: '' },
  { name: 'JC-08', image: '/8.jpeg', price: '$25.00', category: 'Jackets', tag: '' },

  // New Items (Muffs)
  { name: 'M-01', image: '/woollen-muffs.jpeg', price: '$30.00', category: 'Muffs', tag: '' },

  // New Items (Socks)
  { name: 'S-01', image: '/woollen-socks.jpeg', price: '$28.00', category: 'Socks', tag: '' },
  { name: 'S-02', image: '/woollen-socks2.jpeg', price: '$28.00', category: 'Socks', tag: '' },
  { name: 'S-03', image: '/woollen-socks3.jpeg', price: '$30.00', category: 'Socks', tag: 'POPULAR' },
];

const categories = ['All', 'Caps', 'Jackets', 'Muffs', 'Socks', 'Accessories'];

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // --- NEW STATE for Image Viewer ---
  const [viewerState, setViewerState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: ''
  });

  // --- Handlers for Image Viewer ---
  const handleOpenViewer = (src: string, alt: string) => {
    setViewerState({ isOpen: true, imageSrc: src, imageAlt: alt });
  };

  const handleCloseViewer = () => {
    setViewerState({ ...viewerState, isOpen: false });
  };


  // Filter Logic
  const filteredProducts = selectedCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <Box sx={{ py: 4, bgcolor: 'background.default', minHeight: '600px' }}>
      <Container maxWidth="lg">
        
        {/* --- Category Filter Buttons --- */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mb: 6 }}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                fontWeight: 'bold',
                bgcolor: selectedCategory === category ? PRIMARY_COLOR : 'transparent',
                borderColor: PRIMARY_COLOR,
                color: selectedCategory === category ? 'white' : PRIMARY_COLOR,
                '&:hover': {
                  bgcolor: selectedCategory === category ? SECONDARY_COLOR : 'rgba(102, 126, 234, 0.1)',
                  borderColor: SECONDARY_COLOR,
                },
                transition: 'all 0.3s ease'
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* --- Product Grid --- */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {filteredProducts.map((product, index) => (
            <Fade in={true} timeout={500} key={`${product.name}-${index}`}>
              <Card
                elevation={6}
                // The Card still navigates to contact if the *body* is clicked
                onClick={() => navigate('/contact')} 
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 15 },
                  // Only scale image on hover if it's not being clicked
                  '&:hover img': { transform: 'scale(1.05)', transition: '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
                }}
              >
                {/* Product Tag/Badge */}
                {product.tag && (
                  <Box sx={{
                    position: 'absolute', top: 10, right: 10,
                    bgcolor: product.tag === 'BEST SELLER' || product.tag === 'HOT' ? SECONDARY_COLOR : PRIMARY_COLOR,
                    color: 'white', px: 1.5, py: 0.5, borderRadius: '10px', fontSize: '0.75rem', fontWeight: 'bold', zIndex: 1, display: 'flex', alignItems: 'center', boxShadow: 3
                  }}>
                    <Tag size={12} style={{ marginRight: 4 }} />
                    {product.tag}
                  </Box>
                )}

                {/* --- Product Image WITH CLICK HANDLER --- */}
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  // Add click handler specifically for the image
                  onClick={(e) => {
                    // CRITICAL: Stop the event from bubbling up to the Card's onClick
                    e.stopPropagation(); 
                    handleOpenViewer(product.image, product.name);
                  }}
                  sx={{
                    height: 250,
                    objectFit: 'cover',
                    width: '100%',
                    // Change cursor to indicate zooming is possible
                    cursor: 'zoom-in', 
                  }}
                />

                {/* Product Details */}
                <CardContent sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="body2" sx={{ color: '#aaa', textTransform: 'uppercase', fontSize: '0.7rem', mb: 0.5, letterSpacing: 1 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: '#1a202c', lineHeight: 1.2 }}>
                    {product.name}
                  </Typography>
                  {/* <Typography variant="h6" fontWeight="700" sx={{ color: PRIMARY_COLOR }}>
                    {product.price}
                  </Typography> */}
                </CardContent>
              </Card>
            </Fade>
          ))}
        </Box>
        
        {/* Empty State Message */}
        {filteredProducts.length === 0 && (
          <Typography variant="h6" align="center" sx={{ mt: 8, color: '#aaa' }}>
            No products found in this category.
          </Typography>
        )}

        {/* --- RENDER THE IMAGE VIEWER COMPONENT --- */}
        <ImageViewerDialog
          open={viewerState.isOpen}
          onClose={handleCloseViewer}
          imageSrc={viewerState.imageSrc}
          imageAlt={viewerState.imageAlt}
        />

      </Container>
    </Box>
  );
};

export default Products;