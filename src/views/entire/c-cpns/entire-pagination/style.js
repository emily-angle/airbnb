import styled from "styled-components";
export const EntirePaginationWrapper = styled.div`
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    .MuiPaginationItem-page{
      margin:0 3px;
      &:hover{
        text-decoration:underline;
      }
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
    }
    .desc{
      margin-top:16px;
      color:#484848;
    }
  }
`;
