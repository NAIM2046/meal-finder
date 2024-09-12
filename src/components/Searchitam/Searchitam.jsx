import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../../Recipe/Recipe';

const Searchitam = () => {
  const { input } = useParams();
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]); // State for filtered data

  // Fetching data from the API
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.meals);
      });
  }, []);

  // Filtering data whenever `datas` or `input` changes
  useEffect(() => {
    if (input && datas.length > 0) {
      const Searchdata = datas.filter((data) => data.strCategory === input);
      setFilteredDatas(Searchdata);
    } else {
      setFilteredDatas(datas); // If no input or empty input, show all data
    }
  }, [input, datas]);

  return (
    <div>
      <h3 className='text-center font-bold text-3xl'>Search Item</h3>
      <div className="grid md:grid-cols-3 gap-4 m-2 justify-items-center">
        {filteredDatas && filteredDatas.length > 0 ? (
          filteredDatas.map((data) => (
            <Recipe key={data.idMeal} data={data} />
          ))
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
};

export default Searchitam;
