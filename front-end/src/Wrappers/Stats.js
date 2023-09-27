import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .statistics-container {
        padding: 1rem 2rem;
    }

    p.credits {
        margin: 0.8rem;
        border-bottom: 1px solid transparent;
        font-size: 1.45rem;
        color: var(--primary-600);
        margin-left: 0.75rem;
        letter-spacing: 1px;
    }
`;

export default Wrapper;