import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { auctionPlace } from "./Data";
import { AdministratorSettingsCalculatStyles } from "./styledComponent";
import {
  text_calculator
} from "./TextContent";
import iaaImage from "./images/Iaa.png";
import copartImage from "./images/coopart.png";
import koreanImage from "./images/korean.png";

function AdministratorSettingsCalculat() {

  const [value, setValue] = useState({
    selectCarType: "",
    selectFuelType: "",
    selectAuction: "",
  });
  const [open, setOpen] = useState({
    selectCarType: false,
    selectFuelType: false,
    selectAuction: false,
  });

  const handleChange = (event, key) => {
    console.log(event.target.value, key)
    switch (key) {
      case "selectCarType":
        setValue({ ...value, selectCarType: event.target.value });
        break;
      case "selectFuelType":
        setValue({ ...value, selectFuelType: event.target.value });
        break;
      case "selectAuction":
        setValue({ ...value, selectAuction: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleOpenClose = (key) => {
    switch (key) {
      case "selectCarType":
        setOpen({ ...open, selectCarType: !open.selectCarType });
        break;
      case "selectFuelType":
        setOpen({ ...open, selectFuelType: !open.selectFuelType });
        break;
      case "selectAuction":
        setOpen({ ...open, selectAuction: !open.selectAuction });
        break;
      default:
        break;
    }
  };

  const costAccordingToCharacteristics = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel size="small">{text_calculator.carType}</InputLabel>
          <Select
            size="small"
            open={open.selectCarType}
            onClose={() => handleOpenClose("selectCarType")}
            onOpen={() => handleOpenClose("selectCarType")}
            value={value.selectCarType}
            label={text_calculator.carType}
            onChange={(e) => handleChange(e, "selectCarType")}
          >
            {text_calculator.selectCarType.map((index) => {
              return <MenuItem key={index} value={index}>{index}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel size="small">{text_calculator.fuelType}</InputLabel>
          <Select
            size="small"
            open={open.selectFuelType}
            onClose={() => handleOpenClose("selectFuelType")}
            onOpen={() => handleOpenClose("selectFuelType")}
            value={value.selectFuelType}
            label={text_calculator.fuelType}
            onChange={(e) => handleChange(e, "selectFuelType")}
          >
            {text_calculator.selectFuelType.map((index) => {
              return <MenuItem key={index} value={index}>{index}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      {text_calculator.selectAge.map((elem) => {
        return (
          <Grid item xs={12}>
            <TextField fullWidth type="number" size="small" label={elem} />
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Button className="buttonSend" variant="outlined" fullWidth>
          save
        </Button>
      </Grid>
    </Grid>
  );

  const arr = [
    {
      name: "iaa",
      image: <img src={iaaImage} alt="iaa" className="iaaImage" style={{height: "15px", width: "30px"}} />,
      value: "",
    },
    {
      name: "copart",
      image: <img src={copartImage} alt="copart" className="copartImage" style={{height: "15px", width: "30px"}} />,
      value: "",
    },
    {
      name: "korea",
      image: <img src={koreanImage} alt="korea" style={{height: "15px", width: "30px"}} />,
      value: "",
    },
  ];

  const auctions = (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel size="small">{text_calculator.fuelType}</InputLabel>
          <Select
            size="small"
            open={open.selectAuction}
            onClose={() => handleOpenClose("selectAuction")}
            onOpen={() => handleOpenClose("selectAuction")}
            value={value.selectAuction}
            label={text_calculator.fuelType}
            onChange={(e) => handleChange(e, "selectAuction")}
          >
            {arr.map((index) => {
              return (
                <MenuItem  key={index} value={index.name}>
                  {index.image}
                </MenuItem>
              ) 
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          type="number"
          size="small"
          label={text_calculator.carPrice}
        />
      </Grid>
      <Grid item xs={4}>
        <Button className="buttonSend" variant="outlined" fullWidth>
          save
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <AdministratorSettingsCalculatStyles>
      <Grid container spacing={4}>
        <Grid item xs={12}  sx={{ mb: { lg: "60px" }}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {auctions}
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    freeSolo
                    size="small"
                    options={auctionPlace.map((elem) => elem.name)}
                    renderInput={(params) => {
                      return (
                        <TextField
                          label={text_calculator.selectLocation}
                          {...params}
                        />
                      );
                    }}
                  />
                </Grid>
                {
                  text_calculator.selectCarType.map((index) => {
                    return (
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="number"
                          size="small"
                          label={index}
                        />
                      </Grid>
                    )
                  })
                }
                <Grid item xs={12}>
                  <Button className="buttonSend" variant="outlined" fullWidth>
                    save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              {costAccordingToCharacteristics}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AdministratorSettingsCalculatStyles>
  );
}

export default AdministratorSettingsCalculat;
