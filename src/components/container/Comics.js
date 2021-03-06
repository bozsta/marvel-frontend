import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import ListCard from "../ListCard/";
import Pagination from "../Pagination/";
import Spinner from "../Spinner/";

const Comics = ({ search }) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          limit,
          page,
          title: search,
        };
        const queryParams = qs.stringify(params);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/comics/all?${queryParams}`
        );
        setData(response.data.results);
        setLimit(response.data.limit);
        setPageMax(Math.ceil(response.data.count / response.data.limit));
        setIsloading(false);
      } catch (error) {
        console.log("[COMICS] Error:", error);
      }
    };
    fetchData();
  }, [limit, page, search]);
  const handleSetMax = (e) => {
    const { value } = e.target;
    setLimit(value);
    setPage(1)
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && <ListCard data={data} />}
      {!isLoading && (
        <Pagination
          max={limit}
          setMax={handleSetMax}
          page={page}
          setPage={setPage}
          pageMax={pageMax}
        />
      )}
    </>
  );
};

export default Comics;
