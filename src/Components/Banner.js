import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  function Banner() {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      

  };
  return (
    <div className="slider m-0 p-0">
      <Slider {...settings}>
          <div>
            <img  className="w-full max-h-screen" src="/Image/Banner1.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/Banner1.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/Banner1.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/Banner1.jpg"  alt="name"/>
          </div>
          
           
        </Slider>
    </div>
  );
}
export default Banner;