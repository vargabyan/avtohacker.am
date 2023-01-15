import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  text_terms_and_conditions_Header_AM,
  text_terms_and_conditions_Header_EN,
  text_terms_and_conditions_Header_RU,
  text_terms_and_conditions_content_EN,
  text_terms_and_conditions_content_RU,
  text_terms_and_conditions_content_AM,
} from "./TextContent";

function Services({ home }) {
  const language = useSelector((state) => state.languageReducer.value);
  const headerText =
    language === "EN"
      ? text_terms_and_conditions_Header_EN
      : language === "RU"
      ? text_terms_and_conditions_Header_RU
      : text_terms_and_conditions_Header_AM;
  const serviceItemText =
    language === "EN"
      ? text_terms_and_conditions_content_EN
      : language === "RU"
      ? text_terms_and_conditions_content_RU
      : text_terms_and_conditions_content_AM;

  const ServiceItem = () => {
    const array = [];
    for (const key in serviceItemText) {
      array.push(
        <Grid item xs={10} sm={6} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <span
                    className={serviceItemText[key].icon}
                    style={{ color: "red", fontSize: 70 }}
                  />
                </Grid>
                <Grid item>
                  <Typography fontWeight={900}>
                    {serviceItemText[key].header}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                {serviceItemText[key].content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return array;
  };

  return (
    <Grid container spacing={4} justifyContent="center" mb={6} mt={1}>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight={900}
              align={home ? "start" : "center"}
            >
              {headerText.header}
            </Typography>
          </Grid>
          <Grid item xs={12} display={home ? "block" : "none"}>
            <Box width="80px" height="4px" sx={{ background: "#eb1921" }} />
          </Grid>
          <Grid item xs={12} display={home ? "block" : "none"}>
            <Typography fontWeight={900}>
              {headerText.hidden_header}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={4} justifyContent="center">
          <ServiceItem />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
