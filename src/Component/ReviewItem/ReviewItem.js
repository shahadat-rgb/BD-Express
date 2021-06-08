import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {img,name,price,id,quantity,status}  = props.product;
    const removeCart = props.removeCart
 
    return (
                <div className='container'>
           <div className="row align-items-center">
               <div className="col-md-3">
                  <img style={{width:"100%",padding:"10px",borderRadius:"50"}} src={img} alt="" />
               </div>
               <div className="col-md-2 text-center">
                  <p className='mb-3'>{name}</p>
               </div>
               <div className="col-md-2 text-center">
                 <p>{status==="hot" ? <div className="hot1"> hot </div> : ''}
               {status==="new" ? <div className="new1"> new </div> : ''}</p>
               </div>
               <div className="col-md-2 text-center">
                 <p>&#36; <span id="price">{price}</span></p>
               </div>
    
               <div className="col-md-1 text-center">
                   <p>{quantity}</p>
               </div>
               <div className="col-md-2 text-center">
               <button onClick={()=>removeCart(id)} className="mb-4 mt-3 addToCart"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
               </div>
           </div>
        </div>

    );
};

export default ReviewItem;

