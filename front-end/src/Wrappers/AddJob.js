import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--white);
  margin: 0;

  width: 95%;
  height: min-content;
  background-color: var(--white);
  margin: 2vh auto;
  padding: 50px 5%;

  h3 {
    margin-top: 1.5rem;
  }

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
    background-color: var(--grey-50);
    border: 1px solid var(--grey-600);
    border-radius: 0.2rem;
  }

  .form-input:focus-visible {
    outline: none;
    border: 1px solid var(--primary-500);
  }

  .btn-row {
    display: flex;
    width: 420px;
    height: 80px;
    align-items: flex-end;
    column-gap: 4%;

    .input {
      height: 2.35rem;
      width: 50%;
      color: var(--white);
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .set:hover {
      cursor: pointer;
      background-color: var(--primary-400);
    }

    .input.reset:hover {
      cursor: pointer;
      background-color: var(--grey-500);
    }
  }

  .set {
    background-color: var(--primary-500);
  }

  .reset {
    background-color: var(--grey-400);
  }

  .btn-row .set:disabled{
    background-color: var(--grey-200);
  }

  .icon-loading{
    height: 80%;
    width: 80%;
  }

  select:hover{
    cursor: pointer;
  }

`;

export default Wrapper;
