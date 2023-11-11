import React, { useEffect, useRef } from 'react';
import Chart, {
  ChartConfiguration,
  ChartOptions,
  ChartType,
} from 'chart.js/auto';

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderWidth: number;
  }[];
};

type ChartProps = {
  data: ChartData;
};

const chartOptions: ChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const chartConfig: ChartConfiguration = {
          type: 'bar' as ChartType,
          data: data,
          options: chartOptions,
        };

        const myChart = new Chart(ctx, chartConfig);

        return () => {
          myChart.destroy();
        };
      }
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
