import Wrapper from "../Wrappers/StatsItem";

const StatsItem = ({ children, statisticValue, message, primaryColor, secondaryColor }) => {
  return (
    <Wrapper primary={primaryColor} secondary={secondaryColor}>
      <div className="central-container">
        <div className="stats-value center">{statisticValue}</div>
        <div className="icon-container center">{ children }</div>
      </div>
      <div className="message-container">
        <p>{message}</p>
      </div>
    </Wrapper>
  );
};

export default StatsItem;
