import "../../AddAdvertView/ApproveView/Approve.css";
const CancelBtn = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#C91919",
        width: "100%",
        border: "none",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 11,
      }}
    >
      {props.children}
    </button>
  );
};

export default CancelBtn;
