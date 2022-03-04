import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { deliveryAvaliation } from "../../../configs/requests/products";

const ChartByPhase = () => {
  const [excellent, setExcellent] = useState();
  const [good, setGood] = useState();
  const [regular, setRegular] = useState();
  const [bad, setBad] = useState();
  const [terrible, setTerrible] = useState();

  const getTotalAvaliation = async () => {
    const userAvaliation = await deliveryAvaliation();

    if (userAvaliation) {
      setExcellent(userAvaliation.excellent);
      setGood(userAvaliation.good);
      setRegular(userAvaliation.regular);
      setBad(userAvaliation.bad);
      setTerrible(userAvaliation.terrible);
    }
  };

  useEffect(() => {
    getTotalAvaliation();
  }, []);

  const data = {
    options: {
      colors: ["#46CE8A", "#6A59E8", "#E8596C", "#A4BD8C", "#EFB15D"],
      labels: [
        `<strong>${excellent}</strong> Excellent (${excellent}%)`,
        `<strong>${good}</strong> Good (${good}%)`,
        `<strong>${regular}</strong> Regular (${regular}%)`,
        `<strong>${bad}</strong> Bad (${bad}%)`,
        `<strong>${terrible}</strong> Terrible (${terrible}%)`,
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
    series: [excellent, good, regular, bad, terrible],
  };

  return (
    <Chart options={data.options} series={data.series} type="pie" width={390} />
  );
};

export default ChartByPhase;
