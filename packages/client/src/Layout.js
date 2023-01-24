import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import Footer from './components/footer/index';
import NavBar from './components/nav_bar/index';

const Layout = ({ setAdminButtonState }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: '0px' });
  }, [location]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} justifyContent='center' minHeight='700px'>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer setAdminButtonState={setAdminButtonState} />
      </Grid>
    </Grid>
  );
};

export default Layout;
