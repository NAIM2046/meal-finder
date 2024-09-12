import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Home from '../components/Home/Home';
import { useNavigate } from 'react-router-dom';
const NameSearch = () => {
  const [input , setInput] = useState('') ;
  const navigate = useNavigate() ;
  const handleSubmit =(e)=>{
    e.preventDefault() ;
    //console.log("input: " , input)
    navigate(`/search/${input}`) ;
  }
 // console.log(input) 
    return (
        <div className='p-5 max-w-full'>
            <div className='flex justify-center gap-20 md:gap-96 '>
                <div>
                  <p className='font-bold border p-1 pl-3 pr-3 rounded-lg '>Food Recipes</p>
                </div>
                <div>
                  <input 
                   onChange={(e)=> setInput(e.target.value)}
                  className='border border-black rounded p-1 mr-3 w-auto' type="text" placeholder='Search Meals' />
                  <button onClick={handleSubmit} className='border rounded-full p-3 bg-fuchsia-300'><CiSearch /></button>
                </div>
            </div>
           
        </div>
    );
};

export default NameSearch;