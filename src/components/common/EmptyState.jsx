import { Box, Typography } from '@mui/material';
import { Inbox } from '@mui/icons-material';

const EmptyState = ({ message = 'No items found', icon: Icon = Inbox }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        minHeight: 200,
      }}
    >
      <Icon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyState;
