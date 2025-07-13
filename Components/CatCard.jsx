import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CatCard = ({Cat}) => {
  
    return (
       <div className="card p-5 h-48 space-y-2 flex flex-col justify-center items-center bg-base-100 max-w-96 w-96  shadow-sm 
                transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white group">
    <FontAwesomeIcon
        className=" rounded-full px-4 py-4 transition-all duration-300 ease-in-out 
                   group-hover:bg-white group-hover:text-green-500"
        size="2x"
        icon={Cat.image}
    />
    <h1 className="text-xl font-semibold transition-colors duration-300">{Cat.name}</h1>
</div>

    );
};

export default CatCard;