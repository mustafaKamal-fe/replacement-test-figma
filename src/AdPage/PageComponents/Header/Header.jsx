import "../../InfoView/InfoPageStyle.css";

const Header = ({ label }) => {
  return (
    <div className="head_container">
      <i className="info_icon"></i>
      <p>{label}</p>
    </div>
  );
};

export default Header;
