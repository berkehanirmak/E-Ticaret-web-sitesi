import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCardTotal } from '../redux/cardSlice';
import { useDispatch } from 'react-redux';
import CardComp from '../components/card/CardComp';

const Card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cards, totalAmount, itemCount } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-5">
      {cards?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {cards?.map((card, i) => (
              <CardComp key={i} card={card} />
            ))}
          </div>

          <div className="bg-white p-8 shadow-lg rounded-lg sticky top-5 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Sepet Özeti</h2>
              <div className="text-lg mb-3 text-gray-600">
                Toplam Ürün Sayısı: {itemCount}
              </div>
              <div className="text-3xl font-bold text-green-600 mb-6">
                Sepet Toplamı: {totalAmount.toFixed(2)} TL
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-blue-600 text-white text-2xl rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Satın Al
            </button>
          </div>
        </div>
      ) : (
        <div className="text-3xl font-bold text-center text-gray-700 my-20">
          Sepetinizde ürün bulunmamaktadır.
        </div>
      )}
    </div>
  );
};

export default Card;
