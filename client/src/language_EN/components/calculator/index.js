import React from "react";
import { Grid, Typography } from "@mui/material";
import { CalculatorStyle } from "./styledComponent";
import { useSelector } from "react-redux";
import AdministratorSettingsCalculate from "./AdministratorSettingsCalculate";
import AdministratorSettingsResults from "./AdministratorSettingsResults";
import CalculatorParmas from "./CalculatorParmas";
import CalculatorResults from "./CalculatorResults";
import {
  text_content_AdministratorSettings_AM,
  text_content_AdministratorSettings_EN,
  text_content_AdministratorSettings_RU,
} from "./TextContent";

function Calculator() {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const languige = useSelector((state) => state.languageReducer.value);

  return (
    <CalculatorStyle>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} md={10} sx={{ display: auth ? "block" : "none" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} mb={2}>
              <Grid container  justifyContent="center">
                <Grid item>
                  <Typography>
                    {languige === "EN"
                      ? text_content_AdministratorSettings_EN.header
                      : languige === "RU"
                      ? text_content_AdministratorSettings_RU.header
                      : text_content_AdministratorSettings_AM.header}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <AdministratorSettingsCalculate languige={languige} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AdministratorSettingsResults languige={languige} />
            </Grid>
          </Grid>
        </Grid>
        <Grid className="calculator_parmas" item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={10} md={12}>
              <CalculatorParmas languige={languige} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={12} sx={{ display: true ? "block" : "none" }}>
          <CalculatorResults languige={languige} />
        </Grid>
      </Grid>
    </CalculatorStyle>
  );
}

export default Calculator;
