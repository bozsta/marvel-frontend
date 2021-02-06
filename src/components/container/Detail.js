import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Card from '../Card'

const Detail = () => {
  const location = useLocation()
  const { id } = location.state
  const [isLoading, setIsloading] = useState(true)
  const [persoImage, setPersoImage] = useState(null)
  const [comics, setCommics] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comics/char/${id}`)
        setPersoImage(`${response.data.thumbnail.path}/portrait_xlarge.jpg`)
        setCommics(response.data.comics)
        setIsloading(false)
      } catch (error) {
        console.log('Error Retail', error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      {!isLoading && <>
        <div>
          <img src={persoImage} alt='Some alt' />
        </div>
        {comics.map(item => {
          console.log('item', item)
          return <Card key={item._id} item={item} />
        })}
      </>}

    </div>
  )
}

export default Detail