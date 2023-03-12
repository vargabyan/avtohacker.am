import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { Skeleton, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import koreanImage from '../images/korean.png';
import copartImage from '../images/coopart.png';
import iaaImage from '../images/Iaa.png';
import CalculatorParamsStyle from './StyledComponent';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';
import useCustomizedSnackbars from '../../../hook/useSnackbar';
import SelectAgeMenu from './SelectAgeMenu';
import HighPermeabilityItem from './HighPermeabilityItem';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffff',
    },
  },
});

const validationSchema = yup.object({
  carPrice: yup.string().min(1).required(),
  selectAge: yup.string().required(),
  selectFuelType: yup.string().required(),
  engine: yup.string().min(1).required(),
  auctionPrice: yup.string().min(1).required(),
  shippingPrice: yup.string().required(),
  selectCarType: yup.string().required(),
  highPermeability: yup.bool().required(),
});

const initialValues = {
  carPrice: '',
  selectAge: '',
  selectFuelType: '',
  engine: '',
  auctionPrice: '',
  shippingPrice: '',
  selectCarType: '',
  highPermeability: false,
};

const CalculatorParmas = ({ setDataForCalculatorResultsState }) => {
  const [selectAuction, setSelectAuction] = useState('');
  const [selectAfeClear, setSelectAfeClear] = useState(false);
  const [selectAuctionPrice, setSelectAuctionPrice] = useState({ iaa: '0', copart: '0', korea: '0' });
  const [selectLocation, setSelectLocation] = useState([]);
  const [autocompleteState, setAutocompleteState] = useState('');
  const [auctionPlacesAndDeliveryPricesState, setAuctionPlacesAndDeliveryPricesState] = useState({});
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();
  const { snackbars, handleSnackbarsClick } = useCustomizedSnackbars('warning', t('calculate.calculator.snackbar'));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/calculate', values);
    },
  });

  const { selectFuelType, selectCarType, shippingPrice, carPrice, auctionPrice, engine } = formik.values;

  const handleSelectAuction = (_e, value) => {
    formik.setValues((values) => ({ ...values, auctionPrice: '' }));

    if (value && value !== 'other') {
      setSelectAuction(value);
      formik.setValues((values) => ({ ...values, auctionPrice: selectAuctionPrice[value] }));
    } else {
      setSelectAuction('');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    formik.setValues((values) => {
      const newData = {
        selectCarType: value,
        shippingPrice: auctionPlacesAndDeliveryPricesState?.[`price_${value}`]
          ? auctionPlacesAndDeliveryPricesState[`price_${value}`]
          : '',
      };

      return { ...values, ...newData };
    });
  };

  const handelChoicePlace = (_e, value) => {
    setAutocompleteState(value);
    // formik.setValues((values) => ({ ...values, shippingPrice: '' }));

    if (value) {
      selectLocation.forEach((element) => {
        if (element.name === value) {
          setAuctionPlacesAndDeliveryPricesState(element);

          formik.setValues((values) => {
            const newData = {
              shippingPrice: selectCarType ? element[`price_${selectCarType}`] : '',
            };

            return { ...values, ...newData };
          });
        }
      });
    }
  };

  const handleSubmit = () => {
    if (!formik.isValid) {
      handleSnackbarsClick();
    }
  };

  const handleClear = () => {
    formik.resetForm();
    setSelectAuction('');
    setAutocompleteState('');
    setSelectAfeClear((value) => !value);
  };

  useEffect(() => {
    httpRequest('get', '/calculate');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data && responsetData.data.calculatorResults) {
      setDataForCalculatorResultsState(responsetData.data.calculatorResults);
    }
    if (responsetData.data && responsetData.data.selectLocation) {
      setSelectLocation(responsetData.data.selectLocation);
    }
    if (responsetData.data && responsetData.data.selectAuctionPrice) {
      setSelectAuctionPrice(responsetData.data.selectAuctionPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return (
    <ThemeProvider theme={theme}>
      <CalculatorParamsStyle>
        <Grid container>
          <Grid item xs={12} display={selectLocation.length ? 'block' : 'none'}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='caption' color='primary' className='headerText'>
                    {t('calculate.calculator.header')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type='number'
                        size='small'
                        label={t('calculate.calculator.carPrice')}
                        name='carPrice'
                        value={carPrice}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ToggleButtonGroup size='small' exclusive value={selectAuction} onChange={handleSelectAuction}>
                        <ToggleButton size='small' value='iaa'>
                          <img src={iaaImage} alt='iaa' className='iaaImage' />
                        </ToggleButton>
                        <ToggleButton size='small' value='copart'>
                          <img src={copartImage} alt='copart' className='copartImage' />
                        </ToggleButton>
                        <ToggleButton size='small' value='korea'>
                          <img src={koreanImage} alt='korea' className='koreanImage' />
                        </ToggleButton>
                        <ToggleButton size='small' className='otherAcutionPrice' value='other'>
                          <TextField
                            size='small'
                            label={t('calculate.calculator.other')}
                            type='number'
                            name='auctionPrice'
                            value={auctionPrice}
                            onChange={formik.handleChange}
                          />
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        value={autocompleteState}
                        disableClearable
                        clearOnBlur
                        freeSolo
                        size='small'
                        options={selectLocation.map((elem) => elem.name)}
                        onChange={handelChoicePlace}
                        renderInput={(params) => (
                          <TextField label={t('calculate.calculator.selectLocation')} {...params} />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        size='small'
                        label={t('calculate.calculator.ShippingPrice')}
                        disabled
                        onChange={formik.handleChange}
                        value={shippingPrice}
                        name='shippingPrice'
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel size='small'>{t('calculate.calculator.carType')}</InputLabel>
                        <Select
                          size='small'
                          value={selectCarType}
                          label={t('calculate.calculator.carType')}
                          onChange={handleChange}
                        >
                          <MenuItem value='motorcycle'>{t('calculate.calculator.selectCarType.0')}</MenuItem>
                          <MenuItem value='sedan'>{t('calculate.calculator.selectCarType.1')}</MenuItem>
                          <MenuItem value='pickup'>{t('calculate.calculator.selectCarType.2')}</MenuItem>
                          <MenuItem value='suv'>{t('calculate.calculator.selectCarType.3')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel size='small'>{t('calculate.calculator.fuelType')}</InputLabel>
                        <Select
                          size='small'
                          value={selectFuelType}
                          label={t('calculate.calculator.fuelType')}
                          name='selectFuelType'
                          onChange={formik.handleChange}
                        >
                          <MenuItem value='diesel'>{t('calculate.calculator.selectFuelType.0')}</MenuItem>
                          <MenuItem value='gasoline'>{t('calculate.calculator.selectFuelType.1')}</MenuItem>
                          <MenuItem value='full_electric'>{t('calculate.calculator.selectFuelType.2')}</MenuItem>
                          <MenuItem value='hybrid'>{t('calculate.calculator.selectFuelType.3')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <SelectAgeMenu formik={formik} selectAfeClear={selectAfeClear} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type='number'
                        size='small'
                        label={t('calculate.calculator.engine')}
                        name='engine'
                        value={engine}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <HighPermeabilityItem selectCarType={selectCarType} formik={formik} />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent='center' spacing={2}>
                    <Grid item>
                      <Button type='submit' className='buttonSend' variant='outlined' onClick={handleSubmit}>
                        {t('calculate.calculator.button.send')}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button className='buttonClear' variant='outlined' onClick={handleClear}>
                        {t('calculate.calculator.button.clear')}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} display={!selectLocation.length ? 'block' : 'none'}>
            <Skeleton variant='rectangular' animation='pulse' height={340} />
          </Grid>
        </Grid>
      </CalculatorParamsStyle>
      {snackbars}
    </ThemeProvider>
  );
};

export default CalculatorParmas;
