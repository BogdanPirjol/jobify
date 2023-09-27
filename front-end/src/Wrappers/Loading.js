import styled from "styled-components";

const Wrapper = styled.div`
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  padding: inherit;
  padding-bottom: 0;

  .center {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
