import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Grid container spacing={2} alignContent="center" justifyContent="center" minHeight="400px">
      <Grid item>
        <Typography variant="h5" fontWeight={900}>
          Էջը գոյություն չունի
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" fontWeight={900}>
          <Link to="/">Վերադառնալ ընդհանուր էջ</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Error;