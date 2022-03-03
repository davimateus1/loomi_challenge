import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { totalProducts } from "../../../configs/requests/products";

const ChartStatus = () => {
  const [delivery, setDelivery] = useState("");
  const [lateRisk, setLateRisk] = useState("");
  const [late, setLate] = useState("");

  const getTotalProducts = async () => {
    const userProducts = await totalProducts();

    if (userProducts) {
      setDelivery(userProducts.delivered);
      setLateRisk(userProducts.lateRisk);
      setLate(userProducts.late);
    }
  };

  useEffect(() => {
    getTotalProducts();
  }, []);

  const data = {
    options: {
      colors: ["#47B27C", "#FFCA83", "#FF7285"],
      labels: [
        `<strong>${delivery}</strong> no prazo (${delivery}%)`,
        `<strong>${lateRisk}</strong> em risco (${lateRisk}%)`,
        `<strong>${late}</strong> em risco (${late}%)`,
      ],
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
    series: [delivery, late, lateRisk],
  };

  return (
    <Chart options={data.options} series={data.series} type="pie" width={340} />
  );
};

export default ChartStatus;
