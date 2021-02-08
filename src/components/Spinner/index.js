import spinner from "../../assets/images/loader/spinner.png";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={spinner} alt="spinner" />
          </div>
          <div className="flip-card-back">
            <img src={spinner} alt="spinner" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spinner;
