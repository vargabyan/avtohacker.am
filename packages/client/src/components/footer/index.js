import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTranslation } from 'react-i18next';
import FooterStyle from './FooterStyleStyles';
import AddSocialNetworktitems from './AddSocialNetworktitems';
import AddContactitems from './AddContactitems';
import { data_Contacts, data_social_network } from './address';

const SocialNetworkItems = () =>
  data_social_network.social_network.map((index) => (
    <Grid item key={`${index.url}`}>
      <a href={`${index.url}`}>
        <Box item>{index.Icon}</Box>
      </a>
    </Grid>
  ));

const defineLanguage = (language, { address_EN, address_AM, address_RU }) => {
  switch (language) {
    case 'EN':
      return address_EN;
    case 'RU':
      return address_RU;
    default:
      return address_AM;
  }
};

const ContactItems = ({ language, auth }) => {
  const handelDelete = (key) => {
    console.log(`delete: key_${key.email}_${key.phone}`);
  };

  return data_Contacts.map((index) => (
    <Grid item className='contactItemsGrid' key={`key_${index.email}_${index.phone}`}>
      <Grid container direction='column' spacing={1}>
        <Grid item>{defineLanguage(language, index)}</Grid>
        <Grid item>
          <a href={`mailto:${index.email}`}>{index.email}</a>
        </Grid>
        <Grid item>
          <a href={`tel:${index.phone}`}>{index.phone}</a>
        </Grid>
        <Grid item sx={{ display: auth ? 'block' : 'none' }}>
          <Fab
            onClick={() => handelDelete(index)}
            color='primary'
            aria-label='add'
            size='small'
            style={{ background: '#eb1921' }}
          >
            <DeleteForeverIcon />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  ));
};

const Footer = () => {
  const { t } = useTranslation();
  const auth = useSelector((state) => state.authenticationReducer.value);

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className='backgroundGrid'>
          <div />
        </Grid>
        <Grid item xs={12} sm={6} md={8} p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{t('footer.header')}</Typography>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterStyle>
  );
};

export default Footer;
