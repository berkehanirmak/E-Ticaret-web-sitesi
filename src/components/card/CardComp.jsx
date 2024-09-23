import React from 'react'
import { removeFromCard } from '../../redux/cardSlice'
import { useDispatch } from 'react-redux'

const CardComp = ({card}) => {
  const dispatch = useDispatch()

  return (
    <div className="my-8 p-5 border-b border-gray-200 flex items-center justify-between gap-6 shadow-lg rounded-lg">
      {/* Product Image */}
      <img
        className="w-[150px] h-[150px] object-cover rounded-lg"
        src={card?.image}
        alt={card?.title}
      />
      
      {/* Product Details */}
      <div className="w-[300px]">
        <div className="text-2xl font-semibold text-gray-800">{card?.title}</div>
        <div className="text-lg text-gray-500 mt-2">Fiyat: <span className="text-gray-800">{card?.price} TL</span></div>
        <div className="text-lg text-gray-500 mt-1">Miktar: <span className="text-gray-800">{card?.quantity}</span></div>
      </div>
      
      {/* Total Price */}
      <div className="text-3xl font-bold text-green-600">
        {card?.price * card?.quantity} TL
      </div>

      {/* Remove Button */}
      <div
        onClick={() => dispatch(removeFromCard(card?.id))}
        className="cursor-pointer bg-red-500 text-white w-[120px] h-[50px] flex justify-center items-center rounded-lg text-xl transition-all hover:bg-red-600 active:scale-95"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CardComp;