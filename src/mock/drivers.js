export const mockDrivers = [
  {
    id: 'driver-001',
    name: 'Mike Driver',
    phone: '+1 234-567-8901',
    vehicle: 'Toyota Camry',
    licensePlate: 'ABC-123',
    status: 'online',
    currentLocation: {
      lat: 40.7128,
      lng: -74.0060,
      address: '123 Main St, New York, NY',
    },
    rating: 4.8,
    totalDeliveries: 245,
  },
  {
    id: 'driver-002',
    name: 'Sarah Driver',
    phone: '+1 234-567-8902',
    vehicle: 'Honda Civic',
    licensePlate: 'XYZ-789',
    status: 'online',
    currentLocation: {
      lat: 40.7580,
      lng: -73.9855,
      address: '456 Broadway, New York, NY',
    },
    rating: 4.9,
    totalDeliveries: 312,
  },
  {
    id: 'driver-003',
    name: 'Tom Driver',
    phone: '+1 234-567-8903',
    vehicle: 'Ford Transit',
    licensePlate: 'DEF-456',
    status: 'offline',
    currentLocation: {
      lat: 40.7505,
      lng: -73.9934,
      address: '789 5th Ave, New York, NY',
    },
    rating: 4.7,
    totalDeliveries: 189,
  },
];

export const getDriverById = (id) => {
  return mockDrivers.find((d) => d.id === id) || null;
};

export const getOnlineDrivers = () => {
  return mockDrivers.filter((d) => d.status === 'online');
};
