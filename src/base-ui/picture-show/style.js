import styled from "styled-components";

export const PictureShowWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #333;
  display: flex;
  flex-direction: column;

  .top {
    text-align: right;
    padding: 25px;
    height: 86px;
    position: relative;
    .close-btn {
      position: absolute;
      right: 25px;
    }
  }
  .slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex: 1;
    .container {
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 100% !important;
      max-width: 105vh !important;
      .fade-enter {
        opacity: 0;
        transform: translate(${(prop) => (prop.isNext ? "100%" : "-100%")});
      }
      .fade-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all ease 150ms;
      }

      .fade-exit {
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transition: all ease 150ms;
      }
      img {
        user-select: none;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
      }
    }

    .controls {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .preview {
    height: 100px;
    width:100%;
    max-width: 105vh;
    margin: 10px auto 0;
    color: #fff;
    .desc {
      display: flex;
      justify-content: space-between;
      .toggle {
        cursor: pointer;
      }
    }
    .list {
      margin-top: 3px;
      overflow: hidden;
      transition: height 300ms ease;
      img {
        height: 67px;
        opacity: 0.5;
        margin-right: 15px;
        cursor: pointer;
        &.active,
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
