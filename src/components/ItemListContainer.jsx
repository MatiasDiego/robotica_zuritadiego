import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        alert("Has seleccionado " + cantidad + " items");
    }

    return (
        <>
            <p>{greeting}</p>
            <ItemCount stock={5} inicial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;