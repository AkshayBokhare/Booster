import { Box, Grid, Card, CardContent, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import {
  Assignment,
  CheckCircle,
  LocalShipping,
  Warning,
  Add,
  PersonAdd,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { mockOrders } from '../../mock/orders';
import StatusBadge from '../../components/common/StatusBadge';
import MapPlaceholder from '../../components/map/MapPlaceholder';

const KPICard = ({ title, value, icon: Icon, color }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography color="text.secondary" gutterBottom variant="body2" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: '#5C4033' }}>
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            backgroundColor: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ fontSize: 40, color }} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const navigate = useNavigate();

  const totalOrders = mockOrders.length;
  const completedOrders = mockOrders.filter((o) => o.status === 'delivered').length;
  const inTransitOrders = mockOrders.filter((o) => o.status === 'in-transit').length;
  const lateOrders = mockOrders.filter((o) => {
    if (o.status === 'late') return true;
    if (o.sla && new Date() > new Date(o.sla) && o.status !== 'delivered' && o.status !== 'failed') {
      return true;
    }
    return false;
  }).length;

  const lateDeliveries = mockOrders.filter((o) => {
    if (o.status === 'late') return true;
    if (o.sla && new Date() > new Date(o.sla) && o.status !== 'delivered' && o.status !== 'failed') {
      return true;
    }
    return false;
  }).slice(0, 5);

  const failedDeliveries = mockOrders.filter((o) => o.status === 'failed').slice(0, 5);

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Total Orders"
            value={totalOrders}
            icon={Assignment}
            color="#D4A574"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Completed"
            value={completedOrders}
            icon={CheckCircle}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="In Transit"
            value={inTransitOrders}
            icon={LocalShipping}
            color="#ff9800"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Late"
            value={lateOrders}
            icon={Warning}
            color="#f44336"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper 
            sx={{ 
              p: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#5C4033' }}>Late Deliveries</Typography>
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate('/dispatcher/orders')}
                sx={{ 
                  backgroundColor: '#ff5a36',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#e54a2a',
                  },
                }}
              >
                View All
              </Button>
            </Box>
            {lateDeliveries.length > 0 ? (
              <List>
                {lateDeliveries.map((order) => (
                  <ListItem
                    key={order.id}
                    button
                    onClick={() => navigate(`/dispatcher/orders/${order.id}`)}
                  >
                    <ListItemText
                      primary={order.trackingId}
                      secondary={order.delivery.address}
                    />
                    <StatusBadge status={order.status} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 2 }}>
                No late deliveries
              </Typography>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper 
            sx={{ 
              p: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#5C4033' }}>Failed Deliveries</Typography>
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate('/dispatcher/orders')}
                sx={{ 
                  backgroundColor: '#ff5a36',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#e54a2a',
                  },
                }}
              >
                View All
              </Button>
            </Box>
            {failedDeliveries.length > 0 ? (
              <List>
                {failedDeliveries.map((order) => (
                  <ListItem
                    key={order.id}
                    button
                    onClick={() => navigate(`/dispatcher/orders/${order.id}`)}
                  >
                    <ListItemText
                      primary={order.trackingId}
                      secondary={order.delivery.address}
                    />
                    <StatusBadge status={order.status} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 2 }}>
                No failed deliveries
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => {
              // UI only - no backend
              alert('Create Order feature (UI only)');
            }}
          >
            Create Order
          </Button>
          <Button
            variant="outlined"
            startIcon={<PersonAdd />}
            onClick={() => {
              // UI only - no backend
              alert('Assign Driver feature (UI only)');
            }}
          >
            Assign Driver
          </Button>
        </Box>
        <Paper 
          sx={{ 
            p: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
            },
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#5C4033' }}>
            Live Map Preview
          </Typography>
          <MapPlaceholder height={300} />
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
