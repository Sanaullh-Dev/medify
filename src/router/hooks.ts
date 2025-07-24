import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { routePaths } from './index';
import type { RoutePath } from './index';

// Re-export routePaths for convenience
export { routePaths };

// Navigation hook with type safety
export const useAppNavigation = () => {
  const navigate = useNavigate();
  
  const goTo = (path: RoutePath, options?: { replace?: boolean; state?: any }) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return {
    goTo,
    goBack,
    goForward,
    routePaths,
  };
};

// Location hook with additional utilities
export const useAppLocation = () => {
  const location = useLocation();
  
  const isCurrentPath = (path: RoutePath) => {
    return location.pathname === path;
  };

  const isPathActive = (path: RoutePath) => {
    return location.pathname.startsWith(path);
  };

  return {
    ...location,
    isCurrentPath,
    isPathActive,
  };
};

// Params hook with type safety
export const useAppParams = <T extends Record<string, string | undefined>>() => {
  return useParams<T>();
};

// Route guard hook
export const useRouteGuard = (
  condition: boolean,
  redirectTo: RoutePath = routePaths.home
) => {
  const { goTo } = useAppNavigation();
  
  if (!condition) {
    goTo(redirectTo, { replace: true });
    return false;
  }
  
  return true;
};

// Breadcrumb type
type Breadcrumb = {
  name: string;
  path: string;
};

// Breadcrumb generator
export const generateBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Breadcrumb[] = [{ name: 'Home', path: routePaths.home }];
  
  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({ name, path: currentPath });
  });
  
  return breadcrumbs;
};
