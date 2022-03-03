import {
  ChartArea,
  DashboardContainer,
  DashboardContentPlate,
  GraphicStatus,
  SmallCardArea,
} from "../../assets/styles/DashboardStyle";

import SmallCard from "./CardsDashboard";
import Header from "./HeaderDashboard";

import Check from "../../assets/img/check.svg";
import Distance from "../../assets/img/distance.svg";
import Delivery from "../../assets/img/delivery.svg";
import Finished from "../../assets/img/finished.svg";

import { useCallback, useEffect, useState } from "react";
import { deliveryAvg, totalProducts } from "../../configs/requests/products";
import ChartStatus from "../Charts/ChartStatus";
import Spinner from "../Spinner";
import ChartProblems from "../Charts/ChartProblems";

const DashboardArea = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const createCard = useCallback(
    ({
      icon = null,
      value,
      text,
      label = "produtos",
      showPercentage = false,
      color = null,
      marginTop = null,
    }) => [
      {
        label,
        color,
        icon,
        showPercentage,
        value,
        text,
        marginTop,
      },
    ],
    []
  );

  const getProducts = useCallback(async () => {
    const [products, deliveries] = await Promise.all([
      totalProducts(),
      deliveryAvg(),
    ]);

    const { delivered, late, lateRisk } = products;
    const [finished, delivery, check, distance] = deliveries;

    const cardTotal = createCard({
      value: delivered + late + lateRisk,
      text: "Total de produtos",
      marginTop: 55,
    });

    const cardDelivered = createCard({
      value: delivered,
      text: "Produtos com atraso na entrega",
      color: "#E8596C",
      showPercentage: true,
      marginTop: 37,
    });

    const cardLate = createCard({
      value: late,
      text: "Produtos com risco de atraso",
      color: "#EFB15D",
      showPercentage: true,
      marginTop: 37,
    });

    const cardLateRisk = createCard({
      value: lateRisk,
      text: "Produtos entregues",
      color: "#558B2F",
      showPercentage: true,
      marginTop: 55,
    });

    const cardFinished = createCard({
      icon: Finished,
      value: finished.value,
      text: finished.label,
      label: finished.unity,
      marginTop: 33,
    });

    const cardDelivery = createCard({
      icon: Delivery,
      value: delivery.value,
      text: delivery.label,
      label: delivery.unity,
      marginTop: 33,
    });

    const cardCheck = createCard({
      icon: Check,
      value: distance.value,
      text: distance.label,
      label: distance.unity,
      marginTop: 16,
    });

    const cardDistance = createCard({
      icon: Distance,
      value: check.value,
      text: check.label,
      label: check.unity,
      marginTop: 15,
    });

    const cardsToRender = [
      ...cardTotal,
      ...cardLate,
      ...cardLateRisk,
      ...cardDelivered,
      ...cardFinished,
      ...cardDelivery,
      ...cardCheck,
      ...cardDistance,
    ];

    setCards(cardsToRender);
    setLoading(false);
  }, [createCard]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <DashboardContainer>
      <DashboardContentPlate>
        <Header />
        <SmallCardArea>
          {loading ? (
            <Spinner />
          ) : (
            cards.map((item) => (
              <SmallCard
                marginTop={item.marginTop}
                key={item.text}
                color={item.color}
                icon={item.icon}
                text={item.text}
                value={item.value}
                label={item.label}
                showPercentage={item.showPercentage}
              />
            ))
          )}
        </SmallCardArea>
        {loading ? (
          <Spinner />
        ) : (
          <GraphicStatus>
            <ChartArea>
              <h1>Status das entregas</h1>
              <ChartStatus />
            </ChartArea>
            <ChartArea>
              <h1>Problemas na entrega</h1>
              <ChartProblems />
            </ChartArea>
          </GraphicStatus>
        )}
      </DashboardContentPlate>
    </DashboardContainer>
  );
};

export default DashboardArea;
