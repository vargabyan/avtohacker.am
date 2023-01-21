import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useSelector } from 'react-redux';
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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  LanguageStyle,
  DrawerAppBarStyle,
  DrawerChildrenElementStyle,
  TelephonNumberLineStyle,
} from './indexStyles';
import { IconBsCalculatorFill, IconIoIosCall } from './icons';
import { data_Contacts } from '../footer/address';

function TelephonNumberLine() {
  const PhoneNumber = data_Contacts.map((index) => (
    <Grid item key={`key_${index.phone}`}>
      <Grid container spacing={1}>
        <Grid item>
          <IconIoIosCall />
        </Grid>
        <Grid item>
          <a href={`tel:${index.phone}`}>
            <Typography variant="p" color="primary">
              {index.phone}
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <TelephonNumberLineStyle>
      <Grid
        className="gridBackground"
        container
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <Grid
            container
            alignContent="center"
            justifyContent="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="p">
                ՄԵՆՔ ՄԻՇՏ ՀԱՍԱՆԵԼԻ ԵՆՔ
              </Typography>
            </Grid>
            {PhoneNumber}
          </Grid>
        </Grid>
      </Grid>
    </TelephonNumberLineStyle>
  );
}

function LanguageSelection() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('am');

  const handleChange = (e) => {
    setLanguage(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <LanguageStyle>
      <FormControl fullWidth>
        <NativeSelect defaultValue={language} onChange={handleChange}>
          <option value="am">ՀԱ</option>
          <option value="en">EN</option>
          <option value="ru">РУ</option>
        </NativeSelect>
      </FormControl>
    </LanguageStyle>
  );
}

const itemNameNavBar = {
  aboute_us: 'ՄԵՐ ՄԱՍԻՆ',
  calculate: 'ՀԱՇՎԻՉ',
  inventory: 'ԱՌԿԱ ՄԵՔԵՆԱՆԵՐ',
  our_team: 'ԿԱՊ ԹԻՄԻ ՀԵՏ',
  services: 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ',
  order_a_call: 'ՊԱՏՎԻՐԵԼ ԶԱՆԳ',
};

function DrawerAppBar(props) {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const logo = 'AUTOHACKER';
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavItems = () => {
    const array = [];
    for (const key in itemNameNavBar) {
      array.push(
        <NavLink to={key} key={key}>
          {({ isActive }) => (
            <Button className={key} key={key}>
              <Typography
                className={`navItemsTypography ${isActive ? 'activeLink' : undefined}`}
              >
                {itemNameNavBar[key]}
              </Typography>
            </Button>
          )}
        </NavLink>,
      );
    }
    return array;
  };

  const DrawerItems = () => {
    const array = [];
    for (const key in itemNameNavBar) {
      array.push(
        <NavLink to={key} key={key}>
          {({ isActive }) => (
            <ListItem className={isActive ? 'activeLink' : ''} key={key} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={itemNameNavBar[key]} />
              </ListItemButton>
            </ListItem>
          )}
        </NavLink>,
      );
    }
    return array;
  };

  return (
    <DrawerAppBarStyle>
      <Box
        sx={{
          display: 'flex',
          height: auth
            ? { xs: '92px', md: '152px', lg: '122px' }
            : { xs: '64px', md: '124px', lg: '96px' },
        }}
      >
        <AppBar component="nav">
          <Box
            className="systemControlBox"
            sx={{ display: auth ? 'black' : 'none' }}
          >
            Համակարգի կառավարում
          </Box>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
            >
              <Link className="logo" to="/am">
                {logo}
              </Link>
            </Typography>
            <Box
              className="navItems"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
            >
              <NavItems />
            </Box>
            <Box
              className="calculateIconBox"
              sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}
            >
              <Grid container justifyContent="end" spacing={1}>
                <Grid item>
                  <Link className="logo" to="/" style={{ color: '#eb1921' }}>
                    {logo}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="calculate">
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
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
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
              <Box className="navDrawerBox" onClick={handleDrawerToggle}>
                <Typography className="logo" variant="h6" sx={{ my: 2 }}>
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
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffff',
    },
  },
});

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />
    </ThemeProvider>
  );
}

export default NavBar;
