import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import GetCallBackStyles from './styledComponent';
import useCustomizedSnackbars from '../../hook/useSnackbar';
import FormCallBack from './FormCallBack';

const GetCallBack = ({ home, m }) => {
  const [snackbarMessage, setSnackbarMessage] = useState({ status: '', message: '' });
  const { t } = useTranslation();
  const { snackbars, handleSnackbarsClick } = useCustomizedSnackbars(snackbarMessage.status, snackbarMessage.message);

  return (
    <GetCallBackStyles>
      <Grid container spacing={2} justifyContent='center' mt={m !== undefined ? m : 2} mb={4}>
        <Grid item xs={12} display={home ? 'block' : 'none'}>
          <Grid container justifyContent='center' spacing={1}>
            <Grid item xs={9}>
              <Typography variant='h4' fontWeight={900}>
                {t('getCallBack.header')}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box width='80px' height='4px' className='redLine' />
            </Grid>
            <Grid item xs={9}>
              <Typography fontWeight={900}>{t('getCallBack.offer')}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} sm={9}>
          <Grid container spacing={2}>
            <Grid item display={{ xs: 'none', md: 'block' }} md={6}>
              <Box className='headerImg' />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCallBack handleSnackbarsClick={handleSnackbarsClick} setSnackbarMessage={setSnackbarMessage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {snackbars}
    </GetCallBackStyles>
  );
};

export default GetCallBack;
