import styled from "styled-components";
export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .tab-content {
    overflow: hidden;
    .scroll-content {
      display: flex;
    }
  }

  .control {
    display: flex;
    z-index:8;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    top: 50%;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  .arrow-left {
    left: 0;
    transform: translate(-50%, -50%);
  }
  .arrow-right {
    right: 0;
    transform: translate(50%, -50%);
  }
`;
