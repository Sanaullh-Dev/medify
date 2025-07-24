# Router Implementation

This project now includes a comprehensive routing solution using React Router v6 with the following features:

## Features

### 1. **createRouter Function**
- Centralized router configuration
- Support for custom basename
- Error boundary integration
- 404 handling

### 2. **Route Structure**
```
/                 -> Home page
/doctors         -> Doctors page
/hospitals       -> Hospitals page
/appointments    -> Appointments page
/*               -> 404 Not Found page
```

### 3. **Components**
- `AppLayout`: Main layout wrapper with header, top bar, and outlet
- `ErrorBoundary`: Handles route-level errors
- `NotFound`: 404 page component

### 4. **Type-Safe Navigation Hooks**
- `useAppNavigation`: Type-safe navigation with helper methods
- `useAppLocation`: Enhanced location hook with path checking utilities
- `useAppParams`: Type-safe params hook
- `useRouteGuard`: Route protection utility

## Usage Examples

### Basic Navigation
```tsx
import { useAppNavigation, routePaths } from '../router/hooks';

function MyComponent() {
  const { goTo, goBack } = useAppNavigation();
  
  const handleNavigation = () => {
    goTo(routePaths.doctors);
  };
  
  return (
    <button onClick={handleNavigation}>
      Go to Doctors
    </button>
  );
}
```

### Route Guards
```tsx
import { useRouteGuard } from '../router/hooks';

function ProtectedComponent() {
  const isAuthenticated = true; // Your auth logic here
  const canAccess = useRouteGuard(isAuthenticated, routePaths.home);
  
  if (!canAccess) return null;
  
  return <div>Protected content</div>;
}
```

### Active Route Detection
```tsx
import { useAppLocation, routePaths } from '../router/hooks';

function Navigation() {
  const { isCurrentPath, isPathActive } = useAppLocation();
  
  return (
    <nav>
      <Link 
        to={routePaths.doctors}
        className={isCurrentPath(routePaths.doctors) ? 'active' : ''}
      >
        Doctors
      </Link>
    </nav>
  );
}
```

### Breadcrumbs
```tsx
import { useAppLocation, generateBreadcrumbs } from '../router/hooks';

function Breadcrumbs() {
  const { pathname } = useAppLocation();
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  return (
    <nav>
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.path}>
          <Link to={crumb.path}>{crumb.name}</Link>
          {index < breadcrumbs.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
}
```

### Custom Router Configuration
```tsx
import { createRouter } from '../router';

// Create router with custom basename for subdirectory deployment
const customRouter = createRouter({
  basename: '/my-app'
});
```

## File Structure
```
src/
├── router/
│   ├── index.tsx      # Main router configuration and createRouter function
│   ├── hooks.ts       # Navigation hooks and utilities
│   └── router.ts      # Re-exports for convenience
├── components/
│   ├── AppLayout.tsx     # Main layout component
│   ├── ErrorBoundary.tsx # Error handling component
│   └── NotFound.tsx      # 404 page component
└── App.tsx            # Updated to use RouterProvider
```

## Benefits

1. **Type Safety**: All routes are type-checked
2. **Centralized Configuration**: Easy to modify routes in one place
3. **Error Handling**: Built-in error boundaries and 404 handling
4. **Developer Experience**: Helpful hooks and utilities
5. **Maintainable**: Clean separation of concerns
6. **Extensible**: Easy to add new routes and features
