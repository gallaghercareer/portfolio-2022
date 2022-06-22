import {createContext, useState} from 'react'

const CartContext = createContext();

export function CartProvider({children}){

const [items, setItems] = useState([])

const addToCart = (title,price, quantity)=>{
   setItems((prevState)=>{
       
       if (prevState === undefined) return  [...prevState, {title,price,quantity}]

       prevState.map((cartItem)=>{
        if (cartItem.title === title){
            return [...prevState, {title: cartItem.title, price: cartItem.price, quantity: cartItem.quantity+1}] 

        }
        else{
            return [...prevState, {title,price,quantity}]
        }
       })
      
   })
}



return (
<CartContext.Provider value={{items, addToCart}}>
{children}
</CartContext.Provider>
    )

}

export default CartContext;