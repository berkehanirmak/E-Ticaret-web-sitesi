import React from 'react'
import Slider from 'react-slick'
const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="!flex items-center bg-gradient-to-r from-blue-300 to-blue-500 p-10 text-white">
          <div className="w-1/2">
            <div className="text-6xl font-bold leading-tight">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-2xl my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              voluptates placeat, consequuntur ratione accusamus.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-[60px] flex justify-center items-center bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300">
              İncele
            </div>
          </div>
          <img
            className="w-1/2 rounded-lg shadow-lg"
            src="https://skcfiles.mncdn.com/mnresize/500/500/livephotos/8/237192-NMLT/01.jpg"
            alt="Ayakkabı 1"
          />
        </div>

        <div className="!flex items-center bg-gradient-to-r from-green-300 to-green-500 p-10 text-white">
          <div className="w-1/2">
            <div className="text-6xl font-bold leading-tight">
              Şık ve Konforlu Ayakkabılar
            </div>
            <div className="text-2xl my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quaerat
              quasi eaque tenetur voluptas repellat nemo.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-[60px] flex justify-center items-center bg-white text-green-600 hover:bg-green-100 transition-all duration-300">
              İncele
            </div>
          </div>
          <img
            className="w-1/2 rounded-lg shadow-lg"
            src="https://skcfiles.mncdn.com/mnresize/500/500/livephotos/8/150241-BKWG/01.jpg"
            alt="Ayakkabı 2"
          />
        </div>

        <div className="!flex items-center bg-gradient-to-r from-purple-300 to-purple-500 p-10 text-white">
          <div className="w-1/2">
            <div className="text-6xl font-bold leading-tight">
              Tarzınıza Uygun Ayakkabılar
            </div>
            <div className="text-2xl my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo ut
              doloribus nostrum facere quisquam.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-[60px] flex justify-center items-center bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300">
              İncele
            </div>
          </div>
          <img
            className="w-1/2 rounded-lg shadow-lg"
            src="https://skcfiles.mncdn.com/mnresize/500/500/livephotos/8/237192-NMLT/01.jpg"
            alt="Ayakkabı 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;