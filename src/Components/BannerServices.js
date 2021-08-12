import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function BannerServices() {
  const settings = {
    infinite: true,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  };
  return (
    <div className="slider lg:mx-16 mx-8 lg:p-8">
      <Slider {...settings}>
        <div className="lg:p-12 p-3">
        <div className="card bg-red-200 text-center lg:font-bold  h-32 w-24 lg:w-48  lg:h-44 rounded-lg">
          <Link to="/ourservices">
            {" "}
            <h1 className="mt-4">GOLD LOAN</h1>
          </Link>
        </div>
        </div>
        <div className="lg:p-12 p-3">
        <div className="card bg-red-200  text-center lg:font-bold  h-32 w-24 lg:w-48  lg:h-44 rounded-lg">
          <Link to="/ourservices">
            <h1 className="mt-4">OLD GOLD BUYING</h1>
          </Link>
        </div>
        </div>
        <div className="lg:p-12 p-3 ">
        <div className="card bg-red-200  text-center lg:font-bold h-32 w-24 lg:w-48 lg:h-44 rounded-lg">
          <Link to="/ourservices">
            <h1 className="mt-4">TAKING MORTGAGE GOLD FROM BANK </h1>
          </Link>
        </div>
        </div>
        <div className="lg:p-12 p-3">
        <div className="card bg-red-200  text-center lg:font-bold h-32 w-24 lg:w-48 lg:h-44 rounded-lg">
          <Link to="/ourservices">
            <h1 className="mt-4">AGRICULTUTE LOAN</h1>
          </Link>
        </div>
        </div>
        <div className="lg:p-12 p-3">
        <div className="card bg-red-200 text-center lg:font-bold h-32 w-24 lg:w-48  lg:h-44 rounded-lg">
          <Link to="/ourservices">
            <h1 className="mt-4">PERSONAL LOAN</h1>
          </Link>
        </div>
        </div>
      </Slider>
    </div>
  );
}
export default BannerServices;
