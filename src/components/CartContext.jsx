import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, cantidad) => {
        let search = cartList.find(producto => producto.idItem == item.id);

        if(search === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.picture,
                    nameItem: item.title,
                    descItem: item.description,
                    costItem: item.price,
                    cantItem: cantidad
                }
            ]);
        } else {
            search.cantItem += cantidad;
            setCartList([...cartList]);
        }
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let foundItem = cartList.filter(item => item.idItem != id);
        setCartList(foundItem);
    }

    const totalPorItem = (idItem) => {
        let indice = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[indice].costItem * cartList[indice].cantItem;
    }

    const subTotal = () => {
        let totalXItem = cartList.map(item => totalPorItem(item.idItem));

        return totalXItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const total = () => {
        return subTotal();
    }

    const cantItems = () => {
        let cant = cartList.map(item => item.cantItem);

        return cant.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            addItem,
            removeItem,
            clear,
            totalPorItem,
            subTotal,
            total,
            cantItems
        }}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;