import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        min-width: 0;
    }
    h2 {
        margin: 2rem;
        color: var(--primary-800);
    }
    width: 100%;
`;

export default Wrapper;