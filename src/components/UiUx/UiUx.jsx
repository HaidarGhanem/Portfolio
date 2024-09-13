import './UiUx.css'
import Title from '../Title/Title'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UiUx = ({ uiInfo }) => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0.5,
        cssEase: "linear"
      };

  return (
    <div className="uiux__container">
    <Title title="Ui/Ux Gallery" className/>

    <div className="uiux__content mt-5 b-secondary pt-5" >
    <Slider {...settings } className='slider__container'>
        {
          uiInfo.map((element, index) => {
            return (
              <div key={index} className='d-flex flex-row justify-content-center align-items-center '>
                <img src={element.img} className='ui__sizing' alt='' />
              </div>
            )
          })
        }
    </Slider>
    <div className='d-flex align-items-center justify-content-center mt-5'>
    {/* <button className='btn_lg'>Show More</button> */}
    </div>
    </div>

  </div>
);
};

export default UiUx