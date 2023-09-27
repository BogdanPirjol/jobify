import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--grey-50);
  box-shadow: 0 0 4px 0 var(--grey-400);
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 5px 2px var(--grey-400);
  }

  .job-title-container {
    background-color: var(--grey-50);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--grey-200);
  }

  .job-logo {
    width: 4.5rem;
    height: 4.5rem;
    margin: 20px;
    background: var(--primary-500);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 5px;
  }

  .job-details-container {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
  }

  .job-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }

  .job-actions {
    display: flex;
    column-gap: 0.8rem;
    margin-top: 1.9rem;
  }

  .job-detail {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
  }

  .job-btn {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
    background-color: var(--primary-500);
    color: white;
    font-family: var(--headingFont);
    border: none;
    border-radius: 4px;
    transition: 0.4s;
  }

  .job-btn:hover {
    cursor: pointer;
    background-color: var(--primary-600);
  }

  .job-status {
    width: fit-content;
    padding: 0.2rem 0.9rem;
    border-radius: 5px;
  }

  svg {
    font-size: 2rem;
    color: var(--grey-400);
  }

  .big-font {
    font-size: 1.5rem;
  }

  .pending {
    background-color: #faf59e;
    color: #c2b70a;
  }

  .rejected {
    background-color: var(--alert-red-200);
    color: var(--alert-red-500);
  }

  .accepted {
    background-color: var(--green-200);
    color: var(--green-600);
  }
`;

export default Wrapper;
