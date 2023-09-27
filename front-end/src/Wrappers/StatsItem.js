import styled from 'styled-components';

const Wrapper = styled.div`
    width: 30%;
    height: 13rem;
    background-color: white;
    border-radius: 4px;
    border-bottom: 0.4rem solid ${props => props.primary};
    display: flex;
    flex-direction: column;
    padding: 1.4rem 1.87rem;

    .central-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .center {
        width: 4rem;
        display: flex;
        justify-content: center;
    }

    .stats-value {
        font-size: 3.5rem;
        color: ${props => props.primary};
        justify-content: flex-start;
    }

    .icon-container {
        background-color: ${props => props.secondary};
        color: ${props => props.primary};
        border-radius: 4px;
        width: 5rem;
        height: 70%;
        svg {
            align-self: center;
            font-size: 3rem;
        }
    }

    .message-container {
        font-size: 1.5rem;
        text-transform: capitalize;
        
    }
`;

export default Wrapper;