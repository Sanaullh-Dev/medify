// Main router exports
export * from './index';
export * from './hooks';

// Re-export React Router utilities for convenience
export {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  Outlet,
  Link,
  NavLink,
  Navigate,
} from 'react-router-dom';
