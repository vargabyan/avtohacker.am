import React, { useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  auctionFee: yup.string().min(1).required(),
  shippingPrice: yup.string().min(1).required(),
  Insurance: yup.string().min(1).required(),
  serviceFee: yup.string().min(1).required(),
  customsDuty: yup.string().min(1).required(),
  vat: yup.string().min(1).required(),
  ecoTax: yup.string().min(1).required(),
  brokerFee: yup.string().min(1).required(),
});

const itemsNames = {
  part1: ['auctionFee', 'shippingPrice', 'Insurance', 'serviceFee'],
  part2: ['customsDuty', 'vat', 'ecoTax', 'brokerFee'],
};

const AdministratorSettingsResults = () => {
  const { t } = useTranslation();
  const { responsetData, httpRequest } = useHttpRequest();

  const formik = useFormik({
    initialValues: {
      auctionFee: '',
      shippingPrice: '',
      Insurance: '',
      serviceFee: '',
      customsDuty: '',
      vat: '',
      ecoTax: '',
      brokerFee: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-undef
      httpRequest('post', '/admin/calculator-settings-result', values);
    },
  });
  useEffect(() => {
    httpRequest('get', '/admin/calculator-settings-result');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data) {
      formik.setValues(responsetData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData]);

  return (
    <Grid container justifyContent='center' spacing={4}>
      <Grid item xs={12} sx={{ mb: { md: '60px' } }} display={responsetData.data ? 'block' : 'none'}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                {itemsNames.part1.map((index) => (
                  <Grid item xs={12} key={index}>
                    <TextField
                      fullWidth
                      value={formik.values[index]}
                      type='number'
                      size='small'
                      name={index}
                      label={t(`calculateAdminSettings.calculatorResult.${index}`)}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                {itemsNames.part2.map((index) => (
                  <Grid item xs={12} key={index}>
                    <TextField
                      fullWidth
                      value={formik.values[index]}
                      type='number'
                      size='small'
                      name={index}
                      label={t(`calculateAdminSettings.calculatorResult.${index}`)}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' className='buttonSend' variant='outlined' fullWidth>
                {t('calculateAdminSettings.calculatorParams.button.save')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} display={!responsetData.data ? 'block' : 'none'}>
        <Skeleton variant='rectangular' animation='pulse' height={260} />
      </Grid>
    </Grid>
  );
};

export default AdministratorSettingsResults;
