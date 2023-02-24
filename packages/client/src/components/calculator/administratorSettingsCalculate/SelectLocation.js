import React, { useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  price_sedan: yup.string().min(1).required(),
  price_suv: yup.string().min(1).required(),
  price_pickup: yup.string().min(1).required(),
  price_motorcycle: yup.string().min(1).required(),
  name: yup.string().min(1).required(),
});

const initialValues = {
  price_sedan: '',
  price_suv: '',
  price_pickup: '',
  price_motorcycle: '',
  name: '',
};

const SelectLocation = () => {
  const [selectLocation, setSetselectLocation] = useState([]);
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-select-Location-settings', values);
    },
  });

  const handleChangeSelectLocation = (_e, value) => {
    const hasCoincidences = selectLocation.filter((index) => index.name === value);

    if (hasCoincidences.length) {
      formik.setValues(() => ({
        ...hasCoincidences[0],
        name: value,
      }));
    } else {
      formik.setValues((values) => ({
        ...values,
        name: value,
      }));
    }
  };

  const handleClickDelete = (inputName) => {
    httpRequest('delete', '/admin/calculator-select-Location-settings', { name: inputName });
    formik.resetForm();
  };

  useEffect(() => {
    httpRequest('get', '/admin/calculator-select-Location-settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data) {
      setSetselectLocation(responsetData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData]);

  return (
    <Grid container>
      <Grid item xs={12} display={responsetData.data ? 'block' : 'none'}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                value={formik.values.name}
                name='selectLocation'
                freeSolo
                size='small'
                options={selectLocation.map((elem) => elem.name)}
                onChange={handleChangeSelectLocation}
                onInputChange={handleChangeSelectLocation}
                renderInput={(params) => (
                  <TextField label={t('calculateAdminSettings.calculatorParams.selectLocation')} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} key='price_sedan'>
              <TextField
                fullWidth
                name='price_sedan'
                type='number'
                size='small'
                label={t('calculateAdminSettings.calculatorParams.selectCarType.1')}
                value={formik.values.price_sedan}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} key='price_suv'>
              <TextField
                fullWidth
                name='price_suv'
                type='number'
                size='small'
                label={t('calculateAdminSettings.calculatorParams.selectCarType.3')}
                value={formik.values.price_suv}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} key='price_pickup'>
              <TextField
                fullWidth
                name='price_pickup'
                type='number'
                size='small'
                label={t('calculateAdminSettings.calculatorParams.selectCarType.2')}
                value={formik.values.price_pickup}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} key='price_motorcycle'>
              <TextField
                fullWidth
                name='price_motorcycle'
                type='number'
                size='small'
                label={t('calculateAdminSettings.calculatorParams.selectCarType.0')}
                value={formik.values.price_motorcycle}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' className='buttonSend' variant='outlined' fullWidth>
                {t('calculateAdminSettings.calculatorParams.button.save')}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => handleClickDelete(formik.values.name)}
                className='buttonSend'
                variant='outlined'
                fullWidth
              >
                {t('calculateAdminSettings.calculatorParams.button.delete')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} display={!responsetData.data ? 'block' : 'none'}>
        <Skeleton variant='rectangular' animation='pulse' height={312} />
      </Grid>
    </Grid>
  );
};

export default SelectLocation;
