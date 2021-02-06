import Card from './Card'

const ListCard = ({ data, isChar }) => {
  return (
    <div className='list'>
      {data.map(item => {
        return <Card key={item._id} item={item} id={item._id} isChar={isChar} />
      })}
    </div>
  )
}
export default ListCard