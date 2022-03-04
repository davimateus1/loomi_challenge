import { useCallback, useEffect, useState } from "react";
import {
  Label,
  Select,
  Table,
  TableBar,
  TableColumn,
  TableHeader,
  TableRow,
  TitleTable,
} from "../../../assets/styles/DashboardStyle";
import { StatusDeliveries } from "../../../configs/requests/products";

const TableDashboard = () => {
  const [data, setData] = useState([]);
  const [dataBackup, setDataBackup] = useState([]);

  const getStatusDeliveries = async () => {
    const dataDeliveries = await StatusDeliveries();

    if (dataDeliveries) {
      setData(dataDeliveries.deliveries);
      setDataBackup(dataDeliveries.deliveries);
    }
  };

  useEffect(() => {
    getStatusDeliveries();
  }, []);

  const filterByStatus = useCallback(
    (value) => {
      if (value === "Todos") {
        setData(dataBackup);
        return;
      }
      const dataFiltered = dataBackup.filter(
        (item) => item.status.toLowerCase() === value.toLowerCase()
      );
      setData(dataFiltered);
    },
    [dataBackup]
  );

  return (
    <>
      <TitleTable>Entregas</TitleTable>
      <TableBar></TableBar>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Label>Status da entrega</Label>
        <Select
          name="options"
          id="options"
          onChange={(e) => filterByStatus(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Na distribuidora">Na distribuidora</option>
          <option value="Em rota de entrega">Em rota de entrega</option>
          <option value="Entregue">Entregue</option>
        </Select>
      </div>
      <div>
        <Table>
          <TableRow BackgroundColor="rgba(85, 139, 47, 0.15)">
            <TableHeader fontColor="#558B2F" width="10%">
              N
            </TableHeader>
            <TableHeader fontColor="#558B2F" width="30%">
              DESTINO
            </TableHeader>
            <TableHeader width="30%" fontColor="#595F6;">
              Distancia
            </TableHeader>
            <TableHeader width="30%" fontColor="#595F6;">
              Status
            </TableHeader>
          </TableRow>
          {data.map((item, index) => {
            const getColor = () => {
              if ((index + 1) % 2 === 0) {
                return "#F7F8FA";
              }
              return "#ffffff";
            };

            return (
              <TableRow BackgroundColor={getColor()}>
                <TableColumn width="10%" FontWeight="normal">
                  {item.id}
                </TableColumn>
                <TableColumn width="30%">{item.address}</TableColumn>
                <TableColumn width="30%">{item.distance}km</TableColumn>
                <TableColumn width="30%">{item.status}</TableColumn>
              </TableRow>
            );
          })}
        </Table>
      </div>
    </>
  );
};

export default TableDashboard;
