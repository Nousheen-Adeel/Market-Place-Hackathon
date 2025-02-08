import { Product } from "../../../types/products";



export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = cart.filter(item => item._id!== productId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

export const updateInventory = (productId : string, newInventory : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = cart.map(item => item._id === productId? {...item, inventory: newInventory} : item)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const getTotalCartItems = () : number => {
    return getCartItems().reduce((total, item) => total + item.inventory, 0)
}

export const getTotalCartPrice = () : number => {
    return getCartItems().reduce((total, item) => total + item.price * item.inventory, 0)
}







