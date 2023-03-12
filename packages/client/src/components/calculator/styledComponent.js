import styled from '@emotion/styled';
import backImageCalculate from './images/10.jpg';

export const CalculatorStyle = styled('div')`
  margin-top: 16px;

  .calculator_parmas {
    background: url(${backImageCalculate});
    background-repeat: round;
    background-size: cover;
  }
`;

export const CalculatorResultStyle = styled('div')`
  max-width: 625px;
  margin: auto;
  margin-bottom: 50px;

  .css-dsuxgy-MuiTableCell-root {
    display: flex;
  }

  .redBox {
    width: 5px;
    height: 20px;
    background: red;
    margin-right: 5px;
  }
  .orangeBox {
    width: 5px;
    height: 20px;
    background: orange;
    margin-right: 5px;
  }
  .yellowBox {
    width: 5px;
    height: 20px;
    background: yellow;
    margin-right: 5px;
  }
  .redReminderBox {
    width: 10px;
    height: 55px;
    background: red;
  }
  .orangeReminderBox {
    width: 10px;
    height: 55px;
    background: orange;
  }
  .yellowReminderBox {
    width: 10px;
    height: 55px;
    background: yellow;
  }

  button {
    background: #eb1921;
  }
`;
