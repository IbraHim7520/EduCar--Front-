import React from 'react';
import Hero from '../Components/Hero';
import Marque from '../Components/Marque';
import BeaTeacher from '../Components/BeaTeacher';
import ExploreCategory from "../Components/ExploreCategory"
const HomePage = () => {
    return (
        <div className='space-y-12'>
           <Hero></Hero>
           <Marque></Marque>
           <ExploreCategory></ExploreCategory>
           <BeaTeacher></BeaTeacher>
        </div>
    );
};

export default HomePage;