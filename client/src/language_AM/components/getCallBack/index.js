import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import nkar from "./images/4.jpg";

const FormCallBack = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          variant="filled"
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          variant="filled"
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          variant="filled"
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          variant="filled"
          size="small"
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          variant="filled"
          size="small"
          rows={2}
          // value={value}
          // onChange={}
        />
      </Grid>
      <Grid item xs={12}>
        <Button>+ file</Button>
      </Grid>
      <Grid item xs={12}>
        {" "}
        i'm not robot{" "}
      </Grid>
      <Grid item xs={12}>
        <Button>send</Button>
      </Grid>
    </Grid>
  );
};

function GetCallBack({ home, m }) {
  return (
    <Grid container spacing={2} justifyContent="center" mt={ m !== undefined ? m : 6 } mb={4}>
      <Grid item xs={12} display={ home ? "block" : "none" }>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={9}>
            <Typography variant="h4" fontWeight={900}>
              ՊԱՏՎԻՐԵԼ ԶԱՆԳ
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Box width="80px" height="4px" sx={{ background: "#eb1921" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography fontWeight={900}>
              Եթե ցանկանում եք, որ մասնագետը կապ հաստատի Ձեզ, կարող եք թողնել Ձեր տվյալները՝ լրացնելով հայտը։
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          <Grid item display={{ xs: "none", md: "block" }} md={6}>
            <Box
              style={{ background: `url(${nkar})`, height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCallBack />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GetCallBack;
