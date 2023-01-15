import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const data = ["facebook", "instagrem"];

const AddSocialNetworktitems = ({ auth, language }) => {
  const [switchState, setSwitchState] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const validationSchema = yup.object({
    socialNetwork: yup
      .string("Enter your social network")
      .min(1, "social network should be of minimum 1 characters length")
      .required("social network is required"),
    url: yup
      .string("Enter your url")
      .url("Enter a valid url")
      .required("url is required"),
  });

  const formik = useFormik({
    initialValues: {
      socialNetwork: "",
      url: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handelClick = (param) => {
    setSwitchState(!switchState);

    if (param === "cancel") {
      formik.values.socialNetwork = "";
      formik.values.url = "";
      formik.errors.socialNetwork = "";
      formik.errors.url = "";
      formik.touched.socialNetwork = "";
      formik.touched.url = "";
    }
  };

  const menuItemArr = data.map((index) => {
    return (
      <MenuItem value={index} key={index}>
        {index}
      </MenuItem>
    );
  });

  const formForAdd = (
    <Box
      sx={{
        background: "white",
        padding: "16px",
        borderRadius: "5px",
        maxWidth: "200px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel
                size="small"
                error={
                  Boolean(formik.touched.socialNetwork) &&
                  Boolean(formik.errors.socialNetwork)
                }
              >
                social network
              </InputLabel>
              <Select
                label="social network"
                name="socialNetwork"
                size="small"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={formik.values.socialNetwork}
                error={
                  Boolean(formik.touched.socialNetwork) &&
                  Boolean(formik.errors.socialNetwork)
                }
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {menuItemArr}
              </Select>
              <FormHelperText
                error={
                  Boolean(formik.touched.socialNetwork) &&
                  Boolean(formik.errors.socialNetwork)
                }
              >
                {formik.touched.socialNetwork && formik.errors.socialNetwork}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              name="url"
              label="url"
              value={formik.values.url}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.url) && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
          </Grid>

          <Grid item xs={6} md={12} lg={6}>
            <Button
              size="small"
              onClick={() => handelClick("cancel")}
              color="primary"
              variant="contained"
              fullWidth
              style={{ background: "#eb1921" }}
            >
              cancel
            </Button>
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={{ background: "#eb1921" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );

  const buttonAdd = (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="p">
              {language === "EN"
                ? "Add social network"
                : language === "RU"
                ? "Добавить соцсеть "
                : "Ավելացնել սոցիալական ցանց"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Fab
              onClick={handelClick}
              color="primary"
              aria-label="add"
              size="small"
              style={{ background: "#eb1921" }}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item sx={{ display: auth ? "block" : "none" }}>
      <Grid container>
        <Grid item sx={{ display: !switchState ? "flex" : "none" }}>
          {buttonAdd}
        </Grid>
        <Grid item sx={{ display: switchState ? "block" : "none" }}>
          {formForAdd}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddSocialNetworktitems;
