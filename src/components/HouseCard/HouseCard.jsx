import "./Card.css";

const HouseCard = ({ house }) => {
  return (
    <div className="main">
      <div className="card">
        <div className="main_content">
          <div className="house_img_container">
            <div className="house_img">
              <img />
            </div>
            <i className="heart_icon"></i>
            <div className="house_number">22</div>
          </div>

          <div className="card_info container">
            <div className="infos">
              <div className="main_infos">
                <p>{house?.title}</p>
                <p>Area: {house?.area} m2</p>
                <p>Age: {house?.age} Year</p>
              </div>
              <div className="other_infos">
                <p>21.11.2019</p>
                <div className="urgent">
                  <p>URGENT</p>
                </div>
              </div>
            </div>
            <div className="icons_infos">
              <p className="icons">
                {house?.nofBedrooms} <i className="test"></i>
              </p>

              <div className="icons">
                <p>
                  {house?.nofLiveingRooms} <i className="test sofa"></i>
                </p>
              </div>

              <div className="icons">
                <p>
                  {house?.nofBathRooms} <i className="test shower"></i>
                </p>
              </div>

              <div className="icons">
                <p>
                  {house?.nofKitchen} <i className="test"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb--2">
          <div className="price">
            <p style={{ position: "absolute", bottom: "19px" }}>
              {house?.price} JOD
            </p>
          </div>
        </div>
        <div className="clip">
          <i className="location"></i>
          <p>
            {house?.district?.city?.name} - {house?.district?.name} -
            {house?.avenueName}
          </p>
        </div>
        <div className="owner">
          <div className="owner_icon">
            <i className="o_icon"></i>
          </div>
          <div className="owner_name">by Owner</div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
