import Wrapper from '../Wrappers/ChartContainer.js';

const ChartContainer = ({children}) => {
    return <Wrapper>
        <h2>Monthly applications</h2>
        {children}
    </Wrapper>
}

export default ChartContainer;