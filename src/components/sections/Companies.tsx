import React from 'react';

import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Companies: React.FC = () => {
  return (
    <section className="relative z-10">
      <div className="py-12 px-4 bg-cb-accent">
        <Slider {...settings}>
          <div>
            <img
              src="/assets/images/logoipsum-logo-8.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-10.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-12.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-25.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-26.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-27.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <div>
            <img
              src="/assets/images/logoipsum-logo-30.svg"
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Companies;
