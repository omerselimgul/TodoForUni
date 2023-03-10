import { Checkbox } from "@mui/material";
import "./Card.css";
const Card = ({ title, isChecked, onclick, id }) => {
  return (
    <div className="CardContainer">
      <div className="Content">{title}</div>
      <Checkbox
        className="checkbox"
        value={isChecked}
        onClick={() => {
          onclick && onclick(id);
        }}
      />
    </div>
  );
};
Card.defaultProps = {
  title: "Başlık",
  isChecked: false,
};
export default Card;
