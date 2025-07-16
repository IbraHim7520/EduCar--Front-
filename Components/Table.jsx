import React from 'react';

const Table = ({index , request, updateRequestStatus , handleRequestReject , aproveInfo}) => {
    
    return (
        <tr>
        <th>{index+1}</th>
        <td>
           <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
    <img src={request.TeacherImage} />
  </div>
</div>
        </td>
        <td>{request.TeacherName}</td>
        <td>{request.TeacherMail}</td>
        <td>{request.Title}</td>
        <td>{request.ExperienceLevel}</td>
        <td>{request.Category}</td>
        <td>{request.status}</td>
       <td>
        <button onClick={()=> updateRequestStatus(request._id)} disabled={request.Status == "Approved"  || aproveInfo ==="Approved"  || request.Status === "Rejected" || aproveInfo ==="Rejected" ? true : false} className='btn btn-sm bg-green-500 text-white'>
            Approve
        </button>
       </td>
       <td>
        <button onClick={()=>handleRequestReject(request._id)} disabled={request.Status == "Approved" || aproveInfo === "Approved" || request.Status === "Rejected" || aproveInfo ==="Rejected" ? true : false} className='btn btn-sm bg-red-500 text-white'>
            Reject
        </button>
       </td>
      </tr>
    );
};
// request.status == "Rejected" ?
export default Table;