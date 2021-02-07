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
        console.log("response", response.data);
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
          <div className="perso">
            <img src={perso.image} alt="Some alt" />
            <div className="content">
              <p className="name">{perso.name}</p>
              <p className="description">
                {perso.desciption
                  ? perso.desciption
                  : "Le SHIELD n'a pas transmis les informations"}
              </p>
            </div>
          </div>
          <LisCard data={comics} />
        </>
      )}
    </div>
  );
};

export default Detail;
