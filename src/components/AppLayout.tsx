import { Outlet } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import { Header, TopBar } from '../components';
import { Footer } from '../components/footer';
import "../App.css";

function AppLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <TopBar />
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default AppLayout;
