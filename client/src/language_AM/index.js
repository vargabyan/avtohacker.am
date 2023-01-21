import React, { useEffect, useState } from 'react';
import {
  Outlet, Routes, Route, useLocation,
} from 'react-router-dom';
import { Grid } from '@mui/material';
import Calculator from './components/calculator';
import Footer from './components/footer/index';
import NavBar from './components/nav_bar/index';
import Home from './components/home';
import Services from './components/services';
import Authentication from './components/authentication';
import OurTeam from './components/our_team';
import GetCallBack from './components/getCallBack';
import AbouteUs from './components/abaute_us';
import Error from '../error';
import Goods from './components/goods';
import ShowProduct from './components/show_product';

function Latout({ setAdminButtonState }) {
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
        <Grid container spacing={4}>
          <Grid item xs={12} minHeight="700px">
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}><Footer setAdminButtonState={setAdminButtonState} /></Grid>
    </Grid>
  );
}

function LANGUAGE_AN() {
  const [adminButtonState, setAdminButtonState] = useState(false);
  const adminButtonAndPage = adminButtonState ? <Authentication /> : <Home />;

  return (
    <Routes>
      <Route path="/" element={<Grid item xs={12}><Latout setAdminButtonState={setAdminButtonState} /></Grid>}>
        <Route index element={<Grid item xs={12}><Home /></Grid>} />
        <Route path="aboute_us" element={<Grid item xs={12}><AbouteUs /></Grid>} />
        <Route path="calculate" element={<Grid item xs={12}><Calculator /></Grid>} />
        <Route path="inventory" element={<Grid item xs={12}><Goods /></Grid>} />
        <Route path="show_product" element={<Grid item xs={12}><ShowProduct /></Grid>} />
        <Route path="our_team" element={<Grid item xs={12}><OurTeam /></Grid>} />
        <Route path="services" element={<Grid item xs={12}><Services /></Grid>} />
        <Route path="order_a_call" element={<Grid item xs={12}><GetCallBack /></Grid>} />
        <Route path="adm" element={<Grid item xs={12}>{adminButtonAndPage}</Grid>} />
        <Route path="*" element={<Grid item xs={12}><Error /></Grid>} />
      </Route>
    </Routes>
  );
}

export default LANGUAGE_AN;
