import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  LanguageStyle,
  DrawerAppBarStyle,
  DrawerChildrenElementStyle,
  TelephonNumberLineStyle,
} from "./indexStyles";
import {
  text_navBar,
  text_telephonNumberLine,
  text_systemControlBox,
} from "./TextContent";
import { Link } from "react-router-dom";
import { IconBsCalculatorFill, IconIoIosCall } from "./icons";
import { data_Contacts } from "../footer/address";
import { useNavigate } from "react-router-dom"

const TelephonNumberLine = () => {
  const PhoneNumber = data_Contacts.map((index) => {
    return (
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
    );
  });

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
                {text_telephonNumberLine.reach_us_anytime_at}
              </Typography>
            </Grid>
            {PhoneNumber}
          </Grid>
        </Grid>
      </Grid>
    </TelephonNumberLineStyle>
  );
};

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en")

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
};

function DrawerAppBar(props) {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const logo = "AUTOHACKER";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavItems = () => {
    const array = [];
    for (const key in text_navBar) {
      array.push(
        <Link to={key} key={key}>
          <Button className={key} key={key}>
            {text_navBar[key]}
          </Button>
        </Link>
      );
    }
    return array;
  };

  const DrawerItems = () => {
    const array = [];
    for (const key in text_navBar) {
      array.push(
        <Link to={key} key={key}>
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={text_navBar[key]} />
            </ListItemButton>
          </ListItem>
        </Link>
      );
    }
    return array;
  };

  return (
    <DrawerAppBarStyle>
      <Box
        sx={{
          display: "flex",
          height: auth
            ? { xs: "92px", md: "152px", lg: "122px" }
            : { xs: "64px", md: "124px", lg: "96px" },
        }}
      >
        <AppBar component="nav">
          <Box
            className="systemControlBox"
            sx={{ display: auth ? "black" : "none" }}
          >
            {text_systemControlBox.system_management}
          </Box>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            >
              <Link className="logo" to="/">
                {logo}
              </Link>
            </Typography>
            <Box
              className="navItems"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            >
              <NavItems />
            </Box>
            <Box
              className="calculateIconBox"
              sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
            >
              <Grid container justifyContent="end" spacing={1}>
                <Grid item>
                  <Link className="logo" to="/" style={{ color: "#eb1921" }}>
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
          <Box sx={{ display: { xs: "none", md: "block" } }}>
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
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
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
    mode: "light",
    primary: {
      main: "#ffff",
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
