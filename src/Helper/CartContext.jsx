import {createContext, useState} from 'react'

const CartContext = createContext();

export function CartProvider({children}){

const [items, setItems] = useState([])

const addToCart = (id,title,price)=>{
   setItems((prevState)=>{
        
    return [...prevState, {id,title,price}]         
   })
}

const removeFromCart = (item) =>{
        
       setItems((prevState)=>{
        return prevState.filter(element => (item.id !== element.id)            
        )
       })
    }




return (
<CartContext.Provider value={{items, addToCart, removeFromCart}}>
{children}
</CartContext.Provider>
    )

}

export default CartContext;