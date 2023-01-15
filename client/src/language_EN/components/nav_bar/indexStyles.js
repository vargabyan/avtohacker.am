import styled from "@emotion/styled";

export const LanguageStyle = styled('div')`
  width: 55px;
  float: right;
`;

export const DrawerAppBarStyle = styled('div')`
  .systemControlBox {
    height: 28px;
    background: #eb1921;
    color: white;
    text-align: center;
    font-weight: 700;
  }
  .logo {
    color: black;
    font-weight: 900;
    text-decoration: none;
  }
  .calculateIconBox {
    text-align: end;
  }

  .navItems {  
    text-align: center;

    button {
      font-size: 16px;
      font-weight: 700;
      color: black; 
      margin-left: 12px; 
      margin-right: 12px;
    }

    a {
      text-decoration: none;
    }

    .order_a_call {
      border: double white 6px;
      border-radius: 8px;
      background: #eb1921;
      color: white;
      padding-left: 18px;
      padding-right: 18px;
    }
  }
`;

export const DrawerChildrenElementStyle = styled('div')`
  .navDrawerBox {
    text-align: center;

    .logo {
      color: black;
      font-weight: 900;
    }

    a {
      text-decoration: none;
    }
    
    .css-10hburv-MuiTypography-root {
      font-weight: 700 ;
      color: black;
    }
  }
`;

export const TelephonNumberLineStyle = styled('div') `
  .gridBackground {
    width: 100%;
    height: 30px;
    background: #474141;
    color: white;
  }

  a {
    text-decoration: none;
    font-size: 14px;
  }
`;