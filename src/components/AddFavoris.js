import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddFavoris = ({ favorisEnable, handleFavoris, isFavoris }) => {
  return (
    <>
      {favorisEnable && <div onClick={handleFavoris} className={isFavoris ? 'added ' : ''}>
        <FontAwesomeIcon icon='star' />
      </div>}
    </>
  )
}
export default AddFavoris