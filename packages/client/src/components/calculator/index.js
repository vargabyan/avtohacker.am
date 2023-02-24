import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CalculatorStyle from './styledComponent';
import AdministratorSettingsCalculate from './administratorSettingsCalculate';
import CalculatorParmas from './calculatorParmas/CalculatorParmas';
import CalculatorResults from './calculatorParmas/CalculatorResults';

const Calculator = () => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const [dataForCalculatorResultsState, setDataForCalculatorResultsState] = useState();
  const { t } = useTranslation();

  return (
    <CalculatorStyle>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={10} md={10} sx={{ display: auth ? 'block' : 'none' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} mb={2}>
              <Grid container justifyContent='center'>
                <Grid item>
                  <Typography>{t('calculate.header')}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10} lg={12}>
              <AdministratorSettingsCalculate />
            </Grid>
          </Grid>
        </Grid>
        <Grid className='calculator_parmas' item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item xs={10} md={12}>
              <CalculatorParmas setDataForCalculatorResultsState={setDataForCalculatorResultsState} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          md={12}
          sx={{
            display: dataForCalculatorResultsState ? 'block' : 'none',
          }}
        >
          <CalculatorResults dataForCalculatorResultsState={dataForCalculatorResultsState} />
        </Grid>
      </Grid>
    </CalculatorStyle>
  );
};

export default Calculator;
