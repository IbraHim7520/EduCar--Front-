import React from 'react';

const UsersTable = ({ request, index, handleMakeAdmin , adminRole }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        <img src={request.Image} />
                    </div>
                </div>
            </td>
            <td>{request.Name}</td>
            <td>{request.Email}</td>
            <td>{request.Role}</td>
            <td>
                <button onClick={() => handleMakeAdmin(request._id)} disabled={ adminRole || request.Role === "Admin" ? true : false } className='btn btn-sm bg-green-500 text-white'>Make Admin</button>
            </td>
        </tr>
    );
};

export default UsersTable;