import React from "react";
import Banner from "../banner";
import Services from "../services";
import GetCallBack from "../getCallBack";
import { Grid, Typography, Box } from "@mui/material";
import Showcase from "../showcase";
import { useSelector } from "react-redux";

function Home() {
  const language = useSelector((state) => state.languageReducer.value);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Showcase />
      </Grid>
      <Grid item xs={12}>
        <Services home />
      </Grid>
      <Grid item xs={12} mt={4} mb={6}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={10}>
            <Typography variant="h4" fontWeight={900}>
              {language === "EN"
                ? "ORDER A CALL"
                : language === "RU"
                ? "ЗАКАЗАТЬ ЗВОНОК"
                : "ՊԱՏՎԻՐԵԼ ԶԱՆԳ"}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Box width="80px" height="4px" sx={{ background: "#eb1921" }} />
          </Grid>
          <Grid item xs={10}>
            <Typography fontWeight={900}>
              {language === "EN"
                ? "If you want our specialist to contact you, leave your details by filling out the form below.."
                : language === "RU"
                ? "Если вы хотите, чтобы с вами связался наш специалист, оставьте свои данные, заполнив заявку."
                : "Եթե ցանկանում եք, որ մասնագետը կապ հաստատի Ձեզ, կարող եք թողնել Ձեր տվյալները՝ լրացնելով հայտը։"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GetCallBack />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
