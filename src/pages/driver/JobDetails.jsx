import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  Navigation,
  Phone,
  CheckCircle,
} from '@mui/icons-material';
import { getOrderById } from '../../mock/orders';
import MapPlaceholder from '../../components/map/MapPlaceholder';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';

const statusSteps = [
  'assigned',
  'in-transit-pickup',
  'arrived-pickup',
  'picked-up',
  'in-transit-delivery',
  'arrived-delivery',
  'delivered',
];

const statusLabels = {
  assigned: 'Assigned',
  'in-transit-pickup': 'On the way to pickup',
  'arrived-pickup': 'Arrived at pickup',
  'picked-up': 'Picked up',
  'in-transit-delivery': 'On the way to customer',
  'arrived-delivery': 'Arrived at customer',
  delivered: 'Delivered',
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = getOrderById(id);

  const [currentStatus, setCurrentStatus] = useState(order?.status || 'assigned');

  if (!order) {
    return <EmptyState message="Job not found" />;
  }

  const getCurrentStepIndex = () => {
    const statusMap = {
      assigned: 0,
      'in-transit': 1,
      'in-transit-pickup': 1,
      'arrived-pickup': 2,
      'picked-up': 3,
      'in-transit-delivery': 4,
      'arrived-delivery': 5,
      delivered: 6,
    };
    return statusMap[currentStatus] || 0;
  };

  const canProceedToNext = (nextStatus) => {
    const currentIndex = getCurrentStepIndex();
    const nextIndex = statusSteps.indexOf(nextStatus);
    return nextIndex === currentIndex + 1;
  };

  const handleStatusChange = (newStatus) => {
    if (newStatus === 'delivered') {
      navigate(`/driver/jobs/${order.id}/proof`);
    } else if (newStatus === 'failed') {
      navigate(`/driver/jobs/${order.id}/failed`);
    } else {
      setCurrentStatus(newStatus);
      // UI only - no backend
    }
  };

  const handleNavigation = (type) => {
    const address = type === 'pickup' ? order.pickup.address : order.delivery.address;
    alert(`Opening navigation to: ${address}`);
  };

  const handleCall = (phone) => {
    alert(`Calling ${phone}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton onClick={() => navigate('/driver/home')} sx={{ mr: 1 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Job Details
          </Typography>
          <StatusBadge status={currentStatus} />
        </Box>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {order.trackingId}
          </Typography>
          <MapPlaceholder height={300} />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Pickup Location
          </Typography>
          <Typography variant="body1" gutterBottom>
            {order.pickup.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {order.pickup.address}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Navigation />}
              onClick={() => handleNavigation('pickup')}
              fullWidth
            >
              Navigate
            </Button>
            <Button
              variant="outlined"
              startIcon={<Phone />}
              onClick={() => handleCall(order.pickup.phone)}
            >
              Call
            </Button>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Delivery Location
          </Typography>
          <Typography variant="body1" gutterBottom>
            {order.delivery.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {order.delivery.address}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Navigation />}
              onClick={() => handleNavigation('delivery')}
              fullWidth
            >
              Navigate
            </Button>
            <Button
              variant="outlined"
              startIcon={<Phone />}
              onClick={() => handleCall(order.delivery.phone)}
            >
              Call
            </Button>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Status Progression
          </Typography>
          <Stepper activeStep={getCurrentStepIndex()} orientation="vertical" sx={{ mt: 2 }}>
            {statusSteps.map((status, index) => (
              <Step key={status}>
                <StepLabel>{statusLabels[status]}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Actions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {canProceedToNext('in-transit-pickup') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleStatusChange('in-transit-pickup')}
                sx={{ py: 1.5 }}
              >
                On the way to pickup
              </Button>
            )}

            {canProceedToNext('arrived-pickup') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleStatusChange('arrived-pickup')}
                sx={{ py: 1.5 }}
              >
                Arrived at pickup
              </Button>
            )}

            {canProceedToNext('picked-up') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleStatusChange('picked-up')}
                sx={{ py: 1.5 }}
              >
                Picked up
              </Button>
            )}

            {canProceedToNext('in-transit-delivery') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleStatusChange('in-transit-delivery')}
                sx={{ py: 1.5 }}
              >
                On the way to customer
              </Button>
            )}

            {canProceedToNext('arrived-delivery') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => handleStatusChange('arrived-delivery')}
                sx={{ py: 1.5 }}
              >
                Arrived at customer
              </Button>
            )}

            {canProceedToNext('delivered') && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="success"
                startIcon={<CheckCircle />}
                onClick={() => handleStatusChange('delivered')}
                sx={{ py: 1.5 }}
              >
                Complete delivery
              </Button>
            )}

            <Divider sx={{ my: 1 }} />

            <Button
              variant="outlined"
              size="large"
              color="error"
              fullWidth
              onClick={() => handleStatusChange('failed')}
              sx={{ py: 1.5 }}
            >
              Mark as Failed Delivery
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default JobDetails;
