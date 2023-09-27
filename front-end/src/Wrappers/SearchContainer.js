import styled from "styled-components";

const Wrapper = styled.section`
  .input-btn {
    height: 2.35rem;
    width: 50%;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--alert-red-400);
  }

  .input-btn:hover {
    cursor: pointer;
    background-color: var(--alert-red-500);
  }
`;

export default Wrapper;
