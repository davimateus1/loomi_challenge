import {
  DashboardContainer,
  DashboardContentPlate,
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

const DashboardArea = () => {
  const [cards, setCards] = useState([]);

  const createCard = useCallback(({ icon = null, value, text, label = "produtos", showPercentage = false, color = null }) => [
      {
        label,
        color,
        icon,
        showPercentage,
        value,
        text,
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
    });

    const cardDelivered = createCard({
      value: delivered,
      text: "Produtos com atraso na entrega",
      color: "#E8596C",
      showPercentage: true,
    });

    const cardLate = createCard({
      value: late,
      text: "Produtos com risco de atraso",
      color: "#EFB15D",
      showPercentage: true,
    });

    const cardLateRisk = createCard({
      value: lateRisk,
      text: "Produtos entregues",
      color: "#558B2F",
      showPercentage: true,
    });
    
    const cardFinished = createCard({
      icon: Finished,
      value: finished.value,
      text: finished.label,
      label: finished.unity,
    });

    const cardDelivery = createCard({
      icon: Delivery,
      value: delivery.value,
      text: delivery.label,
      label: delivery.unity,
    });

    const cardCheck = createCard({
      icon: Check,
      value: distance.value,
      text: distance.label,
      label: distance.unity,
    });

    const cardDistance = createCard({
      icon: Distance,
      value: check.value,
      text: check.label,
      label: check.unity,
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
  }, [createCard]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <DashboardContainer>
      <DashboardContentPlate>
        <Header />
        <SmallCardArea>
          {cards.map((item) => (
            <SmallCard
              key={item.text}
              color={item.color}
              icon={item.icon}
              text={item.text}
              value={item.value}
              label={item.label}
              showPercentage={item.showPercentage}
            />
          ))}
        </SmallCardArea>
      </DashboardContentPlate>
    </DashboardContainer>
  );
};

export default DashboardArea;
