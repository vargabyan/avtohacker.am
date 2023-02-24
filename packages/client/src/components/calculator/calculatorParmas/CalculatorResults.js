/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { CalculatorResultStyle } from './styledComponent';

const CalculatorResults = ({ dataForCalculatorResultsState }) => {
  // const {
  //   carPrice,
  //   auctionFee,
  //   shippingPrice,
  //   Insurance,
  //   serviceFee,
  //   customsDuty,
  //   vat,
  //   ecoTax,
  //   brokerFee,
  //   totalAmd,
  //   totalUsd,
  // } = dataForCalculatorResultsState;
  const { t } = useTranslation();
  t();

  return (
    <CalculatorResultStyle>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableBody>
                <TableRow key='carPrice'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'red',
                        marginRight: '5px',
                      }}
                    />
                    Մեքենայի Արժեք
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.carPrice}</TableCell>
                </TableRow>
                <TableRow key='serviceFee'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'red',
                        marginRight: '5px',
                      }}
                    />
                    Միջնորդավճար
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.serviceFee}</TableCell>
                </TableRow>
                <TableRow key='auctionFee'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'orange',
                        marginRight: '5px',
                      }}
                    />
                    Աճուրդի միջնորդավճար
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.auctionFee}</TableCell>
                </TableRow>
                <TableRow key='shippingPrice'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'orange',
                        marginRight: '5px',
                      }}
                    />
                    Տեղափոխման վճար
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.shippingPrice}</TableCell>
                </TableRow>
                <TableRow key='insurance'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'orange',
                        marginRight: '5px',
                      }}
                    />
                    Ապահովագրություն
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.insurance}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableBody>
                <TableRow key='customsDuty'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'yellow',
                        marginRight: '5px',
                      }}
                    />
                    Մաքսատուրք
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.customsDuty}</TableCell>
                </TableRow>
                <TableRow key='vat'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'yellow',
                        marginRight: '5px',
                      }}
                    />
                    ԱԱՀ
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.vat}</TableCell>
                </TableRow>
                <TableRow key='ecoTax'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'yellow',
                        marginRight: '5px',
                      }}
                    />
                    Բնապահպանական հարկ
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.ecoTax}</TableCell>
                </TableRow>
                <TableRow key='brokerFee'>
                  <TableCell>
                    <Box
                      sx={{
                        width: '5px',
                        height: '20px',
                        background: 'yellow',
                        marginRight: '5px',
                      }}
                    />
                    Բրոքերական ծառայություն
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.brokerFee}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableBody>
                <TableRow key='total'>
                  <TableCell>Ընդհանուր</TableCell>
                  <TableCell align='center'>{dataForCalculatorResultsState?.totalAmd}դ</TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.totalUsd}$</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableBody>
                <TableRow key='total' sx={{ display: 'flex' }}>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: '10px',
                            height: '55px',
                            background: 'red',
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: '10px' }}>
                          Ենթակա է վճարման մեքենան գնելուց հետո 1(մեկ) աշխատանքային օրվա ընթացքում
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align='center'>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: '10px',
                            height: '55px',
                            background: 'orange',
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: '10px', textAlign: 'start' }}>
                          Պայմանագրի կնքմանը հաջորդող 45(քառասունհինգ) օրվա ընթացքում
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align='right'>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: '10px',
                            height: '55px',
                            background: 'yellow',
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: '10px', textAlign: 'start' }}>
                          Ավտոﬔքենայի ներմուծման վերաբերյալ ծանուցումը ստանալուց հետո 3 (երեք) օրվա ընթացքում
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item>
              <Button variant='contained' sx={{ background: '#eb1921' }}>
                download
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' sx={{ background: '#eb1921' }}>
                sent to email
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CalculatorResultStyle>
  );
};

export default CalculatorResults;
