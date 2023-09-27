import styled from 'styled-components';
import breakpoints from '../graphics/devices-sizes';

const Wrapper = styled.section`
    width: fit-content;
    margin: 10vh auto;

    .banner {
        margin: 2vh auto;
        font-size: 2.75rem;
        text-align: center;
    }

    .not-found{
        width: 100%;
        margin-bottom: 2rem;
    }

    .message{
        color: var(--primary-700);
    }

    .pos-center{
        margin: 0 auto;
        text-align: center;
    }

    .btn {
        display: block;
        width: 16rem;
        margin: 3vh auto;
        text-align: center;
    }

    @media (max-width: ${breakpoints.tablet}){
        p{
            min-width: 0;
        }
        .banner{
            font-size: 2rem;
        }
        .message{
            font-size: 1.2rem;
        }
    }
`;

export default Wrapper;