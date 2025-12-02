import React, { useState } from 'react';
import { Phone, Copy, Send } from 'lucide-react'; // Use Lucide Icons
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

// --- Constants ---
const WOOLY_WONDERS_PHONE = '+1-302-563-0058'; // Placeholder for phone number
const PRIMARY_COLOR = '#667eea';
const SECONDARY_COLOR = '#764ba2';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [desktopDialog, setDesktopDialog] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  // Helper to check for mobile devices
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  };

  const handleCopy = () => {
    // FIX: Use document.execCommand('copy') for reliable clipboard functionality
    const tempInput = document.createElement('textarea');
    tempInput.value = WOOLY_WONDERS_PHONE;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
      document.execCommand('copy');
      setCopySuccess('Phone number copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback UI alert
      setCopySuccess('Failed to copy. Please copy manually: ' + WOOLY_WONDERS_PHONE);
      setTimeout(() => setCopySuccess(''), 5000);
    } finally {
      document.body.removeChild(tempInput);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    if (!formData.name || !formData.phone || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    const smsBody = `New Product Inquiry:
Name: ${formData.name}
Customer Phone: ${formData.phone}
Message: ${formData.message}`;

    if (isMobileDevice()) {
      const smsLink = `sms:${WOOLY_WONDERS_PHONE}?body=${encodeURIComponent(smsBody)}`;
      window.location.href = smsLink;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 3000);

      return;
    }

    // Desktop -> show custom dialog 
    setDesktopDialog(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ py: 4, bgcolor: 'transparent', minHeight: 400 }}>
      {/* Container for the form */}
      <Box 
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}
      >
        {/* Error and Success Alerts */}
        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: '8px' }}>
            {error}
          </Alert>
        )}
        {submitted && (
          <Alert severity="success" sx={{ mb: 2, borderRadius: '8px' }}>
            Thank you for your message! Your SMS app should open shortly.
          </Alert>
        )}

        <Paper 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            elevation: 10,
            borderRadius: '16px',
            background: 'linear-gradient(145deg, #ffffff, #f0f4f8)', // Light gradient background
          }} 
          elevation={5}
        >
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={5}
              required
              fullWidth
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<Send size={20} />} 
              sx={{
                background: PRIMARY_COLOR,
                '&:hover': {
                  background: SECONDARY_COLOR,
                  transform: 'translateY(-1px)',
                },
                fontWeight: 'bold',
                padding: '10px 0',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              fullWidth
              size="large"
            >
              Send Message via SMS
            </Button>

            <Typography variant="caption" align="center" color="text.secondary">
              * On mobile, this opens your native SMS app.<br />
              * On desktop, we will provide the number for manual texting.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Desktop Dialog - Customized look and copy success feedback */}
      <Dialog 
        open={desktopDialog} 
        onClose={() => setDesktopDialog(false)}
        PaperProps={{ sx: { borderRadius: '16px', background: 'linear-gradient(145deg, #ffffff, #f0f4f8)' } }}
      >
        <DialogTitle sx={{ color: PRIMARY_COLOR, fontWeight: 'bold' }}>
            <Box display="flex" alignItems="center">
                <Phone size={24} style={{ marginRight: 8 }} />
                Text Us Directly
            </Box>
        </DialogTitle>

        <DialogContent dividers>
          <Typography>
            You're currently on a desktop device. For fast service, please use your mobile 
            phone to text us the following number:
          </Typography>

          <Paper 
            variant="outlined" 
            sx={{ 
                mt: 2, 
                p: 2, 
                bgcolor: PRIMARY_COLOR, 
                color: 'white', 
                textAlign: 'center', 
                borderRadius: '8px'
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {WOOLY_WONDERS_PHONE}
            </Typography>
          </Paper>
          
          {copySuccess && (
            <Alert severity="info" sx={{ mt: 2, borderRadius: '8px' }}>
              {copySuccess}
            </Alert>
          )}

        </DialogContent>

        <DialogActions>
          <Button 
            onClick={handleCopy} 
            startIcon={<Copy size={20} />}
            sx={{ color: SECONDARY_COLOR }}
          >
            Copy Number
          </Button>
          <Button 
            onClick={() => setDesktopDialog(false)} 
            variant="contained"
            sx={{ bgcolor: PRIMARY_COLOR, '&:hover': { bgcolor: SECONDARY_COLOR } }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;