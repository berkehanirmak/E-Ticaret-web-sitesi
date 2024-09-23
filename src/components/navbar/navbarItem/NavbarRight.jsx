import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCardTotal } from '../../../redux/cardSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector((state) => state.cards)

  useEffect(() => {
    dispatch( getCardTotal())
  } , [dispatch])

  return (
    <div className="flex items-center gap-8">
      {/* Search Bar */}
      <div className="flex items-center border p-3 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
        <input
          className="bg-gray-100 outline-none w-64 text-lg px-2"
          type="text"
          placeholder="Arama Yapınız"
        />
        <CiSearch size={28} className="text-gray-500 cursor-pointer" />
      </div>

      {/* Wishlist Icon */}
      <CiHeart
        size={28}
        className="text-gray-600 hover:text-red-500 transition-all duration-300 cursor-pointer"
      />

      {/* Basket Icon */}
      <div
        onClick={() => navigate('/card')}
        className="relative cursor-pointer"
      >
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs font-bold shadow-md">
          {itemCount}
        </div>
        <SlBasket
          size={28}
          className="text-gray-600 hover:text-blue-500 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default NavbarRight;