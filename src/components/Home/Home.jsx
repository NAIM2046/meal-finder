import React, { useEffect, useState } from 'react';
import Recipe from '../../Recipe/Recipe';

const Home = () => {
    const [datas , setDatas] = useState([]) ;
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then(res => res.json())
        .then(data => setDatas(data.meals))
    },[])
    console.log(datas)
    return (
        <div className='grid md:grid-cols-3 gap-4 m-2 justify-items-center'>
             
           {
             datas.map( data => <Recipe data={data}></Recipe>)
           }
          
        </div>
    );
};

export default Home;