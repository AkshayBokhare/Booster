import { Chip } from '@mui/material';
import { getStatusColor, getStatusLabel } from '../../utils/statusColors';

const StatusBadge = ({ status, size = 'small' }) => {
  const bgColor = getStatusColor(status);
  // Use dark text for light colors (warm tan), white for dark colors
  const textColor = status === 'assigned' ? '#5C4033' : 'white';
  
  return (
    <Chip
      label={getStatusLabel(status)}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: 600,
        fontSize: size === 'small' ? '0.75rem' : '0.875rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          transform: 'scale(1.05)',
        },
      }}
      size={size}
    />
  );
};

export default StatusBadge;
