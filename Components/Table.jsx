import React from 'react';

const Table = ({index , request, updateRequestStatus , handleRequestReject}) => {
    
    return (
        <tr>
        <th>{index+1}</th>
        <td>
            <img src={request.image} className='w-8 rounded-full'></img>
        </td>
        <td>{request.TeacherName}</td>
        <td>{request.TeacherMail}</td>
        <td>{request.Title}</td>
        <td>{request.ExperienceLevel}</td>
        <td>{request.Category}</td>
        <td>{request.status}</td>
       <td>
        <button onClick={()=> updateRequestStatus(request._id)} disabled={request.status == "Approved" ? true : false} className='btn btn-sm bg-green-500 text-white'>
            Approve
        </button>
       </td>
       <td>
        <button onClick={()=>handleRequestReject(request._id)} disabled={request.status == "Approved" ? true : false} className='btn btn-sm bg-red-500 text-white'>
            Reject
        </button>
       </td>
      </tr>
    );
};
// request.status == "Rejected" ?
export default Table;