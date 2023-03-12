import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import IconBsCalculatorFill from './icons';
import ReCaptcha from './ReCaptcha';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  fullname: yup.string().min(3).required(),
  phone: yup.string().min(9).required(),
  totalMoney: yup.string().min(3).required(),
  minMoney: yup.string().min(3).required(),
  maxMoney: yup.string().min(3).required(),
  carModelMarcaBrand: yup.string().min(3).required(),
  comments: yup.string(),
  file: yup.object(),
});

const initialValues = {
  fullname: '',
  phone: '',
  totalMoney: '',
  minMoney: '',
  maxMoney: '',
  carModelMarcaBrand: '',
  comments: '',
  file: '',
};

const FormCallBack = ({ handleSnackbarsClick, setSnackbarMessage }) => {
  const { responsetData, httpRequest } = useHttpRequest();
  const [buttonSubmiteStatus, setButtonSubmiteStatus] = useState(false);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/send-mail', JSON.stringify(values));
      setButtonSubmiteStatus(true);
    },
  });

  const { fullname, phone, totalMoney, minMoney, maxMoney, carModelMarcaBrand, comments } = formik.values;

  const handleUpload = async (e) => {
    const { files } = e.target;
    const file = await files[0];
    const uploadData = new FormData();

    formik.setValues((values) => ({ ...values, file: file.name }));

    uploadData.append('filedata', file, file.name);
    httpRequest('post', '/img', uploadData, {});
  };

  const handleSubmit = () => {
    if (!formik.isValid) {
      setSnackbarMessage({ status: 'warning', message: t('getCallBack.snackbar.part2') });
      handleSnackbarsClick();
    }
  };

  useEffect(() => {
    if (responsetData.data === 'ok') {
      formik.resetForm();
      setSnackbarMessage({ status: 'success', message: t('getCallBack.snackbar.part1') });
      handleSnackbarsClick();
      setButtonSubmiteStatus(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='fullname'
            label={t('getCallBack.fullname')}
            variant='filled'
            size='small'
            value={fullname}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='phone'
            label={t('getCallBack.phone')}
            variant='filled'
            size='small'
            value={phone}
            type='tel'
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='totalMoney'
            label={t('getCallBack.totalMoney')}
            variant='filled'
            size='small'
            value={totalMoney}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='minMoney'
            label={t('getCallBack.minMoney')}
            size='small'
            value={minMoney}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='maxMoney'
            label={t('getCallBack.maxMoney')}
            size='small'
            value={maxMoney}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='carModelMarcaBrand'
            label={t('getCallBack.carModelMarcaBrand')}
            variant='filled'
            size='small'
            value={carModelMarcaBrand}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='comments'
            label={t('getCallBack.comments')}
            multiline
            variant='filled'
            value={comments}
            size='small'
            rows={2}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth component='label' variant='contained' className='attachCalculation'>
            <input onChange={handleUpload} hidden type='file' name='filedata' />
            <Typography>{t('getCallBack.button.attachCalculation')}</Typography>
            <IconBsCalculatorFill />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ReCaptcha />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={buttonSubmiteStatus}
            type='submit'
            onClick={handleSubmit}
            fullWidth
            variant='contained'
            className='orderACall'
          >
            <Typography>{t('getCallBack.button.orderACall')}</Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormCallBack;
