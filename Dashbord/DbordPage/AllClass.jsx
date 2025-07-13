import React from 'react';
import { useQuery } from '@tanstack/react-query';
const AllClass = () => {
    ///getallclass
    const {data , isPending , error , refetch} = useQuery({
        queryKey:["Class_Lecture"],
        queryFn: async()=>{
            
        }
    })
    return (
        <div>
            hello from admin all class
        </div>
    );
};

export default AllClass;