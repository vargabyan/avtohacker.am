import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import './icons_icoMoon/style.css';
import { useTranslation } from 'react-i18next';
import ServiceItem from './ServiceItem';
import ServicesStyles from './StyledComponent';

const Services = ({ home }) => {
  const { t } = useTranslation();

  return (
    <ServicesStyles>
      <Grid container spacing={4} justifyContent='center' mb={6} mt={1}>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4' fontWeight={900} align={home ? 'inherit' : 'center'}>
                {t('services.header.part1')}
              </Typography>
            </Grid>
            <Grid item xs={12} display={home ? 'block' : 'none'}>
              <Box width='80px' height='4px' className='redLine' />
            </Grid>
            <Grid item xs={12} display={home ? 'block' : 'none'}>
              <Typography fontWeight={900}>{t('services.header.part2')}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={4} justifyContent='center'>
            <ServiceItem />
          </Grid>
        </Grid>
      </Grid>
    </ServicesStyles>
  );
};

export default Services;
