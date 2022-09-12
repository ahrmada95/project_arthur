import { useState, useEffect, useContext } from 'react'
const SellerCard = ({item}) => {
    console.log(item)
return (
<div className='seller-req-card'>
    <div className='seller-req-card-info'>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
        </div>
        {
            item?.status == 'pending'&&
            <div className='seller-req-card-status'>
            <button className='seller-req-card-status-accept hover'>Accept</button>
            <button className='seller-req-card-status-decline hover'>Decline</button>
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