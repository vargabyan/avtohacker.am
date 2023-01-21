import { styled } from '@mui/system';

export const ShowcaseStyle = styled('div')`
  background: rgba(0,0,0);
  padding-top: 35px;
  padding-bottom: 30px;
`;

export const GoodsImageStyle = styled('div')`
  width: 300px;
  height: 200px;

  .goods_image {
    background: ${({ img }) => `url(${img})`};
    width: 100%;
    height: 100%;
    background-repeat: space;
    background-position: center;
    background-size: cover;
  }
`;
