import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({data}) => {
    const {strCategory ,strArea,idMeal, strMealThumb,strMeal} = data ;
    return (
        <div>
            <Link to= {`/${idMeal}`}>
            <img className='w-64 m-2' src={strMealThumb} alt="photo" />

            
            </Link>
            <div className='flex'>
            <p className='bg-slate-300 mr-3 rounded-lg p-1'>Meal : {strMeal}</p>
            <p className='bg-slate-300 mr-3 rounded-lg p-1'>Category : {strCategory}</p>
            </div>
            
                
            
        </div>
    );
};

export default Recipe;