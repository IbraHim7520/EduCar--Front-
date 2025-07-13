import React from 'react';

const UsersTable = ({request , index}) => {
    return (
        <tr>
        <td>{index+1}</td>
        <td>
            <img src={request.Image} className='w-8 rounded-full'></img>
        </td>
        <td>{request.Name}</td>
        <td>{request.Email}</td>
        <td>{request.Role}</td>
       <td>
        <button className='btn btn-sm bg-green-500 text-white'>{request.isAdmin ? "Unassign" : "Make Admin"}</button>
       </td>
      </tr>
    );
};

export default UsersTable;