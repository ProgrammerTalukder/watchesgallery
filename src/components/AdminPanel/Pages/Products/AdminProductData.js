import React from 'react';
import './product.css'
import {AiTwotoneDelete} from '@react-icons/all-files/ai/AiTwotoneDelete'
const AdminProductData = ({product}) => {
    const deleteProduct = ()=> {
        const url = `https://eerie-ghost-66570.herokuapp.com/watches/product?id=${product._id}`;
        fetch(url,
        {method: 'DELETE'})
        .then(res =>res.json())
        window.location.reload();
    }

    return (
        <>
                            <tr>
                            <td><img className="product-img" alt='' src={product.img} /> </td>
                            <td>{product.title}</td>
                            <td className="text-right">{product.price}</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><AiTwotoneDelete onClick={deleteProduct}></AiTwotoneDelete></button> </td>
                        </tr>
        </>
    );
};

export default AdminProductData;