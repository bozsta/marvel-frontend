import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
const Search = ({ search, handleSearch }) => {
  const [input, setInput] = useState(search);

  useEffect(() => {
    handleSearch(input);
  }, [input, handleSearch]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleClick = (e) => {
    setInput("");
  };
  return (
    <div className="search">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={handleChange}
        placeholder="Chercher"
        value={input}
      />
      {search && <FontAwesomeIcon icon="times" onClick={handleClick} />}
    </div>
  );
};

export default Search;
