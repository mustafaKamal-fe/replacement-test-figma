import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect, useState } from "react";
import Card from "../components/Card";
const CardPage = () => {
  const [data, setData] = useState([]);

  // Example of how to fetch many cards
  useEffect(() => {
    fetch("/card", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // handle payloada
        setData(result.card);
      })
      .catch((err) => {
        // handle errors
        //console.log(err);
      });
  }, []);
  return (
    <div>
      <section className="blog-list">
        <Card item={data} />
      </section>
    </div>
  );
};

export default CardPage;
