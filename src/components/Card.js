import { useHistory } from 'react-router-dom'

const Card = ({ item, isChar, id }) => {
  const history = useHistory()
  const handleClick = () => {
    if (isChar) {
      history.push('/detail', { id: id })
    }
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
    </div>
  )
}

export default Card