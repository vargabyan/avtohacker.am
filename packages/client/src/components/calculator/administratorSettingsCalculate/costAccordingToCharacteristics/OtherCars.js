import React, { useEffect, useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useHttpRequest from '../../../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  diesel: yup.object({
    motorcycle: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),

    sedan: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    pickup: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    suv: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
  }),

  gasoline: yup.object({
    motorcycle: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    sedan: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    pickup: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    suv: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
  }),

  hybrid: yup.object({
    motorcycle: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    sedan: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    pickup: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
    suv: yup.object({
      highPermeability: yup.string().min(1).required(),
      ageFrom_3: yup.string().min(1).required(),
      age_3_5: yup.string().min(1).required(),
      age_5_7: yup.string().min(1).required(),
      age_7_to: yup.string().min(1).required(),
    }),
  }),
});

const age = { ageFrom_3: '', highPermeability: '', age_3_5: '', age_5_7: '', age_7_to: '' };
const initialValues = {
  diesel: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
  gasoline: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
  hybrid: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
};

const OtherCars = ({ selectFuelTypeState, setSAnimation }) => {
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();
  const [selectCar, setSelectCar] = useState('motorcycle');
  const [open, setOpen] = useState(false);
  const ageCars = ['highPermeability', '-3', '3-5', '5-7', '7+'];
  const stateName = ['highPermeability', 'ageFrom_3', 'age_3_5', 'age_5_7', 'age_7_to'];
  let i = 0;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-other-cars-settings', values);
    },
  });

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectCar(value);
  };

  const handleTextFieldChange = (e) => {
    const { value, name } = e.target;
    formik.setValues((values) => ({
      ...values,
      [selectFuelTypeState]: {
        ...values[selectFuelTypeState],
        [selectCar]: { ...values[selectFuelTypeState][selectCar], [name]: value },
      },
    }));
  };

  const handleOpenClose = (key) => {
    if (key) {
      setOpen(() => !open);
    }
  };

  useEffect(() => {
    httpRequest('get', '/admin/calculator-other-cars-settings');
    if (responsetData.data) {
      setSAnimation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data) {
      formik.setValues(responsetData.data);
      setSAnimation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel size='small'>{t('calculateAdminSettings.calculatorParams.carType')}</InputLabel>
            <Select
              name='selectCarType'
              size='small'
              open={open}
              onClose={handleOpenClose}
              onOpen={handleOpenClose}
              value={selectCar}
              label={t('calculateAdminSettings.calculatorParams.carType')}
              onChange={handleSelectChange}
            >
              <MenuItem value='motorcycle'>{t('calculateAdminSettings.calculatorParams.selectCarType.0')}</MenuItem>
              <MenuItem value='sedan'>{t('calculateAdminSettings.calculatorParams.selectCarType.1')}</MenuItem>
              <MenuItem value='pickup'>{t('calculateAdminSettings.calculatorParams.selectCarType.2')}</MenuItem>
              <MenuItem value='suv'>{t('calculateAdminSettings.calculatorParams.selectCarType.3')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {ageCars.map((index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  name={stateName[i]}
                  value={formik.values[selectFuelTypeState][selectCar][stateName[i]]}
                  label={t(`calculateAdminSettings.calculatorParams.selectAge.part1.${i++}`)}
                  fullWidth
                  type='number'
                  size='small'
                  onChange={(e) => handleTextFieldChange(e)}
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
  );
};

export default OtherCars;
