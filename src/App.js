import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdvertisementPage from "./components/advPage/advertisementPage";
import Cards from "./components/cards";
import CardPage from "./components/cardPage";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={AdvertisementPage} />
        <Route path="/CardPage" component={CardPage} />
        <Route path="/Cards" component={Cards} />
      </Router>
    </>
  );
}

export default App;
