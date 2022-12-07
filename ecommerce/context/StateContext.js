import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

//children = Alles innerhalb des Components sind children
export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    //Endsumme
    const [totalPrice, setTotalPrice] = useState();

    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        //Schauen ob Produkt schon in CartItems ist
        //checkProductInCart = bool (Wenn ein item = produkt ist => true)
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        /*z.B. Alter Stand: 10€
        Neuer Artikel: 5€ * 2x
        Neuer Stand. 20€*/
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart) {
            //Packe nur die Quantity vom Produkt in CartItems
            const updatedCartItems = cartItems.map((cartProduct) => {

                //Wenn das Item schon vorhanden ist, packe nur die Quantity rein
                if(cartProduct._id === product._id) return {
                    ...cartProduct, quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        }
        else {
            //Setze Quantity vom produkt auf die richtige Quantity
            //packe das Produkt in CartItems, aber behalte die alte Liste
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }

        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decreaseQty = () => {
        setQty((prevQty) => {
            if((prevQty - 1) < 1) return 1;
            return prevQty - 1;
        });
    }

    return (
        //Wrap alles in einem Context-Provider
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            increaseQty,
            decreaseQty,
            onAdd,
            setShowCart
        }}
        >
            {children}
        </Context.Provider>
    )
}

//Damit von außen darauf zugegriffen wird
//Context benutzen + inkl. aller States & Functions
//States & Functions sind im Context.Provider
export const useStateContext = () => useContext(Context);