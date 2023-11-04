const cartReducer = (state,action) => { 
    
    if(action.type==="ADD_TO_CART"){
        let{id,price,title,item}=action.payload;

        const existingItemIndex = state.cart.findIndex((item) => item.id === id);
            console.log(existingItemIndex);
            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its quantity
                const updatedCart = state.cart.map((item, index) => {
                  if (index === existingItemIndex) {
                    return {
                      ...item,
                      quantity: item.quantity + 1,
                    };
                  }
                  return item;
                });


        return {
            ...state,
            cart:updatedCart,
            // cart:[...state.cart,cartProduct],
            // id:id,
           
        };
    }else{
        const cartProduct = {
            id: id,
            name: item.title,
            price,
            title,
            image: item.img,
            quantity: 1,
          };
          return {
            ...state,
            cart: [...state.cart, cartProduct],
          };

    }}

    if(action.type==="REMOVE_ITEM"){
        let updatedCart=state.cart.filter((curItem)=>curItem.id !==action.payload);
        return {
            ...state,
            cart:updatedCart,
        }
    }
    if(action.type==="CART_TOTAL_ITEM"){
        // let updatedItemVal=state.cart.reduce((initialVal,curElem)=>{
        //     // let {quantity}=curElem;
        //      initialVal= initialVal+ 1;
        //     return initialVal;
        // },0);
        let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
            initialVal = initialVal + curElem.quantity;
            return initialVal;
            console.log(initialVal);
          }, 0);
        
      
        return {
            ...state,
            total_item:updatedItemVal,
        }
    }
if(action.type==="CART_TOTAL_PRICE"){
    let total_price =state.cart.reduce((initialVal,curElem)=>{
        let {price,quantity}=curElem;
        initialVal=initialVal+price*5;
        return initialVal;
    },0);
    return {
        ...state,
        total_price,
    }
}


  return state;
}

export default cartReducer