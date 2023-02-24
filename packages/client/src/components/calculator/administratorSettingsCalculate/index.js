import React from 'react';
import { Grid } from '@mui/material';
import { AdministratorSettingsCalculatStyles } from './styledComponent';
import AuctionsSettings from './AuctionsSettings';
import SelectLocation from './SelectLocation';
import CostAccordingToCharacteristics from './costAccordingToCharacteristics';
import AdministratorSettingsResults from './AdministratorSettingsResults';

const AdministratorSettingsCalculat = () => (
  <AdministratorSettingsCalculatStyles>
    <Grid container spacing={4}>
      {/* <Grid item xs={12} sx={{ mb: { lg: '60px' } }}>
        <Grid container spacing={2}> */}
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AuctionsSettings />
          </Grid>
          <Grid item xs={12}>
            <SelectLocation />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CostAccordingToCharacteristics />
      </Grid>
      <Grid item xs={12}>
        <AdministratorSettingsResults />
      </Grid>
    </Grid>
    {/* </Grid>
  // </Grid> */}
  </AdministratorSettingsCalculatStyles>
);

export default AdministratorSettingsCalculat;
