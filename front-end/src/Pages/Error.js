import notFoundImg from '../graphics/not_found.svg';
import Wrapper from '../Wrappers/Error';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <img className='not-found' src={notFoundImg} alt='not found'></img>
            <p className='banner pos-center'>Ups, page not found !</p>
            <p className='message pos-center'>It seems like the page you looking for doesn`t exists.</p>
            <Link className='btn' to='/'>Go back home</Link>
        </Wrapper>
    );
}

export default ErrorPage;