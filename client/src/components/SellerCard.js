import { useState, useEffect, useContext } from 'react'
const SellerCard = ({item, setCurrentListing, setIsConfirming}) => {
return (
<div className='seller-req-card' >
    <div className='seller-req-card-info'>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
        </div>
        {
            item?.status == 'requested'&&
            <div className='seller-req-card-status'>
            <button className='seller-req-card-status-accept hover' onClick={()=> {setCurrentListing(item); setIsConfirming(true)}}>Accept</button>
            <button className='seller-req-card-status-decline hover' onClick={()=> {setIsConfirming(true)}}>Decline</button>
            </div> 
        }
        {
             item?.status == 'in_progress'&& 
             <div>
                <button className='seller-complete hover'>Complete</button>
             </div>
        }
       
</div>
)
}

export default SellerCard