import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import koreanImage from './images/korean.png';
import copartImage from './images/coopart.png';
import iaaImage from './images/Iaa.png';
import { CalculatorParamsStyle } from './styledComponent';
import data from './data';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';
import useCustomizedSnackbars from '../../hook/useSnackbar';

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
  ShippingPrice: yup.string().required(),
});

const CalculatorParmas = ({ setDataForCalculatorResultsState }) => {
  const [alignment, setAlignment] = useState('');
  const [selectCarTypeState, setSelectCarTypeState] = useState('');
  const [requestState, setRequestState] = useState({
    method: '',
    url: '',
    body: '',
  });
  const [auctionPlacesAndDeliveryPricesState, setAuctionPlacesAndDeliveryPricesState] = useState({});
  const { snackbars, handleSnackbarsClick } = useCustomizedSnackbars('warning', 'Լրացրեք բոլոր բաց թողնված վանդակները');
  const { responsetData } = useHttpRequest(requestState.method, requestState.url, requestState.body);

  useEffect(() => {
    setDataForCalculatorResultsState(responsetData.data);
    console.log(responsetData.data, Boolean(responsetData.data.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  const formik = useFormik({
    initialValues: {
      carPrice: '',
      selectAge: '',
      selectFuelType: '',
      engine: '',
      auctionPrice: '',
      ShippingPrice: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setRequestState({ method: 'post', url: '/calculate', body: values });
    },
  });

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment) {
      setAlignment(newAlignment);

      switch (newAlignment) {
        case 'copart':
          formik.values.auctionPrice = 300;
          break;
        case 'korean':
          formik.values.auctionPrice = 400;
          break;
        case 'iaa':
          formik.values.auctionPrice = 500;
          break;
        default:
          break;
      }
    }
  };

  const handleChange = (event) => {
    setSelectCarTypeState(event.target.value);

    if (auctionPlacesAndDeliveryPricesState) {
      switch (`price_${event.target.value}`) {
        case 'price_sedan':
          formik.values.ShippingPrice = auctionPlacesAndDeliveryPricesState.price_sedan;
          break;
        case 'price_suv':
          formik.values.ShippingPrice = auctionPlacesAndDeliveryPricesState.price_suv;
          break;
        case 'price_pickup':
          formik.values.ShippingPrice = auctionPlacesAndDeliveryPricesState.price_pickup;
          break;
        case 'price_motorcycle':
          formik.values.ShippingPrice = auctionPlacesAndDeliveryPricesState.price_motorcycle;
          break;
        default:
          break;
      }
    }
  };

  const handelChoicePlace = (e) => {
    formik.values.ShippingPrice = '';

    if (e.target.innerText) {
      const array = Object.keys(data);
      array.array.forEach((element) => {
        if (element.name === e.target.innerText) {
          setAuctionPlacesAndDeliveryPricesState(element);

          if (selectCarTypeState) {
            switch (`price_${selectCarTypeState}`) {
              case 'price_sedan':
                formik.values.ShippingPrice = element.price_sedan;
                break;
              case 'price_suv':
                formik.values.ShippingPrice = element.price_suv;
                break;
              case 'price_pickup':
                formik.values.ShippingPrice = element.price_pickup;
                break;
              case 'price_motorcycle':
                formik.values.ShippingPrice = element.price_motorcycle;
                break;
              default:
                break;
            }
          }
        }
      });
    }
  };

  const handleSubmit = () => {
    if (
      Boolean(formik.errors.carPrice) ||
      Boolean(formik.errors.ShippingPrice) ||
      Boolean(formik.errors.auction) ||
      Boolean(formik.errors.engine) ||
      Boolean(formik.errors.selectAge) ||
      Boolean(formik.errors.selectFuelType)
    ) {
      handleSnackbarsClick();
    }
    if (
      !formik.values.carPrice &&
      !formik.values.ShippingPrice &&
      !formik.values.auction &&
      !formik.values.engine &&
      !formik.values.selectAge &&
      !formik.values.selectFuelType
    ) {
      handleSnackbarsClick();
    }
  };

  // const text =
  //   true ?

  //                         <MenuItem value="-3">մինչև 3 տարի</MenuItem>
  //                         <MenuItem value="3-5">3 - 5 տարի</MenuItem>
  //                         <MenuItem value="5-7">5 - 7 տարի</MenuItem>
  //                         <MenuItem value="7+">7 +</MenuItem>

  //                     :

  //                         <MenuItem value="-5">մինչև 5 տարի</MenuItem>
  //                         <MenuItem value="5-10">5 - 10 տարի</MenuItem>
  //                         <MenuItem value="10-15">10 - 15 տարի</MenuItem>

  return (
    <ThemeProvider theme={theme}>
      <CalculatorParamsStyle>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='p' color='primary' className='headerText'>
                Ստորև ներկայացված հաշվիչը հնարավորություն է տալիս հաշվարկել աճուրդի վճարը, ﬔքենայի տեղափոխման արժեքը,
                ապահովագրությունը և մաքսազերծումը՝ 2020 թվականից գործող ԵԱՏՄ սակագներին համապատասխան։
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='number'
                    size='small'
                    label='Մեքենայի Արժեք'
                    name='carPrice'
                    value={formik.values.carPrice}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ToggleButtonGroup size='small' exclusive value={alignment} onChange={handleAlignment}>
                    <ToggleButton size='small' value='iaa'>
                      <img src={iaaImage} alt='iaa' className='iaaImage' />
                    </ToggleButton>
                    <ToggleButton size='small' value='copart'>
                      <img src={copartImage} alt='copart' className='copartImage' />
                    </ToggleButton>
                    <ToggleButton size='small' value='korean'>
                      <img src={koreanImage} alt='korean' className='koreanImage' />
                    </ToggleButton>
                    <ToggleButton size='small' className='otherAcutionPrice' value='other'>
                      <TextField
                        size='small'
                        label='այլ'
                        type='number'
                        name='auctionPrice'
                        value={formik.values.auctionPrice}
                        onChange={formik.handleChange}
                      />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    freeSolo
                    size='small'
                    options={data.map((elem) => elem.name)}
                    onInputChange={handelChoicePlace}
                    renderInput={(params) => <TextField label='Աճուրդի վայր' {...params} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size='small'
                    label='Տեղափոխման վճար'
                    disabled
                    onChange={formik.handleChange}
                    value={formik.values.ShippingPrice}
                    name='ShippingPrice'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel size='small'>Տրանսպորտի տեսակ</InputLabel>
                    <Select
                      size='small'
                      value={selectCarTypeState}
                      label='Տրանսպորտի տեսակ'
                      name='selectCarType'
                      onChange={handleChange}
                    >
                      <MenuItem value='motorcycle'>Մոտոցիկլ</MenuItem>
                      <MenuItem value='sedan'>Սեդան</MenuItem>
                      <MenuItem value='pickup'>Պիկապ</MenuItem>
                      <MenuItem value='suv'>Ամենագնաց</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel size='small'>Տարիք</InputLabel>
                    <Select
                      size='small'
                      value={formik.values.selectAge}
                      label='Տարիք'
                      name='selectAge'
                      onChange={formik.handleChange}
                    >
                      <MenuItem value='-3'>մինչև 3 տարի</MenuItem>
                      <MenuItem value='3-5'>3 - 5 տարի</MenuItem>
                      <MenuItem value='5-7'>5 - 7 տարի</MenuItem>
                      <MenuItem value='7+'>7 +</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel size='small'>Շարժիչի Տեսակ</InputLabel>
                    <Select
                      size='small'
                      value={formik.values.selectFuelType}
                      label='Շարժիչի Տեսակ'
                      name='selectFuelType'
                      onChange={formik.handleChange}
                    >
                      <MenuItem value='Diesel'>Դիզել</MenuItem>
                      <MenuItem value='Gasoline'>Բենզին</MenuItem>
                      <MenuItem value='hybrid'>Հիբրիդ</MenuItem>
                      <MenuItem value='Full_electric'>Էլեկտրական</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='number'
                    size='small'
                    label='Շարժիչի ծավալ, սմ³'
                    name='engine'
                    value={formik.values.engine}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' className='buttonSend' variant='outlined' onClick={handleSubmit}>
                Հաշվել
              </Button>
            </Grid>
          </Grid>
        </form>
      </CalculatorParamsStyle>
      {snackbars}
    </ThemeProvider>
  );
};

export default CalculatorParmas;
