import { useHistory } from 'react-router-dom'
import AddFavoris from './AddFavoris'

const Card = ({ item, isChar, id, handleFavorisClick, favorisEnable, isFavoris }) => {
  const history = useHistory()
  const handleClick = () => {
    if (isChar) {
      history.push('/detail', { id: id })
    }
  }
  const handleFavoris = (e) => {
    handleFavorisClick(id, e)
  }
  return (
    <div className='card flip-card' onClick={handleClick}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='image'>
            {item.thumbnail && <img src={`${item.thumbnail.path}/portrait_xlarge.jpg`} alt={item.name} />}
          </div>
        </div>
        <div className='flip-card-back'>
          <div className='content'>
            <p>{item.name}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      <AddFavoris favorisEnable={favorisEnable} handleFavoris={handleFavoris} isFavoris={isFavoris} />

      {/* favorisEnable && <div onClick={handleFavoris}>add favoris</div> */}
    </div>
  )
}

export default Card