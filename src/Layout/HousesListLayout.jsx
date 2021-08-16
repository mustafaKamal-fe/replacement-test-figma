import Header from "../components/Header/Header";
import HousesList from "../components/HousesList/HousesList";

const HousesListLayout = ({ houses }) => {
  return (
    <div>
      <Header housesNumber={houses?.length} />
      <HousesList houses={houses} />
    </div>
  );
};

export default HousesListLayout;
