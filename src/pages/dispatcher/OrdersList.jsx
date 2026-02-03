import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { mockOrders } from '../../mock/orders';
import OrderCard from '../../components/orders/OrderCard';
import OrderFilters from '../../components/orders/OrderFilters';
import EmptyState from '../../components/common/EmptyState';

const OrdersList = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    driver: 'all',
  });

  const filteredOrders = useMemo(() => {
    let filtered = [...mockOrders];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.trackingId.toLowerCase().includes(searchLower) ||
          order.delivery.address.toLowerCase().includes(searchLower) ||
          order.pickup.address.toLowerCase().includes(searchLower)
      );
    }

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    // Driver filter
    if (filters.driver !== 'all') {
      filtered = filtered.filter((order) => order.assignedDriver === filters.driver);
    }

    return filtered;
  }, [filters]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Orders
      </Typography>

      <OrderFilters filters={filters} onFilterChange={setFilters} />

      {filteredOrders.length > 0 ? (
        <Box>
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onClick={() => navigate(`/dispatcher/orders/${order.id}`)}
            />
          ))}
        </Box>
      ) : (
        <EmptyState message="No orders found matching your filters" />
      )}
    </Box>
  );
};

export default OrdersList;
