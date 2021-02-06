import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCard from '../ListCard'
import Pagination from '../Pagination'

const Comics = ({ search }) => {
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageMax, setPageMax] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/comics/all?limit=${limit}&page=${page}&title=${search}`)
      setData(response.data.results)
      setLimit(response.data.limit)
      setPageMax(Math.ceil(response.data.count / response.data.limit))
      setIsloading(false)
    }
    fetchData()
  }, [limit, page, search])
  const handleSetMax = (e) => {
    const { value } = e.target
    setLimit(value)
  }

  return (
    <>
      {isLoading && <div> Loading ...</div>}
      {!isLoading && <ListCard data={data} />}
      {!isLoading && <Pagination max={limit} setMax={handleSetMax} page={page} setPage={setPage} pageMax={pageMax} />}
    </>
  )
}

export default Comics