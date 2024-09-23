import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className="bg-white my-5 p-5 flex items-center justify-end shadow-lg rounded-lg">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-100 py-3 px-5 rounded-md text-lg cursor-pointer outline-none transition-all duration-300 ease-in-out hover:bg-gray-200 shadow-sm"
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;