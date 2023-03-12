import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { CalculatorResultStyle } from './StyledComponent';

const CalculatorResults = ({ dataForCalculatorResultsState }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (dataForCalculatorResultsState) {
      window.scrollTo({ top: 380 });
    }
  }, [dataForCalculatorResultsState]);

  return (
    <CalculatorResultStyle>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table size='small'>
              <TableBody>
                <TableRow key='carPrice'>
                  <TableCell>
                    <Box className='redBox' />
                    {t('calculate.calculatorResult.carPrice')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.carPrice}</TableCell>
                </TableRow>
                <TableRow key='serviceFee'>
                  <TableCell>
                    <Box className='redBox' />
                    {t('calculate.calculatorResult.serviceFee')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.serviceFee}</TableCell>
                </TableRow>
                <TableRow key='auctionFee'>
                  <TableCell>
                    <Box className='orangeBox' />
                    {t('calculate.calculatorResult.auctionFee')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.auctionFee}</TableCell>
                </TableRow>
                <TableRow key='shippingPrice'>
                  <TableCell>
                    <Box className='orangeBox' />
                    {t('calculate.calculatorResult.shippingPrice')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.shippingPrice}</TableCell>
                </TableRow>
                <TableRow key='insurance'>
                  <TableCell>
                    <Box className='orangeBox' />
                    {t('calculate.calculatorResult.insurance')}
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
                    <Box className='yellowBox' />
                    {t('calculate.calculatorResult.customsDuty')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.customsDuty}</TableCell>
                </TableRow>
                <TableRow key='vat'>
                  <TableCell>
                    <Box className='yellowBox' />
                    {t('calculate.calculatorResult.vat')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.vat}</TableCell>
                </TableRow>
                <TableRow key='ecoTax'>
                  <TableCell>
                    <Box className='yellowBox' />
                    {t('calculate.calculatorResult.ecoTax')}
                  </TableCell>
                  <TableCell align='right'>{dataForCalculatorResultsState?.ecoTax}</TableCell>
                </TableRow>
                <TableRow key='brokerFee'>
                  <TableCell>
                    <Box className='yellowBox' />
                    {t('calculate.calculatorResult.brokerFee')}
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
                  <TableCell>{t('calculate.calculatorResult.total')}</TableCell>
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
                        <Box className='redReminderBox' />
                      </Grid>
                      <Grid item xs={10}>
                        <Box fontSize='10px'>{t('calculate.calculatorResult.reminder.part1')}</Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align='center'>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box className='orangeReminderBox' />
                      </Grid>
                      <Grid item xs={10}>
                        <Box fontSize='10px' textAlign='start'>
                          {t('calculate.calculatorResult.reminder.part2')}
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align='right'>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box className='yellowReminderBox' />
                      </Grid>
                      <Grid item xs={10}>
                        <Box fontSize='10px' textAlign='start'>
                          {t('calculate.calculatorResult.reminder.part3')}
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
              <Button variant='contained'>{t('calculate.calculatorResult.button.download')}</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>{t('calculate.calculatorResult.button.sendToMail')}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CalculatorResultStyle>
  );
};

export default CalculatorResults;
