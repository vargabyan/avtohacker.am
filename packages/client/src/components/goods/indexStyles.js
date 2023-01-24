import styled from '@emotion/styled';

export const SearchItemStyle = styled('div')`
  width: 100%;
  background: #e6e7e8;

  input {
    width: 100%;
    height: 40px;
    background: #e6e7e8;
    border: unset;
    padding-right: 10px;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
  }

  button {
    padding: 0;
    margin: 0;
    min-width: auto;
  }
`;

export const FilterItemStyle = styled('div')`
  background: #e6e7e8;
  height: 44px;

  button {
    padding: 0;
    margin: 0;
    min-width: auto;
  }

  .icon-button {
    padding: 0;
    margin: 0;
    width: 38px;
    height: 38px;
    min-width: auto;
    margin-left: 5px;
  }

  .icon-name {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.77);
    font-size: 12px;
    font-weight: 600;
  }

  i {
    color: rgba(0, 0, 0, 0.5);
    font-size: 30px;
    background: white;
    margin: auto;
    display: grid;
    align-content: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const ListItemStyle = styled('div')`
  max-width: 325px;
  position: relative;
`;
