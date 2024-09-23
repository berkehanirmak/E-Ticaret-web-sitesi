import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/cardSlice';

const DetailComp = ({productDetail}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
    setQuantity(quantity + 1)
  }
  }
  const addBasket = () => {
   dispatch(addToCard({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image , price: productDetail?.price, quantity: quantity}))
  }
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            src={productDetail?.image}
            alt={productDetail?.title}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{productDetail?.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{productDetail?.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl font-semibold mr-2">★</span>
            <span className="text-gray-800 text-lg">{productDetail?.rating?.rate} / 5</span>
            <span className="text-gray-500 text-sm ml-2">({productDetail?.rating?.count} reviews)</span>
          </div>
          <div className="text-4xl font-bold text-green-600 mb-4">{productDetail?.price} TL</div>

          <div className="flex items-center text-2xl mb-6">
            <div onClick={decrement} className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">-</div>
            <input
              className="w-14 text-center mx-4 text-xl border-2 border-gray-300 rounded-md"
              type="text"
              value={quantity}
              readOnly
            />
            <div onClick={increment} className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300">+</div>
          </div>

          <button
            onClick={addBasket}
            className="w-full lg:w-auto bg-blue-600 text-white text-2xl py-4 px-10 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Sepete Ekle
          </button>

          <div className="mt-10 space-y-4">
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Hızlı Teslimat: 1-3 iş günü içinde kargoda</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>%100 Müşteri Memnuniyeti</span>
            </div>
            <div className="flex items-center space-x-4 text-lg text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h7l1-3h4l1 3h7v2H3v-2z" />
              </svg>
              <span>Kredi Kartı ile Güvenli Alışveriş</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;