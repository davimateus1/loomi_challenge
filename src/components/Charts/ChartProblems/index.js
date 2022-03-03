import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { deliveryProblems } from "../../../configs/requests/products";

const ChartProblems = () => {
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);

  const getDeliveryProblems = async () => {
    const userProblems = await deliveryProblems();

    if (userProblems) {
      setArray(userProblems[0]);
      const { problem, quantity } = array;
      console.log(problem, quantity);
    }
  };

  useEffect(() => {
   
  }, [])

  const data = {
    options: {
      colors: ["#004C6D", "#9DC6E0"],
      labels: ["fodase", "fodase2"],
      theme: {
        monochrome: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    series: [100, 50],
  };

  return (
    <Chart options={data.options} series={data.series} type="pie" width={290} />
  );
};

export default ChartProblems;
