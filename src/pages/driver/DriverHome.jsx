import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { LocalShipping, AccessTime, LocationOn } from '@mui/icons-material';
import { useAuth } from '../../auth/AuthContext';
import { getActiveOrdersForDriver } from '../../mock/orders';
import EmptyState from '../../components/common/EmptyState';
import StatusBadge from '../../components/common/StatusBadge';

const DriverHome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);

  const activeOrders = getActiveOrdersForDriver(user?.driverId || '');

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
    // UI only - no backend
  };

  const getTimeRemaining = (sla) => {
    if (!sla) return null;
    const now = new Date();
    const deadline = new Date(sla);
    const diff = deadline - now;
    if (diff < 0) return 'Late';
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Paper
          sx={{
            p: 3,
            mb: 3,
            bgcolor: isOnline ? 'success.light' : 'grey.300',
            textAlign: 'center',
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={isOnline}
                onChange={handleToggleOnline}
                size="large"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'success.main',
                  },
                }}
              />
            }
            label={
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {isOnline ? 'ONLINE' : 'OFFLINE'}
              </Typography>
            }
            sx={{ m: 0 }}
          />
        </Paper>

        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Active Deliveries ({activeOrders.length})
        </Typography>

        {activeOrders.length > 0 ? (
          <Box>
            {activeOrders.map((order) => {
              const timeRemaining = getTimeRemaining(order.sla);
              return (
                <Card
                  key={order.id}
                  sx={{
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(255, 90, 54, 0.3)',
                    },
                  }}
                  onClick={() => navigate(`/driver/jobs/${order.id}`)}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6">{order.trackingId}</Typography>
                      <StatusBadge status={order.status} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 1.5,
                        }}
                      >
                        <LocationOn
                          sx={{ mr: 1, mt: 0.5, color: '#D4A574' }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Pickup
                          </Typography>
                          <Typography variant="body2">
                            {order.pickup.address}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <LocationOn
                          sx={{ mr: 1, mt: 0.5, color: 'success.main' }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Delivery
                          </Typography>
                          <Typography variant="body2">
                            {order.delivery.address}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {timeRemaining && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <AccessTime
                          fontSize="small"
                          color={timeRemaining === 'Late' ? 'error' : 'action'}
                        />
                        <Typography
                          variant="body2"
                          color={timeRemaining === 'Late' ? 'error.main' : 'text.secondary'}
                          fontWeight={timeRemaining === 'Late' ? 600 : 400}
                        >
                          SLA: {timeRemaining}
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        ) : (
          <EmptyState
            message="No active deliveries"
            icon={LocalShipping}
          />
        )}
      </Box>
    </Container>
  );
};

export default DriverHome;
