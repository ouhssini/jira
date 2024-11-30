import React, { createContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);
    const totalPanierRef = useRef(0);
    const buttonRef = useRef(null);
    const quantityRef = useRef(1);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setPanier(storedCart);
        const total = storedCart.reduce((sum, item) => sum + item.quantity, 0);
        totalPanierRef.current = total;
    }, []);
    const saveToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    const ajouter = (produit) => {
        const quantity = parseInt(quantityRef.current.value, 10) || 1;
        setPanier((prev) => {
            const existingProduct = prev.find((item) => item.id === produit.id);
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = prev.map((item) =>
                    item.id === produit.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                updatedProduct = [...prev, { ...produit, quantity }];
            }
            saveToLocalStorage(updatedProduct);
            return updatedProduct;
        });
        localStorage.setItem('panier', JSON.stringify(panier));
        totalPanierRef.current += quantityRef.current;
        buttonRef.current.style.backgroundColor = 'green';
        buttonRef.current.style.color = 'white';
        buttonRef.current.style.transition = 'background-color 0.5s ease-in-out';
        buttonRef.current.textContent = 'Product added to cart Successfully';
        toast.success('Product added to cart successfully');
        setTimeout(() => {
            buttonRef.current.style.backgroundColor = 'white';
            buttonRef.current.style.color = 'black';
            buttonRef.current.style.transition = 'background-color 0.5s ease-in-out';
            buttonRef.current.textContent = 'Ajouter au panier';
        }, 2500)

    };

    const deleteFromCart = (id) => {
        setPanier((prev) => prev.filter((item) => item.id !== id));
    };

    useEffect(() => {
        saveToLocalStorage(panier);
    }, [panier]);

    return (
        <CartContext.Provider value={{ panier, ajouter, totalPanierRef, buttonRef, quantityRef, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
