import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Home, Doctors, Hospitals, Appointments, MyBookings } from '../pages';
import AppLayout from '../components/AppLayout';
import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../components/NotFound';

// Define route configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'find-doctors',
        element: <Doctors />,
      },
      {
        path: 'hospitals',
        element: <Hospitals />,
      },
      {
        path: 'appointments',
        element: <Appointments />,
      },
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

// Router configuration options
interface RouterConfig {
  basename?: string;
}

// Create router function with optional configuration
export const createRouter = (config?: RouterConfig) => {
  return createBrowserRouter(routes, {
    basename: config?.basename,
  });
};

// Export router instance with default configuration
export const router = createRouter();

// Export individual routes for testing or other purposes
export { routes };

// Export route-related utilities
export const routePaths = {
  home: '/',
  findDoctors: '/find-doctors',
  doctors: '/doctors',
  hospitals: '/hospitals',
  appointments: '/appointments',
  myBookings: '/my-bookings',
} as const;

// Type for route paths
export type RoutePath = typeof routePaths[keyof typeof routePaths];
