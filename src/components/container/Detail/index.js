import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import Card from "../Card";
import LisCard from "../../ListCard";
import "./detail.css";

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
        const perso = {};
        perso.image = `${response.data.thumbnail.path}/portrait_xlarge.jpg`;
        perso.name = response.data.name;
        perso.description = response.data.description;
        setPerso(perso);
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
              <div>
                <div className="name">
                  Name: <p>{perso.name}</p>
                </div>
                <div className="status">Status: ACTIVE</div>
              </div>
              <div>SHIELD logo</div>
              <div>
                <p>investigation unit</p>
                <p>classified: eyes only</p>
                <p>do not duplicate</p>
                <p>office of the director</p>
              </div>
            </div>
            <div className="middle-pane">
              <div>Restricted access: LEVEL 7</div>
            </div>
            <div className="bottom-pane">
              <div>SHIELD PRSONNNEL FILE</div>
              <div>CODE BARRE</div>
            </div>
          </div>
          <div className="content-container">
            <div className="content">
              <div className="description">
                {perso.desciption
                  ? perso.desciption
                  : "Le SHIELD n'a pas transmis les informations"}
              </div>
              <div className="image">
                <img src={perso.image} alt="Some alt" />
              </div>
            </div>
            <div className="commics">
              <LisCard data={comics} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
