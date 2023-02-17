import styled from "styled-components";
export const SectionTabsWrapper = styled.div`
  /* overflow: hidden; */
  margin: 20px 0;
  .tab-content {
  
    overflow: hidden;
    .scroll-content {
      position: relative;
      display: flex;
    }
  }
  .item {
    flex-basis: 140px;
    flex-shrink: 0;
    height: 48px;
    line-height: 48px;
    border: solid 0.5px #d8d8d8;
    border-radius: 3px;
    margin-right: 16px;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
    ${(props) => props.theme.mixin.boxShadow}
    &.active {
      background-color: ${(props) => props.theme.color.secondary};
      color: #fff;
    }
  }
`;
