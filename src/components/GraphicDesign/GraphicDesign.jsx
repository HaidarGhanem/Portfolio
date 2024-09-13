
import './GraphicDesign.css';
import Title from '../Title/Title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const GraphicDesign = ({ graphicInfo }) => {
  

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0.5,
    cssEase: "linear"
  };

  return (
    <div className="graphic__container shadow pb-5 pt-5">
      <Title title="Graphic Design Gallery" />

      
      <Slider {...settings } className='slider__container'>
          {
            graphicInfo.map((element, index) => {
              return (
                <div key={index} className='d-flex flex-row justify-content-center align-items-center '>
                  <img src={element.img} className='img__sizing' alt='' />
                </div>
              )
            })
          }
      </Slider>
      
      <div className='d-flex align-items-center justify-content-center mt-5'>
      {/* <button className='btn_lg'>Show More</button> */}
      </div>

    </div>
  );
};

export default GraphicDesign;