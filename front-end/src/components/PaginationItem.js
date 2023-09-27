import Wrapper from "../Wrappers/PaginationItem";
import { setPageCount } from "../features/filters/FiltersSlice";
import { useDispatch } from "react-redux";

const PaginationItem = ({pageCount, active}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setPageCount(pageCount));
    }
    return (
        <Wrapper onClick={handleClick} className={active && 'active'}>
            {pageCount}
        </Wrapper>
    )
}

export default PaginationItem;