import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnFavoris = ({ favorisEnable, handleFavoris, isFavoris }) => {
  return (
    <>
      {favorisEnable && <div onClick={handleFavoris} className={`btn-favoris ${isFavoris ? 'added ' : ''}`}>
        <FontAwesomeIcon icon='star' />
      </div>}
    </>
  )
}
export default BtnFavoris