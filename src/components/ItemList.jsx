import Item from "./Item";

const ItemList = ({items}) => {

  return (
    <div className="productosContainer">
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            picture={item.picture}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <div className='cssload-loader'>
          <div className='cssload-inner cssload-one'></div>
          <div className='cssload-inner cssload-two'></div>
          <div className='cssload-inner cssload-three'></div>
        </div>
      )}
    </div>
  );
};

export default ItemList;