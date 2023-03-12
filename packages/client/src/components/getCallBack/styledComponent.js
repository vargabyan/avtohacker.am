import styled from '@emotion/styled';
import nkar from './images/4.jpg';

const GetCallBackStyles = styled('div')`
  .headerImg {
    background: url(${nkar});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: bottom;
  }
  .attachCalculation {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .orderACall {
    background-color: #eb1921;
  }
  .redLine {
    background: #eb1921;
  }
`;

export default GetCallBackStyles;
