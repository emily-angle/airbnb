import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .btns {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      padding: 12px;
      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
        border-radius: 22px;
      }
    }
    .icon-global {
      padding: 12px;
      cursor: pointer;
    }
    margin-right: 8px;
  }
  .profile {
    display: flex;
    position: relative;
    align-items: center;
    padding: 5px 5px 5px 12px;
    border-radius: 21px;
    border: 1px solid #ddd;
    cursor: pointer;
    .avatar {
      margin-left: 12px;
      color: #717171;
    }
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      background-color:#fff;
      font-size:14px;
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      .line{
        border-bottom:1px solid  #ddd;
      }
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
