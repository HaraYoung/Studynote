import React, { useRef, useEffect, memo} from "react";
import Chart from "chart.js";


const LineCartView = memo(() => {
  const chartRef = useRef(null);
 useEffect(() => {
    const drawChart = async () => {
      const ctx = chartRef.current.getContext('2d');
      const {chartData} = await import("../../covid19.json");
      await new Chart(ctx, chartData);
    }
    drawChart();
  }, []);

  return (
    <div>
        <canvas ref={chartRef} />
    </div>
  );
})

export default LineCartView