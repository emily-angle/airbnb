import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px 8px 12px;
  box-sizing: border-box;
  flex-shrink: 0;

  .slider-wrapper {
    position: relative;
    overflow: hidden;
    .indicator {
      width: 30%;
      position: absolute;
      z-index: 9;
      bottom: 5%;
      left: 0;
      right: 0;
      margin:0 auto;
      .indictor-item {
        text-align: center;
        flex-shrink: 0;
        width: 15%;
        .dot-item {
          display: inline-block;
          height: 6px;
          width:6px;
          background-color: #fff;
          border-radius: 50%;
        }
        .indicate-active {
         transform:scale(1.5,1.5);

        }
      }
    }

    .arrow-left,
    .arrow-right {
      display: none;
      position: absolute;
      top: 50%;
      width: 20%;
      z-index: 11;
      transform: translateY(-50%);

      color: #fff;
    }
    .arrow-left {
      left: 0;
    }
    .arrow-right {
      right: 0;
      transform: translate(22%, -50%);
    }
    &:hover {
      .arrow-left,
      .arrow-right {
        display: block;
      }
    }
  }
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
  .slider {
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
