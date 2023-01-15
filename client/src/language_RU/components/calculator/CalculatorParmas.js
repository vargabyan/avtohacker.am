import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import { auctionPlace } from "./Data";
import { CalculatorParamsStyle } from "./styledComponent";
import { Typography } from "@mui/material";
import {
  text_content_calculator_AM,
  text_content_calculator_EN,
  text_content_calculator_RU,
} from "./TextContent";
import iaaImage from "./images/Iaa.png";
import copartImage from "./images/coopart.png";
import koreanImage from "./images/korean.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffff",
    },
  },
});

const CalculatorParmas = ({ languige }) => {
  const [alignment, setAlignment] = useState("");
  const contentText =
    languige === "AM"
      ? text_content_calculator_AM
      : languige === "EN"
      ? text_content_calculator_EN
      : text_content_calculator_RU;

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment) setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <CalculatorParamsStyle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="p" color="primary" className="headerText">
              {contentText.header}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  size="small"
                  label={contentText.carPrice}
                />
              </Grid>
              <Grid item xs={12}>
                <ToggleButtonGroup
                  size="small"
                  exclusive
                  value={alignment}
                  onChange={handleAlignment}
                >
                  <ToggleButton size="small" value="iaa">
                    <img src={iaaImage} alt="iaa" className="iaaImage" />
                  </ToggleButton>
                  <ToggleButton size="small" value="copart">
                    <img
                      src={copartImage}
                      alt="copart"
                      className="copartImage"
                    />
                  </ToggleButton>
                  <ToggleButton size="small" value="korean">
                    <img
                      src={koreanImage}
                      alt="korean"
                      className="koreanImage"
                    />
                  </ToggleButton>
                  <ToggleButton
                    size="small"
                    className="otherAcutionPrice"
                    value="other"
                  >
                    <TextField
                      size="small"
                      label={contentText.other}
                      type="number"
                    />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  size="small"
                  options={auctionPlace.map((elem) => elem.name)}
                  renderInput={(params) => {
                    return (
                      <TextField
                        label={contentText.selectLocation}
                        {...params}
                      />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  size="small"
                  label={contentText.ShippingPrice}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  size="small"
                  options={contentText.selectCarType.map((elem) => elem)}
                  renderInput={(params) => {
                    return (
                      <TextField label={contentText.carType} {...params} />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  size="small"
                  options={contentText.selectAge.map((elem) => elem)}
                  renderInput={(params) => {
                    return <TextField label={contentText.Age} {...params} />;
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  size="small"
                  options={contentText.selectFuelType.map((elem) => elem)}
                  renderInput={(params) => {
                    return (
                      <TextField label={contentText.fuelType} {...params} />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  size="small"
                  label={contentText.engine}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button className="buttonSend" variant="outlined">
              {contentText.button}
            </Button>
          </Grid>
        </Grid>
      </CalculatorParamsStyle>
    </ThemeProvider>
  );
};

export default CalculatorParmas;
