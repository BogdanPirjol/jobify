import Wrapper from "../Wrappers/StatsContainer";

const StatsContainer = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default StatsContainer;