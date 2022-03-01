import { useEffect, useState } from "react";
import {
  Bar,
  DashboardHeader,
  DashboardHeaderBar,
  DashboardHeaderInfos,
  ProductInfo,
} from "../../../assets/styles/DashboardStyle";
import { totalProducts } from "../../../configs/requests/totalProducts";
import Spinner from "../../Spinner";

const Header = () => {
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const getTotalProducts = async () => {
    const userProducts = await totalProducts();

    if (userProducts) {
      const sum =
        userProducts.late + userProducts.lateRisk + userProducts.delivered;
      setTotal(sum);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTotalProducts();
  });

  return (
    <DashboardHeader>
      <DashboardHeaderInfos>
        <h1>Dashboard</h1>
        <Bar />
        <ProductInfo>
          {loading ? (
            <Spinner size={10} />
          ) : (
            <h3>
              <span>{total}</span> Produtos
            </h3>
          )}
        </ProductInfo>
      </DashboardHeaderInfos>
      <DashboardHeaderBar />
    </DashboardHeader>
  );
};

export default Header;
