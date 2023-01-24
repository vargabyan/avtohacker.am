import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdministratorSettingsResaultStyles } from './styledComponent';
// import {
//   text_calculator
// } from "./TextContent";

const AdministratorSettingsResults = () => {
  const firstBlock = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <Button className='buttonSend' variant='outlined' fullWidth>
          save
        </Button>
      </Grid>
    </Grid>
  );

  const secondBlock = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type='number' size='small' label='index' />
      </Grid>
      <Grid item xs={12}>
        <Button className='buttonSend' variant='outlined' fullWidth>
          save
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <AdministratorSettingsResaultStyles>
      <Grid container justifyContent='center' spacing={4}>
        <Grid item xs={12} sx={{ mb: { md: '60px' } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {firstBlock}
            </Grid>
            <Grid item xs={12} sm={6}>
              {secondBlock}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AdministratorSettingsResaultStyles>
  );
};

export default AdministratorSettingsResults;
