import React from 'react';

const AssignmentTable = ({request , index , handleAssignmentSubmission , data, submissionCount }) => {
    return (
        <tr>
        <td>{index+1}</td>
        <td>{request.AssignmentTitle}</td>
        <td>{request.AssignmentDescription}</td>
        <td>{request.AssignmentDeadLine}</td>
        <td>{submissionCount}</td>
        <td>
            <button onClick={()=>handleAssignmentSubmission(data._id , request)} className='btn btn-success'>Submit</button>
        </td>
      </tr>
    );
};

export default AssignmentTable;