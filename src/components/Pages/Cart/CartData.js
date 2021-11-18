import React from 'react';
import './Cart.css'
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import {GiConfirmed} from "@react-icons/all-files/gi/GiConfirmed";
import {Link} from 'react-router-dom'

const CartData = ({cart}) => {
    const {img, title, price,_id,key} = cart;
    console.log(_id);
    const handleDeleteCart = ()=> {
        const process = window.confirm('Are you sure you want to delete')
        if (process){
            
            const url = `https://eerie-ghost-66570.herokuapp.com/cart/${_id}`;
            fetch(url,
            {method: 'DELETE'})
            .then(res =>res.json())
            window.location.reload();
        }
    }
    return (
        <>
        <tr>
        <td><img className='cartimg' src={img} alt="" /> </td>
        <td>{title}</td>
        <td>In stock</td>
        <td class="text-right">{price}</td>
        <td class="text-right"><button onClick={handleDeleteCart}  class="btn btn-sm btn-danger"><MdDelete/></button> </td>
        <td class="text-right"><Link to={`/order/${key}/${_id}`}><button class="btn btn-sm btn-success"><GiConfirmed/></button></Link> </td>
    </tr>
    </>
    );
};

export default CartData;