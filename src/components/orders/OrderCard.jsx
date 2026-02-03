import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { ArrowForward, Person, AccessTime } from '@mui/icons-material';
import StatusBadge from '../common/StatusBadge';
import { getDriverById } from '../../mock/drivers';

const OrderCard = ({ order, onClick }) => {
  const driver = order.assignedDriver
    ? getDriverById(order.assignedDriver)
    : null;

  const isLate = order.sla && new Date() > new Date(order.sla);
  const timeRemaining = order.sla
    ? Math.max(0, Math.floor((new Date(order.sla) - new Date()) / 60000))
    : null;

  return (
    <Card
      sx={{
        mb: 2,
        cursor: onClick ? 'pointer' : 'default',
        borderLeft: isLate ? '4px solid #f44336' : '4px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': onClick ? {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-4px)',
        } : {},
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" component="div">
            {order.trackingId}
          </Typography>
          <StatusBadge status={order.status} />
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary" noWrap>
            {order.delivery.address}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mt: 2,
            flexWrap: 'wrap',
          }}
        >
          {driver && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Person fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {driver.name}
              </Typography>
            </Box>
          )}

          {timeRemaining !== null && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime fontSize="small" color={isLate ? 'error' : 'action'} />
              <Typography
                variant="body2"
                color={isLate ? 'error.main' : 'text.secondary'}
                fontWeight={isLate ? 600 : 400}
              >
                {isLate
                  ? 'Late'
                  : `${Math.floor(timeRemaining / 60)}h ${timeRemaining % 60}m`}
              </Typography>
            </Box>
          )}
        </Box>

        {onClick && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <IconButton size="small" onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}>
              <ArrowForward />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderCard;
