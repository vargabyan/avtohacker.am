import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import './icons/style.css';
import { useTranslation } from 'react-i18next';

const Services = ({ home }) => {
  const { t } = useTranslation();
  const dataServiceItem = t('services.content', { returnObjects: true });

  const ServiceItem = () => {
    const array = Object.keys(dataServiceItem);
    return array.map((index) => (
      <Grid item xs={10} sm={6} md={4} key={index}>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12}>
            <Grid container direction='row' spacing={2}>
              <Grid item>
                <span className={dataServiceItem[index].icon} style={{ color: 'red', fontSize: 70 }} />
              </Grid>
              <Grid item xs>
                <Grid container alignContent='center' height='100%'>
                  <Grid item>
                    <Typography fontWeight={900}>{dataServiceItem[index].header}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>{dataServiceItem[index].content}</Typography>
          </Grid>
        </Grid>
      </Grid>
    ));
  };

  return (
    <Grid container spacing={4} justifyContent='center' mb={6} mt={1}>
      <Grid item xs={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' fontWeight={900} align={home ? 'inherit' : 'center'}>
              {t('services.header.part1')}
            </Typography>
          </Grid>
          <Grid item xs={12} display={home ? 'block' : 'none'}>
            <Box width='80px' height='4px' sx={{ background: '#eb1921' }} />
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
  );
};

export default Services;
