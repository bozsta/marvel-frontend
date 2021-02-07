import { useEffect, useState } from "react";
import axios from "axios";
import ListCard from "../ListCard.js";
import Spinner from "../Spinner/";

const Favoris = () => {
  const [isLoading, setIsloading] = useState(true);
  const [favoris, setFavoris] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const lsValue = JSON.parse(window.localStorage.getItem("myfavoriteMarvel"));
    setFavoris(lsValue);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/characteres/favoris`,
          { favorisId: favoris }
        );
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log("[FAVORIS] Error:", error);
      }
    };
    fetchData();
  }, [favoris]);
  const handleFavorisClick = (id, e) => {
    e.stopPropagation();
    const lsValue = JSON.parse(window.localStorage.getItem("myfavoriteMarvel"));
    let newLsValue = [];
    let index = -1;
    if (lsValue) {
      index = lsValue.indexOf(id);
    }
    if (index !== -1) {
      lsValue.splice(index, 1);
      newLsValue = [...lsValue];
    } else {
      newLsValue = lsValue ? [...lsValue, id] : [id];
    }
    window.localStorage.setItem("myfavoriteMarvel", JSON.stringify(newLsValue));
    setFavoris(newLsValue);
  };
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <ListCard
          data={data}
          handleFavorisClick={handleFavorisClick}
          favorisEnable="true"
          favoris={favoris}
        />
      )}
    </>
  );
};

export default Favoris;
