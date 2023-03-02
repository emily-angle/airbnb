import styled from "styled-components";
export const HeaderLeftWrapper = styled.div`
  flex: 1;
  
  .logo {
    display:inline-block;
    cursor:pointer;
    color: ${(props) => props.theme.color.primary};
  }
`;
