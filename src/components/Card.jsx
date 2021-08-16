const Card = ({ item }) => {
  return (
    <div className="containerCard">
      <div className="cardHead">
        <div className="divImg">
          <img
            src="/img/download 40.png"
            alt="img Card"
            className="cardHeadimg"
          />
          <p>
            <img src="/img/Vector.png" alt="loves" className="reactionimg" />
          </p>
          <div className="numImg">22</div>
        </div>
        <div className="cardBody">
          <div className="cardHeadDet">
            <p className="titleCard">{item.title}</p>
            <p className="date">21.11.2019</p>
          </div>
          <div className="cardDes">
            <div>
              <p>Area :{item.area} m2</p>
              <p>Age :{item.age} Year</p>
            </div>
            <button className="cardBtn">URGENT</button>
          </div>
          <div className="Cardicons">
            <div>
              <p>{item.nofBedrooms}</p>
              <img src="/img/bed.png" alt="bed" className="Cardicon" />
            </div>
            <div>
              <p>{item.nofLivingRooms}</p>
              <img src="/img/sofa.png" alt="sofa" className="Cardicon" />
            </div>
            <div>
              <p>{item.nofBathRooms}</p>
              <img src="/img/shower.png" alt="shower" className="Cardicon" />
            </div>
            <div>
              <p>{item.nofKitchen}</p>
              <img src="/img/plate.png" alt="plate" className="Cardicon" />
            </div>
          </div>
          <div className="price">{item.price}JOD</div>
        </div>
      </div>
      <div className="clippath">
        <div className="cardFooter">
          <img src="/img/Vector (1).png" alt="map" />
          District - City - Avenue
        </div>
      </div>
      <div className="byOwner">
        <img src="/img/Untitled-1 45.png" alt="owner" />
        <p>by Owner </p>
      </div>
    </div>
  );
};
export default Card;
