import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addCart,deleteCart} from '../redux/action'

const Cart = () => {
    const dispatch = useDispatch()
    const cartList = useSelector(state => state.handleCart.products)
    const decreaseHandle= (product) =>{
        dispatch(deleteCart(product))
    }
    const increaseHandle= (product) =>{
        dispatch(addCart(product))
    }
    const formatNumber = (num) =>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

  return (
    <>
    <div className="container">
        {cartList.map((product,index) =>{
          return(
            
                <div className="row cart-item mb-3" key ={index}>
                    <div className="col-md-4">
                      <img src={product.img} alt={product.title}
                      height="200px" width="180px"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                        {product.qty} x {formatNumber(product.price)} = {formatNumber(product.qty * product.price)} VNĐ
                      </p>
                      <button className="btn btn-outline-dark me-4" onClick={()=> decreaseHandle(product)}>
                        <i className="fa fa-minus"></i>
                      </button>
                      <button className="btn btn-outline-dark"onClick={()=> increaseHandle(product)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                </div>
            
          )
        })}
        {/* <div><p className="price lead fw-bold" >Total: ${Total()}</p></div> */}
        
      </div>  
     
    </>
  )
}

export default Cart