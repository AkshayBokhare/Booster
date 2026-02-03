import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import DispatcherLayout from '../layouts/DispatcherLayout';
import DriverLayout from '../layouts/DriverLayout';
import Login from '../pages/login/Login';

// Dispatcher pages
import Dashboard from '../pages/dispatcher/Dashboard';
import OrdersList from '../pages/dispatcher/OrdersList';
import OrderDetails from '../pages/dispatcher/OrderDetails';
import LiveMap from '../pages/dispatcher/LiveMap';

// Driver pages
import DriverHome from '../pages/driver/DriverHome';
import JobDetails from '../pages/driver/JobDetails';
import ProofOfDelivery from '../pages/driver/ProofOfDelivery';
import FailedDelivery from '../pages/driver/FailedDelivery';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/dispatcher/*"
        element={
          <ProtectedRoute requiredRole="dispatcher">
            <DispatcherLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<OrdersList />} />
                <Route path="orders/:id" element={<OrderDetails />} />
                <Route path="map" element={<LiveMap />} />
                <Route path="*" element={<Navigate to="/dispatcher/dashboard" replace />} />
              </Routes>
            </DispatcherLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/driver/*"
        element={
          <ProtectedRoute requiredRole="driver">
            <DriverLayout>
              <Routes>
                <Route path="home" element={<DriverHome />} />
                <Route path="jobs/:id" element={<JobDetails />} />
                <Route path="jobs/:id/proof" element={<ProofOfDelivery />} />
                <Route path="jobs/:id/failed" element={<FailedDelivery />} />
                <Route path="*" element={<Navigate to="/driver/home" replace />} />
              </Routes>
            </DriverLayout>
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
