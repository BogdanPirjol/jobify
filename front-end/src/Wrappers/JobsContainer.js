import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 1.8rem;
    margin-bottom: 1rem;

    p{
        min-width: 0;
        margin-bottom: 0;
    }
`;

export default Wrapper;