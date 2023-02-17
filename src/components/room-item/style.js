import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px 8px 12px;
  box-sizing: border-box;
  .cover {
    width: 100%;
    padding: 66.6% 0 0;
    position: relative;
    box-sizing: border-box;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    padding-top: 8px;
    color: ${(props) => props.textColor};
    font-size: 12px;
  }
  .name {
    margin-top: 4px;
    font-weight: 800;
    line-height: 1.38em;
  }
  .price {
    margin-top: 5px;
    font-size: 14px;
    color: #484848;
  }
  .rating {
    font-size: 12px;
    color: #484848;
    margin-top: 5px;
  }
`;
