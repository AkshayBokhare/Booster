import { Box, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { getStatusLabel } from '../../utils/statusColors';

const statusSteps = ['pending', 'assigned', 'in-transit', 'delivered'];

const OrderTimeline = ({ order }) => {
  const currentStepIndex = statusSteps.findIndex(
    (s) => s === order.status
  );

  const getStepStatus = (stepIndex) => {
    if (stepIndex < currentStepIndex) return 'completed';
    if (stepIndex === currentStepIndex) return 'active';
    return 'inactive';
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Status Timeline
      </Typography>
      <Stepper activeStep={currentStepIndex} orientation="vertical">
        {statusSteps.map((status, index) => {
          const stepStatus = getStepStatus(index);
          const stepData = order.timeline?.find((t) => t.status === status);

          return (
            <Step key={status} completed={stepStatus === 'completed'}>
              <StepLabel
                icon={
                  stepStatus === 'completed' ? (
                    <CheckCircle color="success" />
                  ) : (
                    <RadioButtonUnchecked
                      sx={{
                        color: stepStatus === 'active' ? '#D4A574' : undefined,
                      }}
                      color={stepStatus === 'active' ? undefined : 'disabled'}
                    />
                  )
                }
              >
                <Box>
                  <Typography variant="body2">
                    {getStatusLabel(status)}
                  </Typography>
                  {stepData && (
                    <Typography variant="caption" color="text.secondary">
                      {new Date(stepData.timestamp).toLocaleString()}
                    </Typography>
                  )}
                </Box>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default OrderTimeline;
