import React from "react";
import { Grid, Typography } from "@mui/material";
import { data_Contacts, data_social_network } from "./address";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { text_Footer_AM, text_Footer_EN, text_Footer_RU } from "./TextContent";
import { FooterStyle } from "./indexStyles";
import AddSocialNetworktitems from "./AddSocialNetworktitems";
import AddContactitems from "./AddContactitems";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const SocialNetworkItems = () => {
  return data_social_network.social_network.map((index) => {
    return (
      <Grid item>
        <a href={`${index.url}`}>
          <Box item>{index.Icon}</Box>
        </a>
      </Grid>
    );
  });
};

const ContactItems = ({ language, auth }) => {
  const handelDelete = (key) => {
    alert(`delete: key_${key.email}_${key.phone}`)
  }

  return data_Contacts.map((index) => {
    return (
      <Grid
        item
        className="contactItemsGrid"
        key={`key_${index.email}_${index.phone}`}
      >
        <Grid container direction="column" spacing={1}>
          <Grid item>
            {language === "EN"
              ? index.address_EN
              : language === "RU"
              ? index.address_RU
              : index.address_AM}
          </Grid>
          <Grid item>
            <a href={`mailto:${index.email}`}>{index.email}</a>
          </Grid>
          <Grid item>
            <a href={`tel:${index.phone}`}>{index.phone}</a>
          </Grid>
          <Grid item sx={{display: auth ? "block" : "none"}}>
            <Fab
              onClick={() => handelDelete(index)}
              color="primary"
              aria-label="add"
              size="small"
              style={{ background: "#eb1921" }}
            >
              <DeleteForeverIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    );
  });
};

function Footer() {
  const language = useSelector((state) => state.languageReducer.value);
  const auth = useSelector((state) => state.authenticationReducer.value);
  const contentText_footer =
    language === "EN"
      ? text_Footer_EN
      : language === "RU"
      ? text_Footer_RU
      : text_Footer_AM;
  const contentText_data_social_network =
    language === "EN"
      ? data_social_network.header.EN
      : language === "RU"
      ? data_social_network.header.RU
      : data_social_network.header.AM;

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className="backgroundGrid">
          <div />
        </Grid>
        <Grid item xs={12} sm={6} md={8} p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{contentText_footer.header}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={9}>
                  <Grid container spacing={2}>
                    <ContactItems language={language} auth={auth} />
                    <AddContactitems auth={auth} language={language} />
                  </Grid>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {contentText_data_social_network}
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <SocialNetworkItems />
                        <AddSocialNetworktitems auth={auth}  language={language}/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterStyle>
  );
}

export default Footer;
