import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Divider,
  IconButton,
  Chip,
} from '@mui/material';
import {
  ArrowBack,
  Phone,
  Cancel,
  PersonAdd,
} from '@mui/icons-material';
import { getOrderById } from '../../mock/orders';
import { getDriverById } from '../../mock/drivers';
import StatusBadge from '../../components/common/StatusBadge';
import OrderTimeline from '../../components/orders/OrderTimeline';
import MapPlaceholder from '../../components/map/MapPlaceholder';
import EmptyState from '../../components/common/EmptyState';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = getOrderById(id);
  const driver = order?.assignedDriver ? getDriverById(order.assignedDriver) : null;

  if (!order) {
    return <EmptyState message="Order not found" />;
  }

  const handleReassign = () => {
    alert('Reassign Driver feature (UI only)');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      alert('Cancel Order feature (UI only)');
    }
  };

  const handleCallDriver = () => {
    if (driver) {
      alert(`Calling ${driver.name} at ${driver.phone}`);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/dispatcher/orders')} sx={{ mr: 1 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Order Details
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{order.trackingId}</Typography>
              <StatusBadge status={order.status} size="medium" />
            </Box>

            <OrderTimeline order={order} />

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Pickup Location
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {order.pickup.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.pickup.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.pickup.phone}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Delivery Location
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {order.delivery.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.delivery.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.delivery.phone}
                </Typography>
              </Grid>
            </Grid>

            {order.notes && (
              <>
                <Divider sx={{ my: 3 }} />
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Notes
                </Typography>
                <Typography variant="body2">{order.notes}</Typography>
              </>
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Items
            </Typography>
            {order.items.map((item, index) => (
              <Chip
                key={index}
                label={`${item.name} x${item.quantity}`}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Map View
            </Typography>
            <MapPlaceholder height={400} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Assigned Driver
            </Typography>
            {driver ? (
              <Box>
                <Typography variant="body1" gutterBottom>
                  {driver.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {driver.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {driver.vehicle} - {driver.licensePlate}
                </Typography>
                <Chip
                  label={driver.status}
                  color={driver.status === 'online' ? 'success' : 'default'}
                  size="small"
                  sx={{ mt: 1 }}
                />
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Phone />}
                  onClick={handleCallDriver}
                  sx={{ mt: 2 }}
                >
                  Call Driver
                </Button>
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No driver assigned
              </Typography>
            )}
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<PersonAdd />}
                onClick={handleReassign}
                fullWidth
              >
                Reassign Driver
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Cancel />}
                onClick={handleCancel}
                fullWidth
              >
                Cancel Order
              </Button>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              SLA Deadline
            </Typography>
            <Typography variant="body1">
              {new Date(order.sla).toLocaleString()}
            </Typography>
            {new Date() > new Date(order.sla) && order.status !== 'delivered' && (
              <Chip
                label="Late"
                color="error"
                size="small"
                sx={{ mt: 1 }}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderDetails;
