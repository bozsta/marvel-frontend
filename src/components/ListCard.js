import Card from "./Card/";

const ListCard = ({
  data,
  isChar,
  handleFavorisClick,
  favorisEnable,
  favoris,
}) => {
  return (
    <div className="list">
      {data.map((item) => {
        const isFavoris = favoris ? favoris.indexOf(item._id) !== -1 : null;
        return (
          <Card
            key={item._id}
            item={item}
            id={item._id}
            isChar={isChar}
            handleFavorisClick={handleFavorisClick}
            favorisEnable={favorisEnable}
            isFavoris={isFavoris}
          />
        );
      })}
    </div>
  );
};
export default ListCard;
