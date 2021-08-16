import "./header.css";

const Header = ({ housesNumber }) => {
  return (
    <div className="header">
      <p>SIMILAR ADS</p>
      <button className="show_btn">SHOW ALL ({housesNumber})</button>
    </div>
  );
};

export default Header;
