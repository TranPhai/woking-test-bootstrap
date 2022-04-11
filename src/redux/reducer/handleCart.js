const initState = {
    products: []
}
const handleCart = (state = initState,action) =>{
    switch (action.type) {
        case 'ADDCART':{
            let newList = [...state.products];
            const product = action.payload;

            const exist = newList.some(oldproduct => oldproduct.id === product.id );
            if(exist) {
                newList = newList.map(oldproduct => {
                    if(oldproduct.id === product.id) {
                        return {...oldproduct,qty:oldproduct.qty + 1}
                    }
                    return oldproduct
                })
                return {
                    ...state,
                    products: newList
                }
            }
            else 
            {
                newList.push({...product,qty:1})
                return {
                    ...state,
                    products: newList
                }
            }
        }
        case 'DELETECART':{
            let newList = [...state.products];
            const product = action.payload;
            const exist = newList.find(oldproduct => oldproduct.id === product.id );
            if(exist.qty === 1) {
                newList = newList.filter(product => product.id !== exist.id )
                return {
                    ...state,
                    products: newList
                }
            }
            else{
                newList = newList.map(oldproduct => {
                    if(oldproduct.id === product.id) {
                        return {...oldproduct,qty:oldproduct.qty - 1}
                    }
                    return oldproduct
                })
                return {
                    ...state,
                    products: newList
                }
            }

        }
        default:
            return state;
        
    }
}
export default handleCart

// const initialState = {
//     products : []
// }
// const handleCart = (state = initialState,action) => {
//     switch (action.type) {
//         case 'ADDCART': {
//            let newList = [...state.products];
//            let newProduct = action.payload;
//             // check product exist
//             const exist = newList.find((oldProduct) =>oldProduct.id ===newProduct.id)
//             if(exist) {
//                 newList=newList.map((oldProduct) =>{
//                     return (oldProduct.id === newProduct.id ? {...oldProduct, qty: oldProduct.qty+1} : oldProduct);
//                 })
//                 return {
//                     ...state,
//                     products: newList
//                 }
//             }else{
//                 newList.push({...newProduct,qty:1});
//                 return {
//                     ...state,
//                     products: newList,
//                 }
//             }
//         }
//         case 'DELETEITEM':{
//             let newList = [...state.products];
//             let Product = action.payload;
//             // check product exist
//             const exist = newList.find((oldProduct) =>oldProduct.id ===Product.id)
//             if(exist.qty ===1) {
//                 newList = newList.filter((product) =>{
//                     return product.id !== Product.id;
//                 })
//                 return {
//                     ...state,
//                     products: newList
//                 }
//             }else{
//                 newList=newList.map((oldProduct) =>{
//                     return (oldProduct.id === Product.id ? {...oldProduct, qty: oldProduct.qty-1} : oldProduct);
//                 })
//                 return {
//                     ...state,
//                     products: newList
//                 }
//             }
            
//         }
//         default:
//             return state;
//     }
// }
// export default handleCart