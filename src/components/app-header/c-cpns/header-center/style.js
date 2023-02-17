import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
  .search-bar {
    width: 300px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 40px;
    ${(props) => props.theme.mixin.boxShadow}
    .label {
      padding: 0 16px;
    }
    .icon {
      padding: 10px;
      margin:0 7px;
      border-radius: 16px;
      background-color: ${(props) => props.theme.color.primary};
      color: #fff;
    }
  }
`;
