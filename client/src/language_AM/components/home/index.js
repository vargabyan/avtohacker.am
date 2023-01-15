import React from "react";
import Banner from "../banner";
import Services from "../services";
import GetCallBack from "../getCallBack";
import { Grid } from "@mui/material";
import Showcase from "../showcase";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Showcase />
      </Grid>
      <Grid item xs={12}>
        <Services home />
      </Grid>
      <Grid item xs={12}>
        <GetCallBack home m={0}/>
      </Grid>
    </Grid>
  );
}

export default Home;
