import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import Card from "../Card";
import LisCard from "../../ListCard";
import shieldLogo from "../../../assets/images/shield/SHIE.jpg";
import codebarre from "../../../assets/images/barcode1.gif";
import qrcode from "../../../assets/images/qrcode.png";
import stamp from "../../../assets/images/shield/image_classified.png"
import "./detail.css";

const classified = () => {
  return (
    <div className="classified">
      <p>
        Article nor prepare ███████ ███ ███ ████ ███ ██████ ███ ██████ ███ ██████ ██████ ██████ ████ ███ █████████ █████████ ███ attempted estimable █████ █████ █████ █████ █████ ██ ██ ██ ██████ ████████ ███ ███ Felicity now law ████████ ████ ██████ ██████ ███ ██████ ███ ████
      </p>
      <img src={stamp} alt="top secret" />
    </div>
  )
}

// const classified =
//   "Article nor prepare ███████ ███ ███ ████ ███ ██████ ███ ██████ ███ ██████ ██████ ██████ ████ ███ █████████ █████████ ███ attempted estimable █████ █████ █████ █████ █████ ██ ██ ██ ██████ ████████ ███ ███ Felicity now law ████████ ████ ██████ ██████ ███ ██████ ███ ████";

const Detail = () => {
  const location = useLocation();
  const { id } = location.state;
  const [isLoading, setIsloading] = useState(true);
  const [perso, setPerso] = useState(null);
  const [comics, setCommics] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/comics/char/${id}`
        );
        const char = {};
        char.image = `${response.data.thumbnail.path}/portrait_xlarge.jpg`;
        console.log("response.data", response.data);
        char.name = response.data.name;
        char.description = response.data.description;
        console.log("char", char);
        setPerso(char);
        setCommics(response.data.comics);
        setIsloading(false);
      } catch (error) {
        console.log("Error Retail", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="fiche-detail">
      {!isLoading && (
        <>
          <div className="header">
            <div className="top-pane">
              <div className="civility">
                <div className="name">
                  <span className="label">Name</span>: <p>{perso.name}</p>
                </div>
                <div className="status">
                  <span className="label">Status</span>: <p>ACTIVE</p>
                </div>
              </div>
              <div className="logo">
                <img src={shieldLogo} alt="alt" />
              </div>
              <div className="left-side">
                <p className="investigation">investigation unit</p>
                <p className="type">
                  <span className="label">classified:</span>{" "}
                  <span className="red">eyes only</span>
                </p>
                <p className="consign">do not duplicate</p>
                <p className="consign">office of the director</p>
              </div>
            </div>
            <div className="middle-pane">
              <span className="label">Restricted access</span>:{" "}
              <span
                className="red
              "
              >
                LEVEL 7
              </span>
            </div>
            <div className="bottom-pane">
              <div>S.H.I.E.L.D PeRSONNNEL FILE</div>
              <div className="codebarre">
                <img src={codebarre} alt="code barre" />
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="content">
              <div className="description">
                {perso.description ? perso.description : classified()}
              </div>
              <div className="image">
                <img src={perso.image} alt="Some alt" />
              </div>
            </div>
            <div className="comics">
              <LisCard data={comics} />
            </div>
            <div>
              <img src={qrcode} alt="qrcode" className="qrcode" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
