import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`
  display: flex;
  height: 600px;
  .left {
    width: 50%;
    overflow: hidden;
    img {
      height: 100%;
      transition: transform ease 200ms;
    }
    &:hover {
      img {
        transform: scale(1.1, 1.1);
      }
    }
  }
  .right {
    width: 50%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    > .item {
      width: 50%;
      height: 50%;
      position: relative;
      overflow: hidden;
      img {
        height: 100%;
        transition: transform ease 200ms;
      }
      &:hover {
        img {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
  .left,
  .right {
    height: 100%;
    position: relative;
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 9;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity ease 200ms;
    }
  }
  &:hover {
    .cover {
      opacity: 1;
    }
  }
  .item {
    &:hover {
      .cover {
        opacity: 0;
      }
    }
  }
  .cover {
    &:hover {
      opacity: 0;
    }
  }
`;
