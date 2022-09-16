import Item from "./Item";

const ItemList = ({items}) => {

  return (
    <div className="productosContainer">
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            picture={item.picture}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <p>Cargando productos....</p>
      )}
    </div>
  );
};

export default ItemList;