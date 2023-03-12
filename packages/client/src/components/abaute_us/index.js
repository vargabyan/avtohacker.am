import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AbouteUs = () => {
  const { t } = useTranslation();

  return (
    <Grid container my={1} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Grid item xs={9}>
            <Box
              sx={{
                height: { xs: '180px', sm: '300px', md: '400px', lg: '500px' },
              }}
            >
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/eBSzy6N6VCE'
                title='Մեքենայի ընտրությունից մինչև բանալինելի հանձնումը 🤝'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent='center' my={4} spacing={2}>
          <Grid item xs={9}>
            <Typography variant='h6' fontWeight={900}>
              {t('aboute_us.header')}
            </Typography>
            <Typography variant='body1'>{t('aboute_us.story')}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AbouteUs;
