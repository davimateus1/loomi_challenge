import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { deliveryProblems } from "../../../configs/requests/products";

const ChartBlock = () => {
  const [quantityFirst, setQuantityFirst] = useState();
  const [quantitySecond, setQuantitySecond] = useState();
  const [quantityThird, setQuantityThird] = useState();

  const [labelSecond, setLabelSecond] = useState();
  const [labelThird, setLabelThird] = useState();

  const getDeliveryProblems = async () => {
    const userProblems = await deliveryProblems();

    if (userProblems) {
      const [problemOne, problemTwo, problemThree] = userProblems;

      setQuantityFirst(problemOne.quantity);

      setLabelSecond(problemTwo.problem);
      setQuantitySecond(problemTwo.quantity);

      setLabelThird(problemThree.problem);
      setQuantityThird(problemThree.quantity);
    }
  };

  useEffect(() => {
    getDeliveryProblems();
  }, []);

  const series = [
    {
      name: "Total de casos",
      data: [quantityFirst, quantitySecond, quantityThird],
    },
  ];

  const data = {
    options: {
      colors: ["#004C6D"],
      xaxis: {
        categories: ["Falta de dados de remetente", labelSecond, labelThird],
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={data.options}
        type="bar"
        series={series}
        width="730"
        height="200"
      />
    </div>
  );
};

export default ChartBlock;
