import React, { useEffect } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
// import bcrypt from 'bcryptjs';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';
import { login } from '../../reducers/authentication';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const WithMaterialUI = () => {
  const { responsetData, httpRequest } = useHttpRequest();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      httpRequest('post', '/admin/auth', values);
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  useEffect(() => {
    if (responsetData.data?.accessToken) {
      httpRequest('get', '/admin/auth', null, ['authorization', `Bearer ${responsetData.data?.accessToken}`]);
    }
    if (responsetData.data?.refreshToken) {
      const user = JSON.stringify({ token: responsetData.data.refreshToken });
      const result = localStorage.getItem('auth');

      if (result) {
        localStorage.removeItem('auth');
        localStorage.setItem('auth', user);
      } else {
        localStorage.setItem('auth', user);
      }
    }
    if (responsetData.data?.auth) {
      // const checkHesh = bcrypt.compareSync(formik.values.password, responsetData.data?.auth.password);

      // if (checkHesh) {
      dispatch(login());
      // }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={10} sm={12}>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={10} sm={12}>
          <TextField
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={10} sm={12}>
          <Button
            sx={{ background: '#eb1921', border: 'double white 6px' }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const Authentication = () => (
  <Grid container justifyContent='center' sx={{ marginTop: '150px', marginBottom: '150px' }}>
    <Grid item>
      <WithMaterialUI />
    </Grid>
  </Grid>
);

export default Authentication;
