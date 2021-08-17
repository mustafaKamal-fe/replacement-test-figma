import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./AdPage/MainPage";
import HousesListLayout from "./Layout/HousesListLayout";

function App() {
  const [houses, setHouses] = useState([]);

  // Fetch many cards
  useEffect(() => {
    fetch("/cards", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const { cards } = data;
        setHouses(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main_container">
      {/*_______ Houses List Page ________ */}
      {/* <HousesListLayout houses={houses} />; */}
      {/*__________ Add Advert Page  __________*/}
      <MainPage />
    </div>
  );
}

export default App;
