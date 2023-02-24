/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/system';
import nkar from './images/4.jpg';
import GetCallBackStyles from './indexStyles';
import IconBsCalculatorFill from './icons';
import ReCaptcha from './ReCaptcha';

const isInitialValid = yup.object({
  fullname: yup.string().min(3).required(),
  phone: yup.string().min(9).required(),
  totalMoney: yup.string().min(3).required(),
  minMoney: yup.string().min(3).required(),
  maxMoney: yup.string().min(3).required(),
  carModelMarcaBrand: yup.string().min(3).required(),
  comments: yup.string(),
  file: yup.string(),
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

const FormCallBack = () => {
  const formik = useFormik({
    initialValues,
    isInitialValid,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const handelUploade = (e) => {
  //   console.log('🚀 -----------------------------------------------------🚀');
  //   console.log('🚀 ~ file: index.js:44 ~ handelUploade ~ e', e.target.value);
  //   console.log('🚀 -----------------------------------------------------🚀');
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='fullname'
            label='Անուն Ազգանուն'
            variant='filled'
            size='small'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='phone'
            label='Հեռ․'
            variant='filled'
            size='small'
            type='tel'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='totalMoney'
            label='Նախատեսվող ընդհնաուր բյուջե'
            variant='filled'
            size='small'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='minMoney'
            label='Մին.'
            size='small'
            // type='number'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='maxMoney'
            label='Մաքս.'
            size='small'
            // type='number'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='carModelMarcaBrand'
            label='Մեքենայի մակնիշ/մոդել'
            variant='filled'
            size='small'
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name='comments'
            label='Թողնել նշուﬓեր'
            multiline
            variant='filled'
            size='small'
            rows={2}
            // value={value}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth component='label' variant='contained' sx={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
            <input onChange={formik.handleChange} name='file' hidden accept='image/*' multiple type='file' />
            <Typography>Կցել հաշվարկը</Typography>
            <IconBsCalculatorFill />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ReCaptcha />
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' fullWidth variant='contained' sx={{ backgroundColor: '#eb1921' }}>
            <Typography>Պատվիրել զանգ</Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const GetCallBack = ({ home, m }) => (
  <GetCallBackStyles>
    <Grid container spacing={2} justifyContent='center' mt={m !== undefined ? m : 6} mb={4}>
      <Grid item xs={12} display={home ? 'block' : 'none'}>
        <Grid container justifyContent='center' spacing={1}>
          <Grid item xs={9}>
            <Typography variant='h4' fontWeight={900}>
              ՊԱՏՎԻՐԵԼ ԶԱՆԳ
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Box width='80px' height='4px' sx={{ background: '#eb1921' }} />
          </Grid>
          <Grid item xs={9}>
            <Typography fontWeight={900}>
              Եթե ցանկանում եք, որ մասնագետը կապ հաստատի Ձեզ, կարող եք թողնել Ձեր տվյալները՝ լրացնելով հայտը։
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item display={{ xs: 'none', md: 'block' }} md={6}>
            <Box
              style={{
                background: `url(${nkar})`,
                height: '100%',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCallBack />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </GetCallBackStyles>
);

export default GetCallBack;
