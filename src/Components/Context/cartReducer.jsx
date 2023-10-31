const cartReducer = (state,action) => { 
    if(action.type==="ADD_TO_CART"){
        let{id,price,title,item}=action.payload;
        // console.log(id,price,title);
        let cartProduct;
        
        cartProduct={
            id:id,
            name:item.title,
            price,
            title,
            // image:item.image
        };
        // if(action.type==="CART_TOTAL_ITEM"){
        //     let updatedItemVal=state.cart.reduce((initialVal,curElem)=>{
        //         initialVal=initialVal;
        //         return initialVal;
        //     },0)
        // }
        return {
            ...state,
            cart:[...state.cart,cartProduct],
           
        }
    }
  return state;
}

export default cartReducer