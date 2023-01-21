import React from 'react';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import { Perspective } from '@egjs/flicking-plugins';
import { Grid, Typography, Box } from '@mui/material';
import { ShowcaseStyle, GoodsImageStyle } from './indexStyle';
import car_1 from './images/1.jpeg';
import car_2 from './images/2.png';
import car_3 from './images/3.jpeg';
import car_4 from './images/4.jpeg';
import car_5 from './images/5.png';
import car_6 from './images/6.jpeg';

const car = [car_1, car_2, car_3, car_4, car_5, car_6];

function Showcase() {
  const plugins = [new Perspective({ rotate: 0.3 })];

  const goods = car.map((index) => (
    <GoodsImageStyle img={index}>
      <Box className="goods_image" />
    </GoodsImageStyle>
  ));

  return (
    <ShowcaseStyle>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" direction="row">
            <Grid item xs>
              <hr />
            </Grid>
            <Grid item>
              <Box
                color="white"
                border="solid 1px white"
                borderRadius="5px"
                marginTop="-10px"
              >
                <Typography padding="8px" textAlign="center" fontWeight={900}>
                  Արկա մեքենաներ եվ հատուկ առաջարկներ
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <hr />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Flicking circular plugins={plugins}>
            {goods}
          </Flicking>
        </Grid>
      </Grid>
    </ShowcaseStyle>
  );
}

export default Showcase;
