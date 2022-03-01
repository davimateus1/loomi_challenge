import { DashboardContainer, DashboardContentPlate } from "../../assets/styles/DashboardStyle";
import Header from "./HeaderDashboard";

const DashboardArea = () => {
    return(
        <DashboardContainer>
            <DashboardContentPlate>
                <Header />
            </DashboardContentPlate>
        </DashboardContainer>
    )
}

export default DashboardArea;