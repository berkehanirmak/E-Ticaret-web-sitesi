import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaAppStore, FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex,FaLinkedin  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-600">
        <div>
          <h3 className="text-xl font-bold mb-4">Hakkımızda</h3>
          <p className="text-sm">
            E-ticaret platformumuz, en kaliteli ürünleri en uygun fiyatlarla sunmak amacıyla kurulmuştur. Müşteri memnuniyetini
            her şeyin üzerinde tutan vizyonumuz ile binlerce ürün çeşidiyle hizmet vermekteyiz.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Kategoriler</h3>
          <ul className="text-sm space-y-2 cursor-pointer">
            <li><h2 className="hover:text-gray-400" >Elektronik</h2></li>
            <li><h2 className="hover:text-gray-400">Moda</h2></li>
            <li><h2 className="hover:text-gray-400">Ev & Yaşam</h2></li>
            <li><h2 className="hover:text-gray-400">Spor & Outdoor</h2></li>
            <li><h2 className="hover:text-gray-400">Kozmetik</h2></li>
            <li><h2 className="hover:text-gray-400">Oyuncak & Bebek</h2></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Yardım Merkezi</h3>
          <ul className="text-sm space-y-2 cursor-pointer">
            <li><h2 className="hover:text-gray-400">Sipariş Takibi</h2></li>
            <li><h2 href="#" className="hover:text-gray-400">İade & Değişim</h2></li>
            <li><h2 href="#" className="hover:text-gray-400">Teslimat Bilgileri</h2></li>
            <li><h2 href="#" className="hover:text-gray-400">Sıkça Sorulan Sorular</h2></li>
            <li><h2 href="#" className="hover:text-gray-400">İletişim</h2></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Bize Ulaşın</h3>
          <ul className="text-sm space-y-2">
            <li><a href="tel:+900123456789" className="hover:text-gray-400">+90s 532 380 14 07</a></li>
            <li><a href="mailto:info@eticaret.com" className="hover:text-gray-400">imrakberkehan@gmail.com</a></li>
            <li><span className="hover:text-gray-400">Pzt-Cuma: 9:00 - 18:00</span></li>
            <li><span className="hover:text-gray-400">Cumartesi: 10:00 - 16:00</span></li>
            <li><span className="hover:text-gray-400">Pazar: Kapalı</span></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 border-b border-gray-600">
      <div>
      <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
      <div className="flex space-x-4 text-6xl cursor-pointer">
      <a
          href="https://www.instagram.com/code.grammer.techno/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/berkehan-irmak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        
        <a
          href="https://github.com/berkehanirmak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/berkehan-irmak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaFacebookF />
        </a>
        
       
      </div>
    </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Ödeme Yöntemleri</h3>
          <ul className="flex text-5xl space-x-4">
            <li><FaCcVisa /></li>
            <li><FaCcMastercard /></li>
            <li><FaCcPaypal /></li>
            <li><FaCcAmex /></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Bültenimize Abone Olun</h3>
          <form>
            <input type="email" placeholder="E-mail adresinizi girin" className="p-3 rounded-md w-full bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"/>
            <button type="submit" className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">Abone Ol</button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Mobil Uygulamamızı İndirin</h3>
          <ul className=" grid grid-cols-1  lg:grid-cols-4 gap-10 text-6xl cursor-pointer">
            <li><FaAppStore /></li>
            <li><FaGooglePlay /></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 LUCIDA. Tüm hakları saklıdır.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 cursor-pointer ">
          <h2>Gizlilik Politikası</h2>
          <h2>Kullanım Koşulları</h2>
          <h2>Çerez Politikası</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;