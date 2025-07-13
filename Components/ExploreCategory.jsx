import React from 'react';
import CatCard from './CatCard';
import { faBedPulse, faCode, faDesktop, faLanguage, faNotesMedical, faPenRuler, faPhotoFilm, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const ExploreCategory = () => {
const categories = [
  { name: "Web Development", image: faCode },
  { name: "Graphic Design", image: faPenRuler },
  { name: "LifeStyle", image: faBedPulse },
  { name: "Health & Fitness", image: faNotesMedical },
  { name: "Business Strategy", image: faSuitcase },
  { name: "Photography", image: faPhotoFilm },
  { name: "Data Science", image: faDesktop },
  { name: "Language Learning", image: faLanguage }
]
    return (
        <div className='w-full bg-[#F7F8F9] p-5 md:p-12 lg:p-24 flex justify-center items-center'>
            <div className='container w-full'>
                <h1 className='font-bold text-center text-gray-800 text-2xl md:text-4xl xl:text-5xl'>Explore Featured <span className='text-green-500'>Categories</span></h1>
                <p className='text-lg mt-5 md:text-xl text-gray-700 text-center'>Discover a wide range of subjects crafted to spark curiosity and empower learning—from technology and business to arts and personal development. Whether you're a passionate learner or a seasoned expert, there's something here for everyone.</p>

                <div className='mt-16 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
                    
                  {
                    categories.map(( Cat, index)=> <CatCard key={index} Cat={Cat} ></CatCard> )
                  }
                </div>
            </div>
        </div>
    );
};

export default ExploreCategory;