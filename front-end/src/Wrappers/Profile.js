import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: min-content;
  background-color: var(--white);
  margin: 2vh auto;
  padding: 50px 5%;

  .form-row {
    width: 420px;
    height: 80px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .form-label {
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  .form-input {
    height: 2.35rem;
    font-size: 1.25rem;
    padding: 0 1rem;
    background-color: transparent;
    border: 1px solid var(--grey-600);
    border-radius: 0.2rem;
  }

  .form-input:focus-visible {
    outline: none;
    border: 1px solid var(--primary-500);
  }

  form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 20px;
    margin: 0 auto;
  }

  .form-btn {
    height: 2.35rem;
    font-size: 1.25rem;
    padding: 0 1rem;
    align-self: flex-end;
    width: 420px;
  }
`;

export default Wrapper;
