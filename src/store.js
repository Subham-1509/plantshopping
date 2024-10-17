import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import addItem from './CartSlice';
import removeItem from './CartSlice';
import incrementQuantity from './CartSlice';
import decrementQuantity from './CartSlice';


 const store = configureStore({
    reducer: {
        cart: cartReducer,
        add: addItem,
        remove: removeItem,
        increase: incrementQuantity,
        subtract: decrementQuantity,    
    },
});
export default store