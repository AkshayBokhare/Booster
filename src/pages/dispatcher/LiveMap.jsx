import { Box, Typography, Paper } from '@mui/material';
import MapPlaceholder from '../../components/map/MapPlaceholder';
import { mockOrders } from '../../mock/orders';
import { mockDrivers } from '../../mock/drivers';
import StatusBadge from '../../components/common/StatusBadge';

const LiveMap = () => {
  const activeOrders = mockOrders.filter((o) =>
    ['assigned', 'in-transit'].includes(o.status)
  );
  const onlineDrivers = mockDrivers.filter((d) => d.status === 'online');

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Live Map
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Active Orders: {activeOrders.length}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Online Drivers: {onlineDrivers.length}
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }}>
        <MapPlaceholder height={500} />
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Active Deliveries
        </Typography>
        {activeOrders.length > 0 ? (
          <Box>
            {activeOrders.map((order) => (
              <Box
                key={order.id}
                sx={{
                  p: 2,
                  mb: 1,
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="body1">{order.trackingId}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.delivery.address}
                  </Typography>
                </Box>
                <StatusBadge status={order.status} />
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No active deliveries
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default LiveMap;
