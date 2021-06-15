import React, { useState } from "react";




export const CartContext = React.createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (newItem, newQuantity) => {

        const { quantity = 0 } = cart.find(e => e.item.id === newItem.id) || {}

        const newCart = cart.filter(e => e.item.id !== newItem.id)


        setCart([...newCart,
        { item: newItem, quantity: quantity + newQuantity }])

    }// agrega cierta cantidad de un item al carrito.

    const removeItem = (itemId) => {
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    } //remover un item del cart por su id

    const clear = (id) => {
        setCart([])
    }//Remover todos los items

    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)
        return currentItem ? true : false
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }} >{children}</CartContext.Provider>
}

