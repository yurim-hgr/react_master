import { fetchPriceData } from "../api";
import { useQuery } from "react-query";

interface IChart {
  coinId: string;
}
function Chart({ coinId }: IChart) {
  const { isLoading, data } = useQuery<IChart>(["chart", coinId], () =>
    fetchPriceData(coinId)
  );

  return <h1>Chart</h1>;
}

export default Chart;
