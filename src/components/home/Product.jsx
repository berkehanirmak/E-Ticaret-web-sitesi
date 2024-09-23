import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  // Başlık belirli bir karakter sayısından sonra kesilecek.
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div
      onClick={() => navigate(`/products/${product?.id}`)}
      className="w-[300px] p-5 mb-8 mx-5 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer bg-white relative"
    >
      <div className="text-xl font-bold absolute rounded-md top-3 right-3 bg-green-500 text-white p-2 shadow-md">
        {product?.price} <span className="text-sm">TL</span>
      </div>

      <img
        className="w-full h-[250px] object-cover rounded-md mb-4 transition-transform duration-300"
        src={product?.image}
        alt={product?.title}
      />

      <div className="text-center text-lg font-semibold text-gray-800 mb-2">
        {truncateTitle(product?.title, 40)}
      </div>

      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full">Hızlı Teslimat</span>
        </div>
        <div className="flex items-center">
          <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full">Kargo Bedava</span>
        </div>
      </div>

      <div className="flex items-center justify-center mb-4">
        <span className="text-yellow-500 text-2xl font-semibold mr-2">★</span>
        <span className="text-gray-800 text-lg">{product?.rating?.rate} / 5</span>
        <span className="text-gray-500 text-sm ml-2">({product?.rating?.count} değerlendirme)</span>
      </div>
    </div>
  );
};

export default Product;
