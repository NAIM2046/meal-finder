import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const {idMeal} = useParams() ;
    //console.log(idMeal) ;
    const [details , setdetail] = useState([])
    useEffect( ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
       .then(jes=> jes.json())
       .then(data => setdetail(data.meals[0]))
       console.log(details)
    },[])
    return (
        <div>
            <h3 className='text-center font-bold text-3xl'>{details.strMeal}</h3>
            <div className="flex justify-center items-center ">
                
                <img className='w-80 ' src={details.strMealThumb} alt="" />
                
         </div>

         <div className='text-center'>
            
            <ol>
                <li>
                    {details.strIngredient1}
                </li>
                <li>
                    {details.strIngredient2}
                </li>
                <li>
                    {details.strIngredient3}
                </li>
                <li>
                    {details.strIngredient4}
                </li>
                

            </ol>
         </div>
          <div className='p-2 m-1'>
            <p className=''>{details.strInstructions}</p>
          </div>

          
                
           
        </div>
    );
};

export default RecipeDetails;