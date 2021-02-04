const Card = ({ perso }) => {
  return (
    <div className='card'>
      <div className='image'>
        {<img src={`${perso.thumbnail.path}/portrait_xlarge.jpg`} alt={perso.name} />}
      </div>
      <div className='content'>
        <p>{perso.name}</p>
        <p>{perso.description}</p>
      </div>
    </div>
  )
}

export default Card