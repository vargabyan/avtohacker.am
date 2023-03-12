// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';
import iaaImage from '../images/Iaa.png';
import copartImage from '../images/coopart.png';
import koreanImage from '../images/korean.png';

const auctionFlags = {
  iaa: {
    name: 'iaa',
    image: <img src={iaaImage} alt='iaa' className='iaaImage' style={{ height: '15px', width: '30px' }} />,
  },
  copart: {
    name: 'copart',
    image: <img src={copartImage} alt='copart' className='copartImage' style={{ height: '15px', width: '30px' }} />,
  },
  korea: {
    name: 'korea',
    image: <img src={koreanImage} alt='korea' style={{ height: '15px', width: '30px' }} />,
  },
};

const validationSchema = yup.object({
  iaa: yup.string().min(1).required(),
  copart: yup.string().min(1).required(),
  korea: yup.string().min(1).required(),
});

const initialValues = {
  iaa: '',
  copart: '',
  korea: '',
};

const AuctionsSettings = () => {
  const [open, setOpen] = useState(false);
  const [selectAuction, setSelectAuction] = useState('iaa');
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-auction-settings', values);
    },
  });

  const handleChangeSelectAuction = (e) => {
    const { value } = e.target;
    setSelectAuction(value);
  };

  const handleOpenClose = () => {
    setOpen(() => !open);
  };

  useEffect(() => {
    if (responsetData.data) {
      formik.setValues(() => responsetData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData]);
  useEffect(() => {
    httpRequest('get', '/admin/calculator-auction-settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} display={responsetData.data ? 'block' : 'none'}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel size='small'>{t('calculateAdminSettings.calculatorParams.auction')}</InputLabel>
                <Select
                  size='small'
                  open={open}
                  onClose={handleOpenClose}
                  onOpen={handleOpenClose}
                  value={selectAuction}
                  label={t('calculateAdminSettings.calculatorParams.auction')}
                  onChange={handleChangeSelectAuction}
                >
                  {Object.keys(auctionFlags).map((index) => (
                    <MenuItem key={auctionFlags[index].name} value={auctionFlags[index].name}>
                      {auctionFlags[index].image}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                name={selectAuction}
                value={formik.values[selectAuction]}
                onChange={formik.handleChange}
                fullWidth
                type='number'
                size='small'
                label={t('calculateAdminSettings.calculatorParams.auctionPrice')}
              />
            </Grid>
            <Grid item xs={4}>
              <Button type='submit' className='buttonSend' variant='outlined' fullWidth>
                {t('calculateAdminSettings.calculatorParams.button.save')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} display={!responsetData.data ? 'block' : 'none'}>
        <Skeleton variant='rectangular' animation='pulse' height={45} />
      </Grid>
    </Grid>
  );
};

export default AuctionsSettings;
