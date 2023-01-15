import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import nkar from "./images/4.jpg"

function GetCallBack() {
  return (
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={5}>
      {/* <Box style={{ background: "rgba(255, 154, 63, 1) 0%", height: "100%", width: "100%"}}/> */}
      <Box style={{ background: `url(${nkar})`, height: "100%", width: "100%"}}/>
    </Grid>
    <Grid item xs={5}>
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
        <Grid item xs={12}> i'm not robot </Grid>
        <Grid item xs={12}>
          <Button>
            send
          </Button>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  )
}

export default GetCallBack