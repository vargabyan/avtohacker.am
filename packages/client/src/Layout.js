import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Footer from './components/footer/index';
import NavBar from './components/nav_bar/index';

const supportLanguage = ['am', 'ru', 'en'];

const Layout = () => {
  const location = useLocation();
  const { lang } = useParams();

  useEffect(() => {
    window.scrollTo({ top: '0px' });
  }, [location]);

  if (!supportLanguage.includes(lang)) {
    return <Navigate to='/404' />;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} justifyContent='center' minHeight='400px'>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
