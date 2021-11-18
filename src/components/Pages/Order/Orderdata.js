import React from 'react';
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import useAuth from '../../../hooks/useAuth'

const CartData = ({order}) => {
    const {user} = useAuth();
    const {product,status,price, key} = order;
    const handleDeleteOrder = ()=> {
        const process = window.confirm('Are you sure you want to delete')
        if (process){
            
            const url = `https://eerie-ghost-66570.herokuapp.com/order/product?user=${user.email}&product=${key}`;
            fetch(url,
            {method: 'DELETE'})
            .then(res =>res.json())
            window.location.reload();
        }
    }
    return (
        <tr>
        <td>{product}</td>
        <td>{status}</td>
        <td class="text-right">{price}</td>
        {status==='ordered' && <td class="text-right"><button onClick={handleDeleteOrder}  class="btn btn-sm btn-danger"><MdDelete/></button> </td>}
        
    </tr>
    );
};

export default CartData;