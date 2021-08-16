import "../../AddAdvertView/ApproveView/Approve.css";
const ApproveBtn = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#0B3352",
        width: "100%",
        border: "none",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize:11
      }}
    >
      {props.children}
    </button>
  );
};

export default ApproveBtn;
