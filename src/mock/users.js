export const mockUsers = [
  {
    id: '1',
    email: 'dispatcher@booster.com',
    password: 'dispatcher123',
    role: 'dispatcher',
    name: 'John Dispatcher',
  },
  {
    id: '2',
    email: 'driver1@booster.com',
    password: 'driver123',
    role: 'driver',
    name: 'Mike Driver',
    driverId: 'driver-001',
  },
  {
    id: '3',
    email: 'driver2@booster.com',
    password: 'driver123',
    role: 'driver',
    name: 'Sarah Driver',
    driverId: 'driver-002',
  },
];

export const loginUser = (email, password) => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  return user || null;
};
