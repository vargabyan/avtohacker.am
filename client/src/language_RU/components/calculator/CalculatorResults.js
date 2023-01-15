import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CalculatorResultStyle } from "./styledComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import {
  text_content_calculatorResult_AM,
  text_content_calculatorResult_EN,
  text_content_calculatorResult_RU,
} from "./TextContent";
import { Box } from "@mui/system";

const CalculatorResults = ({ languige }) => {
  const contentText =
    languige === "AM"
      ? text_content_calculatorResult_AM
      : languige === "EN"
      ? text_content_calculatorResult_EN
      : text_content_calculatorResult_RU;

  return (
    <CalculatorResultStyle>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow key={contentText.carPrice}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "red",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.carPrice}
                  </TableCell>
                  <TableCell align="right">10000</TableCell>
                </TableRow>
                <TableRow key={contentText.serviceFee}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "red",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.serviceFee}
                  </TableCell>
                  <TableCell align="right">200</TableCell>
                </TableRow>
                <TableRow key={contentText.auctionFee}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "orange",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.auctionFee}
                  </TableCell>
                  <TableCell align="right">902</TableCell>
                </TableRow>
                <TableRow key={contentText.shippingPrice}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "orange",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.shippingPrice}
                  </TableCell>
                  <TableCell align="right">3000</TableCell>
                </TableRow>
                <TableRow key={contentText.Insurance}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "orange",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.Insurance}
                  </TableCell>
                  <TableCell align="right">600</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow key={contentText.customsDuty}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "yellow",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.customsDuty}
                  </TableCell>
                  <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow key={contentText.vat}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "yellow",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.vat}
                  </TableCell>
                  <TableCell align="right">3000</TableCell>
                </TableRow>
                <TableRow key={contentText.ecoTax}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "yellow",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.ecoTax}
                  </TableCell>
                  <TableCell align="right">0</TableCell>
                </TableRow>
                <TableRow key={contentText.brokerFee}>
                  <TableCell>
                    <Box
                      sx={{
                        width: "5px",
                        height: "20px",
                        background: "yellow",
                        marginRight: "5px",
                      }}
                    />
                    {contentText.brokerFee}
                  </TableCell>
                  <TableCell align="right">70</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow key="total">
                  <TableCell>{contentText.total}</TableCell>
                  <TableCell align="center">1000000դ</TableCell>
                  <TableCell align="right">20100$</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow key="total" sx={{ display: "flex" }}>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: "10px",
                            height: "55px",
                            background: "red",
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: "10px" }}>
                          Ենթակա է վճարման մեքենան գնելուց հետո 1(մեկ)
                          աշխատանքային օրվա ընթացքում
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="center">
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: "10px",
                            height: "55px",
                            background: "orange",
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: "10px", textAlign: "start" }}>
                          Պայմանագրի կնքմանը հաջորդող 45(քառասունհինգ) օրվա
                          ընթացքում
                        </Box>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box
                          sx={{
                            width: "10px",
                            height: "55px",
                            background: "yellow",
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Box sx={{ fontSize: "10px", textAlign: "start" }}>
                          Ավտոﬔքենայի ներմուծման վերաբերյալ ծանուցումը ստանալուց
                          հետո 3 (երեք) օրվա ընթացքում
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
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" sx={{ background: "#eb1921" }}>
                download
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ background: "#eb1921" }}>
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
