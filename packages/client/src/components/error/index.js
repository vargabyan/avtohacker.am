import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} alignContent='center' justifyContent='center' minHeight='400px'>
      <Grid item>
        <Typography variant='h5' fontWeight={900}>
          {t('error.part1')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' fontWeight={900}>
          <Link to='/'>{t('error.part2')}</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
