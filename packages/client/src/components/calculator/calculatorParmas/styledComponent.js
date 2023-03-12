import styled from '@emotion/styled';

const CalculatorParamsStyle = styled('div')`
  max-width: 625px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 30px;

  .headerText {
    font-size: 12px;
    text-align: center;
    display: block;
    padding-bottom: 36px;
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
  .highPermeability {
    color: white;
  }
`;

export default CalculatorParamsStyle;
