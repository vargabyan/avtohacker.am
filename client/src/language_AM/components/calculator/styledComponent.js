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

export const CalculatorParamsStyle = styled('div')`
  max-width: 625px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 30px;
  
  .headerText {
    font-size: 12px;
    text-align: center;
  }

  .iaaImage {
    width: 40px;
  }

  .copartImage {
    width: 40px;
  }
  .koreanImage {
    width: 40px;
  }
  .MuiToggleButtonGroup-root {
    height: 40px;

    & Button {
      border: none;
    }
    & .otherAcutionPrice {
      padding: 0;
    }
  }
  .buttonSend {
    display: block;
    margin: auto;
  }
`;

export const CalculatorResultStyle = styled('div')`
    max-width: 625px;
    margin: auto;
    margin-bottom: 50px;
  
  .css-dsuxgy-MuiTableCell-root {
    display: flex;
  }
`;

export const AdministratorSettingsCalculatStyles = styled('div')`
  max-width: 625px;
  margin: auto;
`;

export const AdministratorSettingsResaultStyles = styled('div')`
  max-width: 625px;
  margin: auto;
`;
