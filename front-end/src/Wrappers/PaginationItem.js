import styled from 'styled-components';

const Wrapper = styled.div`
    
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    position: relative;
    border-radius: 4px;
    margin: 0.2rem;
    background-color: #bfe9f9;
    border: 1px solid var(--primary-200);
    font-size: large;
    color: var(--primary-600);

    &::after{
        content: "";
        height: 4px;
        position: absolute;
        background-color: var(--primary-500);
        bottom: 0;
        left: 0;
    }

    &:hover{
        cursor: pointer;
        
        background-color: white;
        color: var(--primary-500);
       &::after{
        animation-name: hoverPage;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
       }
    }

    @keyframes hoverPage {
        from {
            width: 0%;
        }to{
            width: 100%;
        }
    }

    &.active {
        background-color: white;
        color: var(--primary-500);
    }
`;

export default Wrapper;