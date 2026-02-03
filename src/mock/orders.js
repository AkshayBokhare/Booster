export const mockOrders = [
  {
    id: 'ORD-001',
    trackingId: 'TRK-2024-001',
    status: 'in-transit',
    priority: 'high',
    createdAt: new Date('2024-01-15T09:00:00'),
    sla: new Date('2024-01-15T14:00:00'),
    pickup: {
      name: 'Warehouse A',
      address: '123 Industrial Blvd, Brooklyn, NY 11201',
      phone: '+1 234-567-8900',
      lat: 40.6782,
      lng: -73.9442,
    },
    delivery: {
      name: 'John Smith',
      address: '456 Park Ave, Manhattan, NY 10022',
      phone: '+1 234-567-8901',
      lat: 40.7580,
      lng: -73.9855,
    },
    assignedDriver: 'driver-001',
    items: [
      { name: 'Package A', quantity: 2 },
      { name: 'Package B', quantity: 1 },
    ],
    notes: 'Fragile items',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-15T09:00:00') },
      { status: 'assigned', timestamp: new Date('2024-01-15T09:15:00') },
      { status: 'in-transit', timestamp: new Date('2024-01-15T10:30:00') },
    ],
  },
  {
    id: 'ORD-002',
    trackingId: 'TRK-2024-002',
    status: 'assigned',
    priority: 'medium',
    createdAt: new Date('2024-01-15T10:00:00'),
    sla: new Date('2024-01-15T16:00:00'),
    pickup: {
      name: 'Warehouse B',
      address: '789 Commerce St, Queens, NY 11101',
      phone: '+1 234-567-8902',
      lat: 40.7282,
      lng: -73.7949,
    },
    delivery: {
      name: 'Jane Doe',
      address: '321 Lexington Ave, Manhattan, NY 10016',
      phone: '+1 234-567-8903',
      lat: 40.7505,
      lng: -73.9934,
    },
    assignedDriver: 'driver-002',
    items: [
      { name: 'Package C', quantity: 1 },
    ],
    notes: '',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-15T10:00:00') },
      { status: 'assigned', timestamp: new Date('2024-01-15T10:20:00') },
    ],
  },
  {
    id: 'ORD-003',
    trackingId: 'TRK-2024-003',
    status: 'delivered',
    priority: 'low',
    createdAt: new Date('2024-01-14T08:00:00'),
    sla: new Date('2024-01-14T13:00:00'),
    deliveredAt: new Date('2024-01-14T12:30:00'),
    pickup: {
      name: 'Warehouse A',
      address: '123 Industrial Blvd, Brooklyn, NY 11201',
      phone: '+1 234-567-8900',
      lat: 40.6782,
      lng: -73.9442,
    },
    delivery: {
      name: 'Bob Johnson',
      address: '654 Madison Ave, Manhattan, NY 10021',
      phone: '+1 234-567-8904',
      lat: 40.7614,
      lng: -73.9776,
    },
    assignedDriver: 'driver-001',
    items: [
      { name: 'Package D', quantity: 3 },
    ],
    notes: '',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-14T08:00:00') },
      { status: 'assigned', timestamp: new Date('2024-01-14T08:15:00') },
      { status: 'in-transit', timestamp: new Date('2024-01-14T09:00:00') },
      { status: 'delivered', timestamp: new Date('2024-01-14T12:30:00') },
    ],
  },
  {
    id: 'ORD-004',
    trackingId: 'TRK-2024-004',
    status: 'late',
    priority: 'high',
    createdAt: new Date('2024-01-15T07:00:00'),
    sla: new Date('2024-01-15T11:00:00'),
    pickup: {
      name: 'Warehouse C',
      address: '321 Factory Rd, Bronx, NY 10451',
      phone: '+1 234-567-8905',
      lat: 40.8448,
      lng: -73.8648,
    },
    delivery: {
      name: 'Alice Brown',
      address: '987 Central Park West, Manhattan, NY 10025',
      phone: '+1 234-567-8906',
      lat: 40.7851,
      lng: -73.9683,
    },
    assignedDriver: 'driver-002',
    items: [
      { name: 'Package E', quantity: 2 },
      { name: 'Package F', quantity: 1 },
    ],
    notes: 'Urgent delivery',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-15T07:00:00') },
      { status: 'assigned', timestamp: new Date('2024-01-15T07:10:00') },
      { status: 'in-transit', timestamp: new Date('2024-01-15T08:00:00') },
    ],
  },
  {
    id: 'ORD-005',
    trackingId: 'TRK-2024-005',
    status: 'pending',
    priority: 'medium',
    createdAt: new Date('2024-01-15T11:00:00'),
    sla: new Date('2024-01-15T18:00:00'),
    pickup: {
      name: 'Warehouse A',
      address: '123 Industrial Blvd, Brooklyn, NY 11201',
      phone: '+1 234-567-8900',
      lat: 40.6782,
      lng: -73.9442,
    },
    delivery: {
      name: 'Charlie Wilson',
      address: '147 Wall St, Manhattan, NY 10005',
      phone: '+1 234-567-8907',
      lat: 40.7074,
      lng: -74.0113,
    },
    assignedDriver: null,
    items: [
      { name: 'Package G', quantity: 1 },
    ],
    notes: '',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-15T11:00:00') },
    ],
  },
  {
    id: 'ORD-006',
    trackingId: 'TRK-2024-006',
    status: 'failed',
    priority: 'high',
    createdAt: new Date('2024-01-14T10:00:00'),
    sla: new Date('2024-01-14T15:00:00'),
    failedAt: new Date('2024-01-14T14:30:00'),
    failureReason: 'Recipient not available',
    pickup: {
      name: 'Warehouse B',
      address: '789 Commerce St, Queens, NY 11101',
      phone: '+1 234-567-8902',
      lat: 40.7282,
      lng: -73.7949,
    },
    delivery: {
      name: 'David Lee',
      address: '258 Broadway, Manhattan, NY 10007',
      phone: '+1 234-567-8908',
      lat: 40.7128,
      lng: -74.0060,
    },
    assignedDriver: 'driver-001',
    items: [
      { name: 'Package H', quantity: 1 },
    ],
    notes: '',
    timeline: [
      { status: 'pending', timestamp: new Date('2024-01-14T10:00:00') },
      { status: 'assigned', timestamp: new Date('2024-01-14T10:15:00') },
      { status: 'in-transit', timestamp: new Date('2024-01-14T11:00:00') },
      { status: 'failed', timestamp: new Date('2024-01-14T14:30:00') },
    ],
  },
];

export const getOrderById = (id) => {
  return mockOrders.find((o) => o.id === id) || null;
};

export const getOrdersByDriver = (driverId) => {
  return mockOrders.filter((o) => o.assignedDriver === driverId);
};

export const getActiveOrdersForDriver = (driverId) => {
  return mockOrders.filter(
    (o) =>
      o.assignedDriver === driverId &&
      ['assigned', 'in-transit'].includes(o.status)
  );
};

export const getOrdersByStatus = (status) => {
  return mockOrders.filter((o) => o.status === status);
};
