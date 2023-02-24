/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useHttpRequest from '../../../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  full_electric: yup.object({
    motorcycle: yup.object({
      ageFrom_5: yup.string().min(1).required(),
      age_5_10: yup.string().min(1).required(),
      age_10_15: yup.string().min(1).required(),
    }),

    sedan: yup.object({
      ageFrom_5: yup.string().min(1).required(),
      age_5_10: yup.string().min(1).required(),
      age_10_15: yup.string().min(1).required(),
    }),
    pickup: yup.object({
      ageFrom_5: yup.string().min(1).required(),
      age_5_10: yup.string().min(1).required(),
      age_10_15: yup.string().min(1).required(),
    }),
    suv: yup.object({
      ageFrom_5: yup.string().min(1).required(),
      age_5_10: yup.string().min(1).required(),
      age_10_15: yup.string().min(1).required(),
    }),
  }),
});

const age = { ageFrom_5: [], age_5_10: [], age_10_15: [] };
const initialValues = {
  full_electric: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
};

const FullElectricCars = ({ selectFuelTypeState, setSAnimation }) => {
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();
  const [selectCar, setSelectCar] = useState('motorcycle');
  const [selectAge, setSelectAge] = useState({
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  });
  const [open, setOpen] = useState(false);
  // const ageCars = ['-5', '5-10', '10-15'];
  // const stateName = ['ageFrom_5', 'age_5_10', 'age_10_15'];
  const ageCars = ['ageFrom_5', 'age_5_10', 'age_10_15'];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-full-electric-cars-settings', values);
    },
  });

  const handleSelectCarType = (e) => {
    const { value } = e.target;
    setSelectCar(value);
  };

  const handleSelectAgeChange = (e) => {
    const { value, name } = e.target;
    setSelectAge({ name, index: value });

    console.log('🚀 -------------------------------------------------------------------------------------🚀');
    console.log('🚀 ~ file: FullElectricCars.js:77 ~ handleTextFieldChange ~ value:', value, name);
    console.log('🚀 -------------------------------------------------------------------------------------🚀');
  };

  const handleTextFieldChange = (e) => {
    const { value, name } = e.target;

    console.log('🚀 -------------------------------------------------------------------------------------🚀');
    console.log('🚀 ~ file: FullElectricCars.js:81 ~ handleTextFieldChange ~ value, name:', value, name);
    console.log('🚀 -------------------------------------------------------------------------------------🚀');

    // formik.setValues((values) => ({
    //   ...values,
    //   [selectFuelTypeState]: {
    //     ...values[selectFuelTypeState],
    //     [selectCar]: { ...values[selectFuelTypeState][selectCar], [name]: value },
    //   },
    // }));
  };

  const handleOpenClose = (key) => {
    if (key) {
      setOpen(() => !open);
    }
  };

  useEffect(() => {
    httpRequest('get', '/admin/calculator-full-electric-cars-settings');
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
              onChange={handleSelectCarType}
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
            {ageCars.map((value_1, index_1) => (
              <Grid item xs={12} key={value_1}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel size='small'>
                        {t(`calculateAdminSettings.calculatorParams.selectAge.part2.${index_1}`)}
                      </InputLabel>
                      <Select
                        // value={textFieldValue[selectValue]}
                        value={formik.values[selectFuelTypeState][selectCar][value_1][selectAge]}
                        name={ageCars[index_1]}
                        size='small'
                        label={t(`calculateAdminSettings.calculatorParams.selectAge.part2.${index_1}`)}
                        onChange={handleSelectAgeChange}
                      >
                        {formik.values[selectFuelTypeState][selectCar][value_1].map((value_2, index_2) => (
                          <MenuItem key={value_2} value={index_2}>
                            {value_2}
                          </MenuItem>
                        ))}
                        <MenuItem key='addpriceAndPercent' value='addpriceAndPercent'>
                          {t(`calculateAdminSettings.calculatorParams.addpriceAndPercent`)}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name={ageCars[index_1]}
                      size='small'
                      value={formik.values[selectFuelTypeState][selectCar][selectAge.name][selectAge.index]}
                      label={t(`calculateAdminSettings.calculatorParams.priceAndPercent`)}
                      fullWidth
                      onChange={handleTextFieldChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}

            {/* {ageCars.map((value, index) => (
              <Grid item xs={12} key={value}>
                <Autocomplete
                  name={value}
                  // value={formik.values[selectFuelTypeState][selectCar][value]}
                  freeSolo
                  size='small'
                  options={formik.values[selectFuelTypeState][selectCar][value].map((elem) => elem)}
                  onChange={handleTextFieldChange}
                  onInputChange={handleTextFieldChange}
                  renderInput={(params) => (
                    <TextField
                      label={t(`calculateAdminSettings.calculatorParams.selectAge.part2.${index}`)}
                      {...params}
                    />
                  )}
                />
              </Grid>
            ))} */}

            {/* {ageCars.map((index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  name={stateName[i]}
                  value={formik.values[selectFuelTypeState][selectCar][stateName[i]]}
                  label={t(`calculateAdminSettings.calculatorParams.selectAge.part2.${i++}`)}
                  fullWidth
                  type='number'
                  size='small'
                  onChange={handleTextFieldChange}
                />
              </Grid>
            ))} */}
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

export default FullElectricCars;
