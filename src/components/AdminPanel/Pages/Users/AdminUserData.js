import React from 'react';

const AdminUserData = ({user}) => {
    const makeAdmin = ()=> {
        user.role = 'admin';
        fetch(`https://eerie-ghost-66570.herokuapp.com/user/admin?id=${user._id}`,
        {method:'PATCH',
        headers: {'content-Type': 'application/json'},
    
    body:JSON.stringify(user)},
    )
        window.location.reload();
        
        console.log(user)
        
    }
    console.log(user)
    const makeUser = ()=> {
        user.role = 'user';
        fetch(`https://eerie-ghost-66570.herokuapp.com/user/user?id=${user._id}`,
        {method:'PATCH',
        headers: {'content-Type': 'application/json'},
    
    body:JSON.stringify(user)},
    )
    
    window.location.reload();
        console.log(user)
        
    }
    console.log(user)
    const deleteUser = ()=> {
        const url = `https://eerie-ghost-66570.herokuapp.com/user/delete?id=${user._id}`;
        console.log(user._id)
        fetch(url,
        {method: 'DELETE'})
        .then(res =>res.json())
        window.location.reload();
    }
    return (
        <>
        <tr>
        <td>{user.email}</td>
        <td>{user.displayName}</td>
        <td className="text-right">{user.role}</td>
        {user.role ==='user' &&<td className="text-right"><button onClick={makeAdmin} className="btn btn-sm btn-success">Make Admin</button> </td>}
        {user.role==='admin' &&<td className="text-right"><button onClick={makeUser} className="btn btn-sm btn-success">Make User</button> </td>}
        
        <td className="text-right"><button onClick={deleteUser} className="btn btn-sm btn-danger">Delete User</button> </td>
    </tr>
</>
    );
};

export default AdminUserData;