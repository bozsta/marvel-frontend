import Card from './Card'

const ListCard = ({ data }) => {
  return (
    <div className='list'>
      {data.map(item => {
        return <Card key={item._id} perso={item} />
      })}
    </div>
  )
}
export default ListCard