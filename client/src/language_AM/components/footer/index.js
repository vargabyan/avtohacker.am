import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { data_Contacts, data_social_network } from "./address";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { FooterStyle } from "./indexStyles";
import AddSocialNetworktitems from "./AddSocialNetworktitems";
import AddContactitems from "./AddContactitems";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLocation } from "react-router-dom";

const AdminButton = ({ setAdminButtonState, auth }) => {
  const location = useLocation();
  const handelClick = () => {
    setAdminButtonState(true);
    window.scrollTo({ top: 0 });
  };

  return location.pathname === "/am/adm" && !auth ? (
    <Grid item>
      <Button color="inherit" size="small" onClick={handelClick}>մեր աշխատակազմի համար</Button>
    </Grid>
  ) : undefined;
};

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
    alert(`delete: key_${key.email}_${key.phone}`);
  };

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
          <Grid item sx={{ display: auth ? "block" : "none" }}>
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

function Footer({ setAdminButtonState }) {
  const auth = useSelector((state) => state.authenticationReducer.value);

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className="backgroundGrid">
          <div />
        </Grid>
        <Grid item xs={12} sm={6} md={8} p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>ԿԱՊ</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={9}>
                  <Grid container spacing={2}>
                    <ContactItems auth={auth} />
                    <AddContactitems auth={auth} />
                  </Grid>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {data_social_network.header}
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <SocialNetworkItems />
                        <AddSocialNetworktitems auth={auth} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AdminButton
                    setAdminButtonState={setAdminButtonState}
                    auth={auth}
                  />
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
