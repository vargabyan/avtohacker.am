import styled from '@emotion/styled';
import map from './images/map.jpg';

const FooterStyle = styled('div')`
  width: 100%;
  background: rgba(0, 0, 0, 0.96);
  color: white;
  font-size: 11px;

  .backgroundGrid {
    min-height: 250px;

    div {
      background: url(${map});
      height: 100%;
      backgroundsize: cover;
    }
  }

  .contactItemsGrid {
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default FooterStyle;
