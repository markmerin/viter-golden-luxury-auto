import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
ChartJS.register(ChartDataLabels);

const DetailsGraph = () => {
  const dataPie = {
    labels: ["Rental Income", "Expense (COGS)"],
    datasets: [
      {
        label: "",
        data: [12340.96, 32649],
        backgroundColor: ["#4ad2ff", "#d1d3fc"],
        borderWidth: 1,
      },
    ],
  };

  const optionsPie = {
    plugins: {
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "end",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "#fff",
        offset: function () {
          // console.log(context.dataset.data[context.dataIndex]);
          return -25;
        },
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        formatter: (value, context) => {
          // console.log(context);
          if (
            isNaN(value) ||
            value === "" ||
            value.length === 0 ||
            value === null
          ) {
            return "No data";
          } else {
            return context.datasetIndex === 0 ? "$" + value : value;
          }
        },
      },
      title: {
        display: true,
        text: "Total Rental Income and Expenses (COGS)",
        align: "center",
      },
    },
  };

  const dataBar = {
    labels: [2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "Rental Income",
        data: [1146, 15951, 13008, 2544],
        backgroundColor: ["#6a85ff"],
        borderWidth: 1,
      },
      {
        label: "Expense (COGS)",
        data: [0, 10443.41, 1892.55, 5],
        backgroundColor: ["#7c00c8"],
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    plugins: {
      legend: {
        position: "bottom",
        title: {
          display: true,
        },
      },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "end",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: () => {
          return "#000";
        },
        formatter: (value, context) => {
          // console.log(context);
          if (
            isNaN(value) ||
            value === "" ||
            value.length === 0 ||
            value === null
          ) {
            return "No data";
          } else {
            return context.datasetIndex === 0 ? "$" + value : value;
          }
        },
      },
      title: {
        display: true,
        text: "Total Rental Income and Expenses (COGS)",
        padding: {
          bottom: 50,
        },
      },
    },
  };

  return (
    <>
      <div className="max-w-full w-full flex flex-wrap items-center justify-evenly ">
        <div className="w-1/3">
          <Pie data={dataPie} options={optionsPie} />;
        </div>

        <div className="w-1/2">
          <Bar data={dataBar} options={optionsBar} />;
        </div>
      </div>
    </>
  );
};

export default DetailsGraph;
