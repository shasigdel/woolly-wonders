import React from 'react';
import { Dialog, IconButton, Box, Fade } from '@mui/material';
import { X } from 'lucide-react';

// Define the props the component accepts
interface ImageViewerDialogProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string;
}

const ImageViewerDialog: React.FC<ImageViewerDialogProps> = ({ 
  open, 
  onClose, 
  imageSrc, 
  imageAlt = "Product Image" 
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Fade} // Adds a nice fade effect on open/close
      transitionDuration={400}
      // Override Paper styles for a dark, translucent overlay look
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.92)', // Dark background
          boxShadow: 'none', // Remove default dialog shadow
          backgroundImage: 'none',
        }
      }}
    >
      {/* Close "X" Button located at top right */}
      <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: 'white',
          zIndex: 1301, // Ensure it's above the image
          bgcolor: 'rgba(255,255,255,0.1)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
        }}
      >
        <X size={28} />
      </IconButton>

      {/* Container to center the image */}
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, md: 4 }, // Padding to ensure image doesn't touch screen edges
          outline: 'none'
        }}
        onClick={onClose} // Clicking anywhere outside the image (in the empty space) closes it
      >
        {/* Standard HTML img tag works best here for simpler responsiveness control */}
        <img
          src={imageSrc}
          alt={imageAlt}
          onClick={(e) => e.stopPropagation()} // Prevent clicking the actual image from closing the dialog
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain', // Crucial: ensures the whole image is visible without cropping
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}
        />
      </Box>
    </Dialog>
  );
};

export default ImageViewerDialog;