import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { deliveryProblems } from "../../../configs/requests/products";

const ChartProblems = () => {

  const [quantityFirst, setQuantityFirst] = useState();
  const [quantitySecond, setQuantitySecond] = useState();

  const [labelFirst, setLabelFirst] = useState();
  const [labelSecond, setLabelSecond] = useState();

  const getDeliveryProblems = async () => {
    const userProblems = await deliveryProblems();

    if (userProblems) {
      const [problemOne, ,problemTwo] = userProblems;

      setQuantityFirst(problemOne.quantity)
      setQuantitySecond(problemTwo.quantity)
      
      setLabelFirst(problemOne.problem)
      setLabelSecond(problemTwo.problem)
    }
  };

  useEffect(() => {
    getDeliveryProblems();
  }, [])


  const data = {

    options: {
      colors: ["#004C6D", "#9DC6E0"],
      labels: [`<strong>${quantityFirst}</strong>
      Casos de 
      <br/> ${labelFirst} (${quantityFirst}%)`,
      `<strong>${quantitySecond}</strong>
      Casos de 
      <br/> ${labelSecond} (${quantitySecond}%)`],
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
    series: [quantityFirst, quantitySecond],
  };

  return (
    <Chart options={data.options} series={data.series} type="pie" width={365} />
  );
};

export default ChartProblems;
