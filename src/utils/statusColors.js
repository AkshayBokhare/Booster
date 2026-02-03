export const statusColors = {
  pending: '#9e9e9e',      // Grey
  assigned: '#D4A574',     // Warm Tan (replacing blue)
  'in-transit': '#ff9800',  // Orange
  delivered: '#4caf50',     // Green
  failed: '#f44336',        // Red
  late: '#f44336',          // Red
  cancelled: '#757575',     // Dark Grey
};

export const getStatusColor = (status) => {
  return statusColors[status?.toLowerCase()] || statusColors.pending;
};

export const getStatusLabel = (status) => {
  const labels = {
    pending: 'Pending',
    assigned: 'Assigned',
    'in-transit': 'In Transit',
    delivered: 'Delivered',
    failed: 'Failed',
    late: 'Late',
    cancelled: 'Cancelled',
  };
  return labels[status?.toLowerCase()] || status;
};
