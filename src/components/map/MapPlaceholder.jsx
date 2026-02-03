import { Box, Typography } from '@mui/material';
import { Map } from '@mui/icons-material';

const MapPlaceholder = ({ height = 300, showLabel = true }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        border: '1px solid #bdbdbd',
      }}
    >
      <Map sx={{ fontSize: 64, color: 'text.secondary', mb: 1 }} />
      {showLabel && (
        <Typography variant="body2" color="text.secondary">
          Map View (Placeholder)
        </Typography>
      )}
    </Box>
  );
};

export default MapPlaceholder;
