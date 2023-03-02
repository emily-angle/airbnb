import styled from "styled-components";
export const DemoWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
  overflow: hidden;
  border: 1px solid #ccc;

  .indictor-item {
    flex-basis: 40px;
    text-align: center;
    flex-shrink: 0;
    background-color: #ddd;
    margin-right: 5px;
  }
  .indicate-active {
    color: #fff;
    background-color: red;
  }
`;
