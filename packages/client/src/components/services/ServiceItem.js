import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ServiceItem = () => {
  const { t } = useTranslation();
  const dataServiceItem = t('services.content', { returnObjects: true });
  const array = Object.keys(dataServiceItem);

  return array.map((index) => (
    <Grid item xs={10} sm={6} md={4} key={index}>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item xs={12}>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <span className={`${dataServiceItem[index].icon} icons`} />
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

export default ServiceItem;
