import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStatsData, resetState } from "../../features/stats/StatisticsSlice";
import triggerAlert from "../../features/utils/triggerAlert";
import Loading from "../../components/Loading";
import Wrapper from "../../Wrappers/Stats";
import StatsContainer from "../../components/StatsContainer";
import StatsItem from "../../components/StatsItem";
import { FaBusinessTime, FaRegHandshake } from "react-icons/fa";
import { RiFileForbidLine } from "react-icons/ri";
import {} from "recharts";
import ChartContainer from "../../components/ChartContainer";
import BarChart from "../../components/barChart";

const Stats = () => {
  const dispatch = useDispatch();
  const { requestState } = useSelector((state) => state.statistics);
  const { accepted, rejected, pending } = useSelector(
    (state) => state.statistics.stats
  );
  const { monthlyApplications } = useSelector((state) => state.statistics);

  useEffect(() => {
    dispatch(
      getStatsData({
        method: "get",
        url: "/api/v1/jobs/stats",
        requireAuth: true,
      })
    );
    return () => {
      dispatch(resetState());
    };
  }, []);

  useEffect(() => {
    if (requestState.hasError) {
      dispatch(
        triggerAlert({
          alertType: requestState.alertType,
          alertText: requestState.alertText,
        })
      );
    }
  }, [requestState.hasError]);

  return (
    <Wrapper>
      {requestState.isLoading && <Loading />}
      <div className="statistics-container">
        <p className="credits">Credits by Pirjol Bogdan</p>
        <StatsContainer>
          <StatsItem
            statisticValue={pending}
            message={"pending applications"}
            primaryColor={"#f7b705"}
            secondaryColor={"#fdf1cd"}
          >
            <FaBusinessTime fontSize={"2.35rem"} />
          </StatsItem>
          <StatsItem
            statisticValue={accepted}
            message={"accepted applications"}
            primaryColor={"#4bb543"}
            secondaryColor={"#dbf0d9"}
          >
            <FaRegHandshake fontSize={"2.35rem"} />
          </StatsItem>
          <StatsItem
            statisticValue={rejected}
            message={"rejected applications"}
            primaryColor={"#f54848"}
            secondaryColor={"#fcc8c8"}
          >
            <RiFileForbidLine fontSize={"2.35rem"} />
          </StatsItem>
        </StatsContainer>
      </div>
      <div className="chart-container">
        <ChartContainer>
          <BarChart data={monthlyApplications} />
        </ChartContainer>
      </div>
    </Wrapper>
  );
};

export default Stats;
