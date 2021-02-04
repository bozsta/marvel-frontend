import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCard from '../ListCard'
import Pagination from '../Pagination'

const Personnages = () => {
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageMax, setPageMax] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/characteres/all?limit=${limit}&page=${page}`)
      console.log('response', response.data)
      setData(response.data.results)
      setLimit(response.data.limit)
      setPageMax(Math.ceil(response.data.count / response.data.limit))
      setIsloading(false)
    }
    fetchData()
  }, [limit, page])

  const handleSetMax = (e) => {
    const { value } = e.target
    setLimit(value)
  }

  return (
    <>
      {isLoading && <div> Loading ...</div>}
      {/* !isLoading && <div className='list'>
        {data.map(item => {
          return <Card key={item._id} perso={item} />
        })}
      </div> */}
      {!isLoading && <ListCard data={data} />}
      {!isLoading && <Pagination max={limit} setMax={handleSetMax} page={page} setPage={setPage} pageMax={pageMax}/>}
    </>
  )
}

export default Personnages
