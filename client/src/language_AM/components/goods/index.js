import React from 'react';
import {
  Button, Grid, Typography, Box,
} from '@mui/material';
import ohoto from './images/637627db8024e.jpeg';
import './icons/style.css';
import { IconFaFilter, IconFaSearch } from './icons';
import { LightTooltip } from '../../../common/tooltip/indexStyles';
import { FilterItemStyle, ListItemStyle, SearchItemStyle } from './indexStyles';

function GoodsList() {
  const data = [
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
  ];

  const listItem = data.map((index) => (
    <Grid item xs={10} sm={6} md={4}>
      <ListItemStyle>
        <img src={index.photo[0]} alt="" style={{ maxWidth: '100%' }} />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 99,
            top: 0,
            maxWidth: '324px',
            maxHeight: '245px',
            height: '100%',
            width: '100%',
          }}
        >
          <Grid conyainer sx={{ position: 'relative' }}>
            <Grid item xs={12} display="grid" justifyContent="end">
              <LightTooltip title="Աճուրդում">
                <Box
                    className="icon-auction"
                    sx={{
                      width: '38px',
                      height: '38px',
                      fontSize: '25px',
                      color: 'black',
                      background: '#e2e2e2',
                      borderRadius: '5px',
                      opacity: 0.6,
                      display: 'grid',
                      alignContent: 'center',
                      textAlign: 'center',
                      marginTop: '5px',
                      marginRight: '5px',
                    }}
                  />
              </LightTooltip>
            </Grid>
            <Grid item xs={12}>
              <Typography
                zIndex={99}
                sx={{
                    color: 'white', marginTop: '35%', marginLeft: '15px', fontWeight: 900,
                  }}
              >
                {`${index.brand} ${index.mode} ${index.year}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography zIndex={99} sx={{ color: 'white', marginLeft: '15px', fontSize: '12px' }}>{index.price}</Typography>
            </Grid>
            <Grid item xs={12} display="grid" justifyContent="end">
              <Button variant="contained" size="small" sx={{ marginRight: '15px', background: '#eb1921' }}>
                Իմանալ Ավելին
                </Button>
            </Grid>
          </Grid>
        </Box>
      </ListItemStyle>
    </Grid>
  ));

  return (
    <Grid container spacing={1} justifyContent="center">
      {listItem}
    </Grid>
  );
}

function Goods() {
  const searchItem = (
    <SearchItemStyle>
      <Grid container direction="row">
        <Grid item xs>
          <input placeholder="Որոնել" />
        </Grid>
        <Grid item>
          <Button>
            <IconFaSearch />
          </Button>
        </Grid>
      </Grid>
    </SearchItemStyle>
  );

  const filterItem = (
    <FilterItemStyle>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button className="icon-button">
            <i className="icon-auction" />
          </Button>
          <Button>
            <Typography className="icon-name">Աճուրդում</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button className="icon-button">
            <i className="icon-delivery" />
          </Button>
          <Button>
            <Typography className="icon-name">Ճանապարհին</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button className="icon-button">
            <i className="icon-weHave" />
          </Button>
          <Button>
            <Typography className="icon-name">ՀՀ-ում</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <IconFaFilter />
          </Button>
        </Grid>
      </Grid>
    </FilterItemStyle>
  );

  return (
    <Grid container justifyContent="center" spacing={4} mt={1} mb={4}>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" fontWeight={700}>
              Կատալոգ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {searchItem}
          </Grid>
          <Grid item xs={12}>
            {filterItem}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <GoodsList />
      </Grid>
    </Grid>
  );
}

export default Goods;
