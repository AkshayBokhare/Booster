import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import {
  ArrowBack,
  CameraAlt,
  Delete,
} from '@mui/icons-material';
import { getOrderById } from '../../mock/orders';
import EmptyState from '../../components/common/EmptyState';

const ProofOfDelivery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = getOrderById(id);

  const [recipientName, setRecipientName] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  if (!order) {
    return <EmptyState message="Order not found" />;
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handleSubmit = () => {
    if (!recipientName.trim()) {
      alert('Please enter recipient name');
      return;
    }

    // UI only - no backend
    alert('Proof of delivery submitted successfully!');
    navigate('/driver/home');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton
            onClick={() => navigate(`/driver/jobs/${order.id}`)}
            sx={{ mr: 1 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Proof of Delivery
          </Typography>
        </Box>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {order.trackingId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {order.delivery.address}
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Photo (Optional)
          </Typography>
          {photoPreview ? (
            <Box sx={{ position: 'relative', mb: 2 }}>
              <img
                src={photoPreview}
                alt="Proof of delivery"
                style={{
                  width: '100%',
                  maxHeight: 300,
                  objectFit: 'contain',
                  borderRadius: 8,
                }}
              />
              <IconButton
                onClick={handleRemovePhoto}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.7)',
                  },
                }}
              >
                <Delete />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                border: '2px dashed #ccc',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: '#D4A574',
                  bgcolor: '#FAEBD7',
                },
              }}
            >
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="photo-upload"
                type="file"
                onChange={handlePhotoChange}
              />
              <label htmlFor="photo-upload">
                <CameraAlt sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Tap to take/upload photo
                </Typography>
              </label>
            </Box>
          )}
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <TextField
            fullWidth
            label="Recipient Name *"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            margin="normal"
            required
            size="large"
          />
          <TextField
            fullWidth
            label="Notes (Optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            margin="normal"
            multiline
            rows={4}
            size="large"
          />
        </Paper>

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleSubmit}
          sx={{ py: 1.5, mb: 2 }}
        >
          Submit Proof of Delivery
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate(`/driver/jobs/${order.id}`)}
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default ProofOfDelivery;
