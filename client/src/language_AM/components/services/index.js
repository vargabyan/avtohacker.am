import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "./icons/style.css";

const dataServiceItem = {
  car_selection: {
    icon: "icon-icon_1",
    header: "Ավտոﬔքենայի ընտրություն",
    content: "Անհատական մոտեցում ﬔր փորձառու մասնագետների կողﬕց ﬔքենաների ընտրության , գնագոյացման հաշվարկի և այլ ծախսերի վերաբերյալ",
  },
  deposit_payment: {
    icon: "icon-icon_2",
    header: "Դեպոզիտի վճարում",
    content: "Նախատեսված աճուրդի գնի 15%-ի չափով, բայց ոչ պակաս քան 500000 դրամ։ Դեպոզիտը ենթակա է վերադաձի ﬕնչև ﬔքենայի գնելը։",
  },
  car_history: {
    icon: "icon-icon_3",
    header: "Մեքենայի պատմություն",
    content: "Նախքան աճուրդի մասնակցելը Ձեր ﬔնեջերը կստուգի նախընտրած ﬔքենայի պատմությունը (autocheck , carfax)",
  },
  participation_in_the_auction: {
    icon: "icon-icon_4",
    header: "Աճուրդի մասնակցություն",
    content: "Ձեր ներկայությամբ կամ օնլայն տարբերակով մասնակցում ենք աճուրդին և գնում ﬔքենան պլանավորված գնով",
  }, 
  contract_Signing: {
    icon: "icon-icon_5",
    header: "Պայմանագրի կնքում",
    content: "Որտեղ ամրագրվում է ﬔքենայի վերջնական արժեքը ՀՀում, վճարման 3 փուլերը, կողﬔրի իրավունքներն ու պարտականությունները:",
  },
  nland_transportation: {
    icon: "icon-icon_6",
    header: "ներքին փոխադրումներ",
    content: "Մեքենան աճուրդից տեղափոխվում է համապատասխան նավահանգիստ, հասնելուն պես տրամադրվում են ավտոﬔքենայի հավելյալ լուսանկարներ",
  },
  insurance: {
    icon: "icon-icon_7",
    header: "ապահովագրություն",
    content: "Նավահանգստի նկարների հիման վրա կատարվում է տեղափոխման ապահովագրություն տեղական առաջատար ապահովագրական ընկերությունների ﬕջոցով",
  },
  sea_freight: {
    icon: "icon-icon_8",
    header: "ծովային բեռնափոխադրումներ",
    content: "Ավտոﬔքենան բեռնվում է կոնտեյների ﬔջ, որի հատուկ համարի օգնությամբ կարող եք հետևել Ձեր գույքի տեղաշարժին",
  },
  customs_clearance: {
    icon: "icon-icon_9",
    header: "մաքսազերծում",
    content: "Մեր մասնագետների ներկայությամբ ﬔքենան բեռնաթափվում է կոնտեյներից և մաքսազերծվում է ﬔր բրոքերական կազմակերպության ﬕջոցով",
  },
  delivery: {
    icon: "icon-icon_10",
    header: "Հանձնում",
    content: "Արդեն մաքսազերծված ﬔքենան հանձնվում է Ձեզ առուվաճառքի պայմանագրի հիման վրա"
  }
}

function Services({ home }) {
  const ServiceItem = () => {
    const array = [];
    for (const key in dataServiceItem) {
      array.push(
        <Grid item xs={10} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <span
                    className={dataServiceItem[key].icon}
                    style={{ color: "red", fontSize: 70 }}
                  />
                </Grid>
                <Grid item xs>
                  <Grid container alignContent="center" height="100%">
                    <Grid item>
                      <Typography fontWeight={900}>
                        {dataServiceItem[key].header}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                {dataServiceItem[key].content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return array;
  };

  return (
    <Grid container spacing={4} justifyContent="center" mb={6} mt={1}>
      <Grid item xs={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight={900}
              align={home ? "start" : "center"}
            >
              ՄԵԶ ՀԵՏ ԳՆԵԼԸ ՇԱՀԱՎԵՏ Է ԵՎ ԱՊԱՀՈՎ
            </Typography>
          </Grid>
          <Grid item xs={12} display={home ? "block" : "none"}>
            <Box width="80px" height="4px" sx={{ background: "#eb1921" }} />
          </Grid>
          <Grid item xs={12} display={home ? "block" : "none"}>
            <Typography fontWeight={900}>
              ՍՏԱՑԵ՛Ք ԲՈԼՈՐ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ՝ 1 ՓԱԹԵԹՈՒՄ
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={4} justifyContent="center">
          <ServiceItem />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
