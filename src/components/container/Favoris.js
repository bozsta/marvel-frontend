import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCard from '../ListCard.js'

const Favoris = () => {
  const [favoris, setFavoris] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const lsValue = JSON.parse(window.localStorage.getItem('myfavoriteMarvel'))
    setFavoris(lsValue)
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/characteres/favoris`, { favorisId: favoris })
        console.log('data', response.data)
        setData(response.data)
      } catch (error) {
        console.log('[FAVORIS] Error:', error)
      }
    }
    fetchData()
  }, [favoris])
  return (
    <>
      <ListCard data={data} />
    </>
  )
}

export default Favoris