import React, { useState } from 'react';
import {
  Grid, Typography, Button, TextField, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { EmployeeContactDetailsStyles } from './indexStyles';
import { IconIoIosCall, IconMdMail } from './icons';
import { data } from './data';

function AddEmployeeContactDetails({ auth }) {
  const [switchState, setSwitchState] = useState(false);
  const validationSchema = yup.object({
    address: yup
      .string('Enter your address')
      .min(2, 'address should be of minimum 1 characters length')
      .required('address is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup
      .string('Enter your phone')
      .min(10, 'phone should be of minimum 10 characters length')
      .required('phone is required'),
  });

  const formik = useFormik({
    initialValues: {
      address: '',
      email: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handelClick = (param) => {
    setSwitchState(!switchState);

    if (param === 'cancel') {
      formik.values.address = '';
      formik.values.email = '';
      formik.values.phone = '';
      formik.errors.address = '';
      formik.errors.email = '';
      formik.errors.phone = '';
      formik.touched.address = '';
      formik.touched.email = '';
      formik.touched.phone = '';
    }
  };

  const formForAdd = (
    <Box
      sx={{
        background: 'white',
        padding: '16px',
        borderRadius: '5px',
        maxWidth: '200px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              name="address"
              label="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.address)
                && Boolean(formik.errors.address)
              }
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              name="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.email) && Boolean(formik.errors.email)
              }
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              name="phone"
              label="phone"
              // type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={
                Boolean(formik.touched.phone) && Boolean(formik.errors.phone)
              }
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button
              size="small"
              onClick={() => handelClick('cancel')}
              color="primary"
              variant="contained"
              fullWidth
              style={{ background: '#eb1921' }}
            >
              cancel
            </Button>
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={{ background: '#eb1921' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );

  const buttonAdd = (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="p">
              Ավելացրեք աշխատող
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Fab
              onClick={handelClick}
              color="primary"
              aria-label="add"
              size="small"
              style={{ background: '#eb1921' }}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item sx={{ display: auth ? 'block' : 'none' }}>
      <Grid container>
        <Grid item sx={{ display: !switchState ? 'flex' : 'none' }}>
          {buttonAdd}
        </Grid>
        <Grid item sx={{ display: switchState ? 'block' : 'none' }}>
          {formForAdd}
        </Grid>
      </Grid>
    </Grid>
  );
}

function OurTeam() {
  const auth = useSelector((state) => state.authenticationReducer.value);

  const employeeContactDetails = data.map((index) => (
    <Grid item>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <img
            src={index.photo}
            alt=""
            style={{ height: '150px', borderRadius: '18px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
          >
            <Grid item my>
              <Typography className="header">
                {index.name}
              </Typography>
            </Grid>
            <Grid item>
              {index.jobTitle}
            </Grid>
            <Grid item>
              <IconIoIosCall />
              <a href={`tel:${index.phone}`}>{index.phone}</a>
            </Grid>
            <Grid item>
              <IconMdMail />
              <a href={`mailto:${index.email}`}>{index.email}</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <Grid container justifyContent="center" my={6}>
      <Grid item xs={10}>
        <EmployeeContactDetailsStyles>
          <Grid container spacing={4} justifyContent="center">
            {employeeContactDetails}
            <Grid item>
              <AddEmployeeContactDetails auth={auth} />
            </Grid>
          </Grid>
        </EmployeeContactDetailsStyles>
      </Grid>
    </Grid>
  );
}

export default OurTeam;
