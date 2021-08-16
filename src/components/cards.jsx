import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Card from "../components/Card";
const Cards = () => {
  const [data, setData] = useState([]);

  // Example of how to fetch many cards
  useEffect(() => {
    fetch("/cards", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // handle payloada
        setData(result.cards);
      })
      .catch((err) => {
        // handle errors
        //console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="colorNav">
        <div className="navCards">
          <div> similar ads </div>
          <button>SHOW ALL ({data.length} )</button>
        </div>
      </div>
      <section className="blog-list">
        <Row gutter={[0, 40]}>
          {data.map((card) => (
            <Col md={12} sm={24} xs={24} key={card.id} xl={8} span={8}>
              <Card item={card} />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Cards;
