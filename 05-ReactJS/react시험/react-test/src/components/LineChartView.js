import React from "react";
import "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChartView = ({ tgData }) => {
  /* 그래프 옵션 */
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: tgData.date,
    datasets: [
      {
        label: "명",
        backgroundColor: "chocolate",
        borderColor: "brown",
        borderWidth: 1,
        data: tgData.num,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

LineChartView.defaultProps = {
  tgData: {
    date: [],
    num: [],
  },
};

export default React.memo(LineChartView);
