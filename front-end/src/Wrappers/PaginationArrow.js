import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin: 0 0.5rem;
    color: var(--primary-300);
    font-size: xx-large;
    width: 3rem;
    height: 3rem;
    

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
`;

export default Wrapper;