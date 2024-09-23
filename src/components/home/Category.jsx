import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="w-1/6 bg-white p-5 max-h-screen shadow-lg rounded-lg">
      <div className="border-b-2 pb-3 px-2 text-2xl font-bold text-gray-700">
        Kategoriler
      </div>

      <div className="mt-4">
        {categories?.map((category, i) => (
          <div
            onClick={() => setCategory(category)}
            key={i}
            className="text-lg py-2 px-3 mt-2 cursor-pointer hover:bg-gray-100 hover:text-blue-600 rounded-md transition-all duration-200 ease-in-out"
          >
            {capitalizeFirstLetter(category)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
