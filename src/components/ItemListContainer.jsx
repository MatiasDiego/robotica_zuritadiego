import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        alert("Has seleccionado " + cantidad + " items");
    }

    return (
        <>
            <ItemList />
            <ItemCount stock={5} inicial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;