import styled from "styled-components";

const Wrapper = styled.nav`
  height: 10vh;
  min-height: 110px;
  background-color: var(--white);
  box-shadow: 2px 0px 2px 0px black;

  .element-container {
    width: 33%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }

  .align-center {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .logo{
    width: 10rem;
  }

  .hamburger{
    font-size: 2.5rem;
    margin-left: 1.25rem;
    color: var(--primary-500);
  }

  .justify-right{
    justify-content: flex-end;
  }

  .justify-center{
    justify-content: center;
  }

  .primary {
    margin-right: 1.35rem;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    border: 1px solid  transparent;
    justify-content: space-around;
    border-radius: 5px;
    height: 2.1rem;
    width: 100%;
  }

  .logout-icon{
    font-size: 2.25rem;
    margin-right: 5px;
    color: white;
  }

  .pointer-cursor:hover{
    cursor: pointer;
  }

  .secondary {
    width: 100%;
    height: 3rem;
    background-color: var(--white);
    position: absolute;
    margin-top: 2px;
    transition: height 0.2s ease-in-out;
    overflow-y: hidden;
  }

  .menu-item{
    text-align: center;
    margin: 0;
    font-size: 1.25rem;
    color: var(--primary-500);
    padding: 0.35rem;
    border: 1px solid var(--primary-500);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width:100%;
    height: 100%;
    background-color: transparent;
  }

  .menu-item:hover{
    color: white;
    background-color: var(--primary-300);
    cursor: pointer;
  }

  .dropdown-hide {
    height: 0;
  }

  h3{
    margin: 0 auto;
  }

  .logout{
    background-color: var(--primary-500);
  }

  .logout:hover{
    background-color: var(--primary-400);
  }

  button p {
    color: white;
    margin: 0;
    padding: 0;
    min-width: 0;
    font-size: 1.25rem;
  }

  .username{
    max-width: 10rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .logout-container{
    position: relative;
    margin-right: 1.5rem;
  }
`;

export default Wrapper;
