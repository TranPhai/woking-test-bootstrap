import React,{useState,useEffect,useMemo} from 'react'
import {DATA} from '../DATA'
import '../css/Products.css'
import {useDispatch} from 'react-redux'
import {addCart} from '../redux/action'


const Products = () => {
    const [data,setData] = useState(useMemo(()=>DATA),[])
    const [filter,setFilter] = useState(data)
    const [dataId,setDataId] = useState([]);
    const [category,setCategory] = useState('');

    const [isSelect,setIsSelect] = useState(false);
    const [isDelele,setDelete] = useState(true);
    const [isSelectAll,setIsSelectAll] = useState(false);

    const [checkedState, setCheckedState] = useState(
        new Array(DATA.length).fill(false)
    );

    
    const dispatch = useDispatch();

    useEffect(()=>{          
        const filterProduct = () => {
            let newList = data;
            if(category === 'new'){
                newList = data.filter((item)=>{return item.status === 'new'})
            }
            else if(category !== ''){
                newList = data.filter((item)=>{return item.category === category})
            }
            setFilter(newList);
        } 
        filterProduct();

    },[category])
    





    const formatNumber = (num) =>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    const deleteOneItem = (idItem) =>{
        const listAfterDelete = data.filter(item => item.id !== idItem);
        setData(listAfterDelete);  
        setFilter(listAfterDelete);
        // filterProduct(categoryy);
    }

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          { 
            if(index+1 === position){
                return !item;
            }
            return item;
            //   index === position ? !item : item
          }
        );

        setCheckedState(updatedCheckedState);
    
    };
    const deleteMultiple =  () => {
        checkedState.map((item,index) => {
                if(item === true){
                    setDataId(prev => [...prev,index+1])
                }
        })
        
        setDelete(!isDelele);
    }

    const deleteConfirm = () => {
        const muntipleItem = data.filter((item,index) => !dataId.includes(item.id));
        setData(muntipleItem);  
        setFilter(muntipleItem);
        setDelete(!isDelele);
    }

    const selectAll = (status) => {
        const updatedCheckedState = checkedState.map((item) =>
        { 
          if(item === false && status === false ){
            return !item;
          }
          return !item;
        }
      );

      setCheckedState(updatedCheckedState);
    }

    const handleBuy = (product) => {
        dispatch(addCart(product))
    }
    const ShowProducts = () => {
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5">
                    <div className="row row-res">
                        <button className="col-sm-3 btn btn-outline-dark" onClick={()=>setCategory('')}>Tất cả</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setCategory("new")}>Sản phẩm mới</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setCategory("IPhone")}>IPhone</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setCategory("Samsung")}>Samsung</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setCategory("Xiaomi")}>Xiaomi</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setCategory("Oppo")}>Oppo</button>
                        <button className="col-sm-3 btn btn-outline-dark"onClick={()=>setIsSelect(prev=> !prev)}>Select</button>
                        {isSelect ?<button className="col-sm-3 btn btn-outline-dark" onClick={()=>selectAll(isSelectAll)}>SelectAll</button>:''}
                        {isSelect && isDelele ?<button className="col-sm-3 btn btn-primary"onClick={deleteMultiple}>Delete</button>:''}
                        {!isDelele?<button className="col-sm-3 btn btn-danger"onClick={deleteConfirm}>Delete Confirm</button>:''}
                    </div>
                </div>
                { filter.map((item,index)=>{
                    return(
                        <div className="col-sm-6 col-lg-3" key ={item.id}>
                            <div className="item">
                                <div className="item-card card p-3 m-3">
                                    <img src={item.img} className="card-img-top" alt={item.title}/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text lead">{formatNumber(item.price)}VND</p>  
                                        <button  className="btn btn-primary" onClick={()=>handleBuy(item)}>Mua</button>
                                        {isSelect?<button className= "btn btn-danger btn-delete" onClick={()=>deleteOneItem(item.id)}>Xóa</button> : ''}
                                    </div>
                              
                                </div>
                               {item.status === 'new' ? <div className="item__status">
                                    <div className="item__status-title">New</div>
                                </div> : <div></div>  } 
                                {isSelect?<div className="left-section">  
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={item.title}
                                        value={item.title}
                                        checked={checkedState[item.id-1]}  //checkedState
                                        onChange={() => handleOnChange(item.id)}  //handleOnChange
                                    />
                                   
                                </div>:''}
                            </div>

                        </div>
                    )
                })}
            </>
        )
    }


  return (
    <div className="products my-5 py-5">
         <div className="container">
             <div className="row">
                <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Sản phẩm</h1>
                        <hr/>
                </div>
             </div>
             <div className="row">
                   <ShowProducts/>
            </div>
        </div>   
    </div>
  )
}

export default Products