import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import photo from "./images/1592320717-1590928402-1590759223-team.jpg";

function AbouteUs() {
  const auth = useSelector((state) => state.authenticationReducer.value);

  return (
    <Grid container my={1} spacing={6}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={9}>
            <Box sx={{ height: { xs: "180px", sm: "300px", md: "400px", lg: "500px" } }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eBSzy6N6VCE"
                title="Մեքենայի ընտրությունից մինչև բանալինելի հանձնումը 🤝"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h6" fontWeight={900}>
              IAA MOTORS ԸՆԿԵՐՈՒԹՅԱՆ ՄԱՍԻՆ
            </Typography>
            <Typography variant="body1">
              IAA MOTORS ընկերությունը հանդիսանում է Ամերիկայի խոշորագույն Insurance Auto Auction (IAA) ավտոաճուրդի պաշտոնակն ներկայացուցիչը Հայաստանում։

Ընկերությունը հիմնադրվել է 2003 թ․-ին՝ բացելով առաջին մասնաճյուղը Վրաստանում, այնուհետև ընդլայնվելով, 2016թ․-ին նոր մասնաճյուղեր է բացել Հայաստանում և 2017թ․-ին՝ Ուկրաինայում։ Այսօր IAA MOTORS-ը ներկայանում է 7 մասնաճյուղով, 3 երկրներում։

Երկրորդական շուկայի ավտոմեքենաները ունեն մեծ պահանջարկ առաջին հերթին իրենց գնի գերմատչելի լինելու շնորհիվ։ Անգամ թեթևակի վթարը կարող է մինչև 3 անգամ նվազեցնել մեքենայի շուկայական գինը։ Իսկ հուսալի վերանորոգումը, որը անհամեմատ մատչելի է ներկրվող երկրներում (ԱՄՆ-ի համեմատությամբ), թույլ կտա վերադարձնել մեքենայի նախնական տեսքը, որակը և ապահով գործարկել այն երկար տարիներ։
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{background: `url(${photo})`, height: "100%", backgroundSize: "cover"}}/>
      </Grid>
    </Grid>
  );
}

export default AbouteUs;
