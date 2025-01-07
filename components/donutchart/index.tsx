import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { colors } from "utils/theme";
import { statistikChart } from "utils/infoInvestor";

ChartJS.register(ArcElement, Tooltip, Legend);

const { primary, warning1, warning5, indigo3 } = colors;

export default function App() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const dataColors = [primary, indigo3, warning1, warning5];
  const { labels, data: dataValues } = statistikChart;

  const legendLabels = labels.map(
    (label, index) => `${label}: ${dataValues[index]}%`
  );

  const data = {
    labels: legendLabels,
    datasets: [
      {
        label: " Total",
        data: dataValues,
        backgroundColor: dataColors,
        borderWidth: 1,
        hoverOffset: 4,
        cutout: 90,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,

    padding: 0,
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context: any) {
            let label = context[0].label.split(":")[0] || "";
            return label;
          },
          label: function (context: any) {
            let formattedValue = " " + context.formattedValue || "";
            return `${formattedValue}%`;
          },
        },
      },

      legend: {
        position: isLargerThan800 ? "right" : "bottom",
        labels: {
          boxWidth: 15,
          padding: 20,
          font: {
            size: 16,
          },
        },
        onClick: () => {},

        onHover: (_: any, item: any, legend: any) => {
          const chart = legend.chart;
          const tooltip = chart.tooltip;

          const chartArea = chart.chartArea;
          tooltip.setActiveElements(
            [
              {
                datasetIndex: 0,
                index: item.index,
              },
            ],
            {
              x: (chartArea.left + chartArea.right) / 2,
              y: (chartArea.top + chartArea.bottom) / 2,
            }
          );

          chart.update();
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
