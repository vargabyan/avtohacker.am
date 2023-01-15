import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CalculatorStyle } from "./styledComponent";
import { useSelector } from "react-redux";
import AdministratorSettingsCalculate from "./AdministratorSettingsCalculate";
import AdministratorSettingsResults from "./AdministratorSettingsResults";
import CalculatorParmas from "./CalculatorParmas";
import CalculatorResults from "./CalculatorResults";

function Calculator() {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const [dataForCalculatorResultsState, setDataForCalculatorResultsState] = useState([])

  return (
    <CalculatorStyle>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} md={10} sx={{ display: auth ? "block" : "none" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} mb={2}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography>
                    Ադմինիստրատորի կարգավորումներ
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <AdministratorSettingsCalculate />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AdministratorSettingsResults />
            </Grid>
          </Grid>
        </Grid>
        <Grid className="calculator_parmas" item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={10} md={12}>
              <CalculatorParmas setDataForCalculatorResultsState={setDataForCalculatorResultsState} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={12} sx={{ display: dataForCalculatorResultsState.length ? "block" : "none" }}>
          <CalculatorResults dataForCalculatorResultsState={dataForCalculatorResultsState} />
        </Grid>
      </Grid>
    </CalculatorStyle>
  );
}

export default Calculator;
