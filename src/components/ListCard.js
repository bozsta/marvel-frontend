import Card from './Card'

const ListCard = ({ data, isChar, handleFavorisClick, favorisEnable, favoris }) => {
  return (
    <div className='list'>
      {data.map(item => {
        const isFavoris = favoris.indexOf(item._id) !== -1
        return <Card key={item._id} item={item} id={item._id} isChar={isChar} handleFavorisClick={handleFavorisClick} favorisEnable={favorisEnable} isFavoris={isFavoris} />
      })}
    </div>
  )
}
export default ListCard