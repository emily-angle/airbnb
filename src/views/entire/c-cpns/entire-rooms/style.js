import styled from "styled-components";
export const EntireRoomsWrapper = styled.div`
  padding: 30px 20px;
  position:relative;
  .title{
    color:#222;
    font-size:22px;
    font-weight:700;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  >.cover{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:11;
    background-color:rgba(255,255,255,.8);
  }
`;
