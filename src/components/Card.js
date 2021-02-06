import { useHistory } from 'react-router-dom'
import BtnFavoris from './BtnFavoris'

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
          <BtnFavoris favorisEnable={favorisEnable} handleFavoris={handleFavoris} isFavoris={isFavoris} />
          <div className='image'>
            {item.thumbnail && <img src={`${item.thumbnail.path}/portrait_xlarge.jpg`} alt={item.name} />}
            {item.name && <div className='title'>{item.name}</div>}
            {item.title && <div className='title' >{item.title}</div>}
          </div>
        </div>
        <div className='flip-card-back'>
          <BtnFavoris favorisEnable={favorisEnable} handleFavoris={handleFavoris} isFavoris={isFavoris} />
          <div className='content'>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      

      {/* favorisEnable && <div onClick={handleFavoris}>add favoris</div> */}
    </div>
  )
}

export default Card