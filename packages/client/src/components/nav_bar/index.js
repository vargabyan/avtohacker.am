import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DrawerAppBarStyle, DrawerChildrenElementStyle, TelephonNumberLineStyle } from './indexStyles';
import { IconBsCalculatorFill, IconIoIosCall } from './icons';
import { logout } from '../../reducers/authentication';
import { data_Contacts } from '../footer/address';
import LanguageSelection from './LanguageSelection';

const PhoneNumber = data_Contacts.map((index) => (
  <Grid item key={`key_${index.phone}`}>
    <Grid container spacing={1}>
      <Grid item>
        <IconIoIosCall />
      </Grid>
      <Grid item>
        <a href={`tel:${index.phone}`}>
          <Typography variant='p' color='primary'>
            {index.phone}
          </Typography>
        </a>
      </Grid>
    </Grid>
  </Grid>
));

const TelephonNumberLine = () => {
  const { t } = useTranslation();
  return (
    <TelephonNumberLineStyle>
      <Grid className='gridBackground' container justifyContent='center' alignContent='center'>
        <Grid item>
          <Grid container alignContent='center' justifyContent='center' spacing={3}>
            <Grid item>
              <Typography variant='p'>{t('nab_bar.telephon')}</Typography>
            </Grid>
            {PhoneNumber}
          </Grid>
        </Grid>
      </Grid>
    </TelephonNumberLineStyle>
  );
};

const NavItems = () => {
  const { t } = useTranslation();
  const itemNameNavBar = t('nab_bar.nav_link', { returnObjects: true });
  const array = Object.keys(itemNameNavBar);

  return array.map((index) => (
    <NavLink to={index} key={index}>
      {({ isActive }) => (
        <Button className={index} key={index}>
          <Typography className={`navItemsTypography ${isActive ? 'activeLink' : undefined}`}>
            {itemNameNavBar[index]}
          </Typography>
        </Button>
      )}
    </NavLink>
  ));
};

const DrawerItems = () => {
  const { t } = useTranslation();
  const itemNameNavBar = t('nab_bar.nav_link', { returnObjects: true });
  const array = Object.keys(itemNameNavBar);

  return array.map((index) => (
    <NavLink to={index} key={index}>
      {({ isActive }) => (
        <ListItem className={isActive ? 'activeLink' : ''} key={index} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={itemNameNavBar[index]} />
          </ListItemButton>
        </ListItem>
      )}
    </NavLink>
  ));
};

const DrawerAppBar = (props) => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const dispatch = useDispatch();
  const logo = 'AUTOHACKER';
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogaut = () => {
    dispatch(logout());
  };

  return (
    <DrawerAppBarStyle>
      <Box
        sx={{
          display: 'flex',
          height: auth ? { xs: '92px', md: '152px', lg: '122px' } : { xs: '64px', md: '124px', lg: '96px' },
        }}
      >
        <AppBar component='nav'>
          <Box className='systemControlBox' sx={{ display: auth ? 'black' : 'none' }}>
            <Grid container justifyContent='center'>
              <Grid item sx={{ flexGrow: 1 }} alignSelf='center'>
                {t('nab_bar.system_control')}
              </Grid>
              <Grid item>
                <Button variant='text' onClick={handleLogaut}>
                  {t('nab_bar.logaout')}
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
              <Link className='logo' to='/am'>
                {logo}
              </Link>
            </Typography>
            <Box className='navItems' sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
              <NavItems />
            </Box>
            <Box className='calculateIconBox' sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
              <Grid container justifyContent='end' spacing={1}>
                <Grid item>
                  <Link className='logo' to='/' style={{ color: '#eb1921' }}>
                    {logo}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='calculate'>
                    <IconBsCalculatorFill />
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <LanguageSelection />
            </Box>
          </Toolbar>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <TelephonNumberLine />
          </Box>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
            }}
          >
            <DrawerChildrenElementStyle>
              <Box className='navDrawerBox' onClick={handleDrawerToggle}>
                <Typography className='logo' variant='h6' sx={{ my: 2 }}>
                  {logo}
                </Typography>
                <Divider />
                <List>
                  <DrawerItems />
                </List>
              </Box>
            </DrawerChildrenElementStyle>
          </Drawer>
        </Box>
      </Box>
    </DrawerAppBarStyle>
  );
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffff',
    },
  },
});

const NavBar = () => (
  <ThemeProvider theme={theme}>
    <DrawerAppBar />
  </ThemeProvider>
);

export default NavBar;
