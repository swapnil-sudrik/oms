import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Card, CardTitle } from "reactstrap";

const AdminHomeLineChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  let currentDate = new Date();

  // Create an array of month names
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];



  useEffect(() => {
      // Get the current month name
  let currentMonthName = monthNames[currentDate.getMonth()];

  // Get the last two month names
  let lastMonthName = monthNames[(currentDate.getMonth() + 11) % 12];
  let secondLastMonthName = monthNames[(currentDate.getMonth() + 10) % 12];

  // Print the current month and the last two months
  console.log("Current month: " + currentMonthName);
  console.log("Last month: " + lastMonthName);
  console.log("Second last month: " + secondLastMonthName);

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: [secondLastMonthName, lastMonthName, currentMonthName],
      datasets: [
        {
          label: "Java",
          data: [65, 59, 80],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Python",
          data: [28, 48, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--yellow-500"),
          tension: 0.4,
        },
        {
          label: "Full Stack in java",
          data: [48, 88, 12],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--orange-500"),
          tension: 0.4,
        },
        {
          label: "Full Stack in python",
          data: [78, 10, 70],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div>
      <Card className="justify-content-center admin-welcome text-center px-2 mx-3">
        <br />
        <CardTitle tag="h3">Student Admission</CardTitle>
        <hr />
        <Chart
          type="line"
          data={chartData}
          options={chartOptions}
          className="m-auto w-100"
          style={{ height: "320px" }}
        />
      </Card>
      <br />
    </div>
  );
};

export default AdminHomeLineChart;
