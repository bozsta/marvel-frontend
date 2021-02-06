import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCard from '../ListCard'
import Pagination from '../Pagination'

const Personnages = ({ search }) => {
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageMax, setPageMax] = useState(null)
  const fav = JSON.parse(window.localStorage.getItem('myfavoriteMarvel')) || []
  const [favoris, setFavoris] = useState(fav)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/characteres/all?limit=${limit}&page=${page}&name=${search}`)
      console.log('response', response.data)
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
  const handleFavorisClick = (id, e) => {
    e.stopPropagation()
    const lsValue = JSON.parse(window.localStorage.getItem('myfavoriteMarvel'))
    let newLsValue = []
    let index = -1
    if (lsValue) {
      index = lsValue.indexOf(id)
    }
    if (index !== -1) {
      lsValue.splice(index, 1)
      newLsValue = [...lsValue]
    } else {
      newLsValue = lsValue ? [...lsValue, id] : [id]
    }
    window.localStorage.setItem('myfavoriteMarvel', JSON.stringify(newLsValue))
    setFavoris(newLsValue)
  }

  return (
    <>
      {isLoading && <div> Loading ...</div>}
      {!isLoading && <ListCard data={data} isChar='true' handleFavorisClick={handleFavorisClick} favorisEnable='true' favoris={favoris} />}
      {!isLoading && <Pagination max={limit} setMax={handleSetMax} page={page} setPage={setPage} pageMax={pageMax} />}
    </>
  )
}

export default Personnages
