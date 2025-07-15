import React from 'react';
import Hero from '../Components/Hero';
import Marque from '../Components/Marque';
import BeaTeacher from '../Components/BeaTeacher';
import ExploreCategory from "../Components/ExploreCategory"
import TopClass from '../Components/TopClass';
const HomePage = () => {
    return (
        <div className='space-y-12'>
           <Hero></Hero>
           <TopClass></TopClass>
           <Marque></Marque>
           <ExploreCategory></ExploreCategory>
           <BeaTeacher></BeaTeacher>
        </div>
    );
};

export default HomePage;