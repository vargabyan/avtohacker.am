import React from "react";
import Calculator from "./components/calculator";
import Footer from "./components/footer/index";
import NavBar from "./components/nav_bar/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/services";
import { Grid } from "@mui/material";
import Authentication from "./components/authentication";
import OurTeam from "./components/our_team";
import GetCallBack from "./components/getCallBack";
import AbouteUs from "./components/abaute_us";

function LANGUAGE_RU() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{  minHeight: "700px"  }}>
            <Routes>
              <Route path="/" element={<Grid item xs={12}><Home /></Grid>} />
              <Route path="aboute_us" element={<Grid item xs={12}><AbouteUs /></Grid>} />
              <Route path="calculate" element={<Grid item xs={12}><Calculator /></Grid>} />
              <Route path="inventory" element={<Grid item xs={12}>inventory</Grid>} />
              <Route path="our_team" element={<Grid item xs={12}><OurTeam /></Grid>} />
              <Route path="services" element={<Grid item xs={12}><Services /></Grid>} />
              <Route path="order_a_call" element={<Grid item xs={12}><GetCallBack /></Grid>} />
              <Route path="adm" element={<Grid item xs={12}><Authentication /></Grid>} />
              <Route element={<Grid item xs={12}>error</Grid>} />
            </Routes>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>{<Footer />}</Grid>
    </Grid>
  );
}

export default LANGUAGE_RU;