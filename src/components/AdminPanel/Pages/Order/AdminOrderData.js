import React from 'react';

const AdminOrderData = ({watch}) => {
    console.log(watch);
    const handleShipped = ()=> {
        watch.status = 'shipped';
        fetch(`https://eerie-ghost-66570.herokuapp.com/order/id?id=${watch._id}`,
        {method:'PATCH',
        headers: {'content-Type': 'application/json'},
        
    
    body:JSON.stringify(watch)},
    )
        window.location.reload();
    }
    const handleDelete = ()=> {
        const url = `https://eerie-ghost-66570.herokuapp.com/order/id?id=${watch._id}`;
        fetch(url,
        {method: 'DELETE'})
        .then(res =>res.json())
        window.location.reload();
    }
    return (
        <>
        <tr>
        <td>{watch.product}</td>
        <td>{watch.user}</td>
        <td>{watch.adress},{watch.city}</td>
        <td class="text-right">{watch.status}</td>
        <td class="text-right">{watch.payment}</td>
        <td class="text-right"><button onClick={handleDelete}  class="btn btn-sm btn-danger">Delete</button> </td>
        {watch?.status==="ordered" && <td class="text-right"><button onClick={handleShipped} class="btn btn-sm btn-success">Shipped</button></td>}
        
    </tr>
        </>
    );
};

export default AdminOrderData;