import styled from 'styled-components';

const Wrapper = styled.aside`
  background-color: var(--white);
  width: 300px;
  height: 100%;
  transition: width 0.5s ease-in-out;
  box-shadow: 0 0 1px 0 black;
  flex-shrink: 0;

  .sidebar-container {
    transition: width 1s ease-in;
    min-width: 300px;
    height: 100%;
  }

  h4{
    margin: 0;
  }

  .logo-container {
    width: 100%;
  }

  .sidebar-show {
    width: 300px;
  }

  .link-container{
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  }

  .link{
    display: block;
    width: 100%;
    height: 5rem;
  }

  .cover{
    width: 100%;
    height: 100%;
    display: flex;
    color: var(--grey-500);
    padding-left: 0;
    transition: padding-left 0.2s ease-in-out;
  }

  .align-text{
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    padding-left: 30px;
  }

  .icon{
    font-size: 2rem;
  }

  .cover:hover{
    background-color: var(--grey-100);
    padding-left: 15px;
    color: var(--primary-500);
  }

  .active {
    background-color: var(--grey-100);
    
    .icon{
      color: var(--primary-500);
    }
    h4{
      color: var(--primary-500);
    }
    .test{
      stroke-width: 0.9px;
    }
  }
`;

export default Wrapper;