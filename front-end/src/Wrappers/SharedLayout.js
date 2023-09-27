import styled from "styled-components";

const Wrapper = styled.main`
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;

  .dashboard {
    display: flex;
    height: 100%;;
  }

  .column-sidebar{
    
  }

  .column-nav {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .color{
    color: var(--primary-400);
  }
 
`;

export default Wrapper;
