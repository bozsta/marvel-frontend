
const Pagination = ({ max, setMax, page, setPage, pageMax }) => {
  const handlePev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const handleNext = () => {
    if (page < pageMax) {
      setPage(page + 1)
    }
  }
  return (
    <div className='pagination'>
      <span onClick={handlePev}>Prev</span>
      <div>{`Page ${page} sur ${pageMax}`}</div>
      <select value={max} onChange={setMax}>
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
      <span onClick={handleNext}>Next</span>
    </div>
  )
}

export default Pagination