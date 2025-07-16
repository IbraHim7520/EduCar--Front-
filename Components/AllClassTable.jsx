
import React from 'react';

const AllClassTable = ({ request, index, handleApproveClass, handleClassReject, btnStats }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-9 rounded">
                        <img src={request.Image} />
                    </div>
                </div>
            </td>
            <td>{request.TeacherName}</td>
            <td>{request.TeacherEmail}</td>
            <td>{request.ClassTitle}</td>
            <td >{request.Description.slice(0, 30)}</td>
            <td>${request.ClassPrice}</td>
            <td>{request.Status == "Approved" || btnStats === "Approved" ? "Yes" : "No"} </td>
            <td>
                <button onClick={() => handleApproveClass(request._id)}
                    disabled={request.Status === "Approved" || btnStats === "Approved" || request.Status === "Rejected" || btnStats === "Rejected" ? true : false}
                    className='btn btn-sm bg-green-500 text-white'>
                    {request.Status === "Approved" ? "Approved" : "Approve"}
                </button>
            </td>
            <td>
                <button onClick={() => handleClassReject(request._id)}
                    disabled={request.Status === "Approved" || btnStats === "Approved" || request.Status === "Rejected" || btnStats === "Rejected" ? true : false}
                    className='btn btn-sm bg-red-500 text-white'>
                    {request.Status === "Rejected" ? "Rejected" : "Reject"}
                </button>
            </td>

            <td>
                <button className='btn btn-sm bg-green-500 text-white' disabled={btnStats === "Approved" || request.Status === "Approved" ? false : true} >
                    Progress
                </button>
            </td>
        </tr>
    );
};

export default AllClassTable;