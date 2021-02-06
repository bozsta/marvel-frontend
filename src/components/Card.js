import { useHistory } from 'react-router-dom'

const Card = ({ item, isChar, id }) => {
  const history = useHistory()
  const handleClick = () => {
    if (isChar) {
      history.push('/detail', { id: id })
    }
  }
  const handleFavorisClick = (e) => {
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
  }
  return (
    <div className='card' onClick={handleClick}>
      <div className='image'>
        {<img src={`${item.thumbnail.path}/portrait_xlarge.jpg`} alt={item.name} />}
      </div>
      <div className='content'>
        <p>{item.name}</p>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
      <div onClick={handleFavorisClick}>add favoris</div>
    </div>
  )
}

export default Card