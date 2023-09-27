import styled from "styled-components";
import breakpoints from "../graphics/devices-sizes";

const Wrapper = styled.div`
  & {
    height: 100vh;
    border: 1px solid transparent;
  }

  .form {
    width: 24rem;
    padding: 0 2rem;
    margin: 20vh auto;
    background-color: var(--white);
    border-radius: 0.4rem;
    box-shadow: 0 0 0.5rem 0 var(--grey-400);
    border: 1px solid transparent;
  }

  .logo {
    margin: 0 auto;
  }

  h3 {
    margin: 0 auto;
    text-align: center;
    color: var(--grey-700);
  }

  .form-row {
    width: 100%;
    margin: 2vh auto;
  }

  .form-label {
    display: block;
    margin-bottom: 0.2rem;
  }

  .form-input {
    width: 100%;
    height: 1.75rem;
    font-size: 1.075rem;
    padding: 1rem 0.75rem;
    border: none;
    background-color: var(--grey-100);
    border-radius: 0.25rem;
  }

  .btn {
    font-size: 1.3rem;
    padding: 0.45rem;
    margin: 1rem auto;
    letter-spacing: 0.2px;
  }
  .paragraph {
    min-width: 0;
    margin: 1.25rem auto 1.25rem;
    text-align: center;
  }

  input:-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  .link-btn {
    border: none;
    background-color: transparent;
    color: var(--primary-500);
    font-size: 1rem;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .form {
      width: 100%;
      margin: 10vh auto;
      border: 1px solid transparent;
    }
  }
`;

export default Wrapper;
