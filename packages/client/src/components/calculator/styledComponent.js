import styled from '@emotion/styled';
import backImageCalculate from './images/10.jpg';

const CalculatorStyle = styled('div')`
  margin-top: 16px;

  .calculator_parmas {
    background: url(${backImageCalculate});
    background-repeat: round;
    background-size: cover;
  }
`;
export default CalculatorStyle;
