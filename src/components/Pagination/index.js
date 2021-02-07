import "./pagination.css";
const Pagination = ({ max, setMax, page, setPage, pageMax }) => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePev = () => {
    if (page > 1) {
      setPage(page - 1);
      backToTop();
    }
  };
  const handleNext = () => {
    if (page < pageMax) {
      setPage(page + 1);
      backToTop();
    }
  };
  return (
    <>
      {pageMax > 1 && (
        <div className="pagination">
          <div className="navigation">
            <button onClick={handlePev}>Prev</button>
            <div>{`Page ${page} sur ${pageMax}`}</div>
            <button onClick={handleNext}>Next</button>
          </div>
          <div className="itemPerPage">
            <span>carte par page:</span>
            <select value={max} onChange={setMax}>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
