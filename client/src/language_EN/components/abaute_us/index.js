import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  text_abiute_us_AM,
  text_abiute_us_EN,
  text_abiute_us_RU,
} from "./contentTexts";
import photo from "./images/1592320717-1590928402-1590759223-team.jpg";

function AbouteUs() {
  const language = useSelector((state) => state.languageReducer.value);
  const auth = useSelector((state) => state.authenticationReducer.value);

  return (
    <Grid container my={1} spacing={6}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={9}>
            <Box sx={{ height: { xs: "180px", sm: "300px", md: "400px", lg: "500px" } }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eBSzy6N6VCE"
                title="Մեքենայի ընտրությունից մինչև բանալինելի հանձնումը 🤝"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              {language === "EN"
                ? text_abiute_us_EN.header
                : language === "RU"
                ? text_abiute_us_RU.header
                : text_abiute_us_AM.header}
            </Typography>
            <Typography variant="body1">
              {language === "EN"
                ? text_abiute_us_EN.text
                : language === "RU"
                ? text_abiute_us_RU.text
                : text_abiute_us_AM.text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{background: `url(${photo})`, height: "100%", backgroundSize: "cover"}}/>
      </Grid>
    </Grid>
  );
}

export default AbouteUs;
