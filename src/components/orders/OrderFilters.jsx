import { Box, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Search } from '@mui/icons-material';
import { mockDrivers } from '../../mock/drivers';

const OrderFilters = ({ filters, onFilterChange }) => {
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'assigned', label: 'Assigned' },
    { value: 'in-transit', label: 'In Transit' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'failed', label: 'Failed' },
    { value: 'late', label: 'Late' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
        flexWrap: 'wrap',
      }}
    >
      <TextField
        placeholder="Search orders..."
        value={filters.search || ''}
        onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
        InputProps={{
          startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
        sx={{ flex: 1, minWidth: 200 }}
        size="small"
      />

      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status || 'all'}
          label="Status"
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Driver</InputLabel>
        <Select
          value={filters.driver || 'all'}
          label="Driver"
          onChange={(e) => onFilterChange({ ...filters, driver: e.target.value })}
        >
          <MenuItem value="all">All Drivers</MenuItem>
          {mockDrivers.map((driver) => (
            <MenuItem key={driver.id} value={driver.id}>
              {driver.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrderFilters;
