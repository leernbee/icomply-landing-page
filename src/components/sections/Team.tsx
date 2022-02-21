import React from 'react';

import styled from '@emotion/styled';
import Slider from 'react-slick';

import SectionTitle from '../common/SectionTitle';

const teamMembers = [
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
  {
    name: 'Guilian Sencio',
    position: 'Chief Executive Officer',
    image: '/assets/images/male2.jpg',
  },
];

const Team: React.FC = () => {
  const Wrapper = styled.div`
    .slick-slider {
      margin-bottom: 8px;
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
      position: relative;
      display: block;
      margin: 0;
      padding: 0;
    }
    .slick-list:focus {
      outline: none;
    }
    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    .slick-track {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after {
      display: table;
      content: '';
    }
    .slick-track:after {
      clear: both;
    }
    .slick-loading .slick-track {
      visibility: hidden;
    }
    .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
    }
    [dir='rtl'] .slick-slide {
      float: right;
    }
    .slick-slide img {
      display: block;
    }
    .slick-slide.slick-loading img {
      display: none;
    }
    .slick-slide.dragging img {
      pointer-events: none;
    }
    .slick-initialized .slick-slide {
      display: block;
    }
    .slick-loading .slick-slide {
      visibility: hidden;
    }
    .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
      display: none;
    }
    /* Arrows */
    .slick-prev,
    .slick-next {
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 50%;
      display: block;
      width: 20px;
      height: 20px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: transparent;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: 0.25;
    }
    .slick-prev:before,
    .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;
      opacity: 0.75;
      color: white;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .slick-prev {
      left: -25px;
    }
    [dir='rtl'] .slick-prev {
      right: -25px;
      left: auto;
    }
    .slick-prev:before {
      content: '←';
    }
    [dir='rtl'] .slick-prev:before {
      content: '→';
    }
    .slick-next {
      right: -25px;
    }
    [dir='rtl'] .slick-next {
      right: auto;
      left: -25px;
    }
    .slick-next:before {
      content: '→';
    }
    [dir='rtl'] .slick-next:before {
      content: '←';
    }

    /* Dots */
    .slick-dotted.slick-slider {
      margin-bottom: 30px;
    }

    .slick-dots {
      position: absolute;
      bottom: -20px;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
    }

    .slick-dots li {
      position: relative;
      display: inline-block;
      width: 10px;
      height: 8px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      transition: width 0.3s ease-in-out;
    }
    .slick-dots li button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 10px;
      height: 8px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: none;
      background: transparent;
    }
    .slick-dots li button:hover,
    .slick-dots li button:focus {
      outline: none;
    }
    .slick-dots li button:hover:before,
    .slick-dots li button:focus:before {
      opacity: 1;
    }
    .slick-dots li button:before {
      font-family: 'slick';
      font-size: 6px;
      line-height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 8px;
      content: '•';
      text-align: center;
      opacity: 0.25;
      color: black;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before {
      opacity: 0.75;
      color: black;
    }

    /* Custom Slick Dots */
    @keyframes loading {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
    .ft-slick__dots--custom {
      height: 8px;
      width: 14px;
      background-color: #e5e7e9;
      border-radius: 4px;
      position: relative;
    }
    .slick-dots li {
      width: 14px;
      margin: 0 3px;
      transition: width 0.3s ease-in-out;
    }
    .slick-dots .slick-active {
      width: 32px;
      transition: width 0.3s ease-in-out;
    }
    .slick-dots .slick-active .ft-slick__dots--custom {
      width: 32px;
      top: 0px;
      overflow: hidden;

      .loading {
        height: 8px;
        animation: loading 5s ease-in;
        background-image: linear-gradient(270deg, #ebe2d6, #7c6a54);
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px;
      }
    }
  `;

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (_i: any) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-32 w-full bg-ic-accent lg:py-40 ">
        <div className="container relative mx-auto max-w-7xl">
          <div className="text-center text-ic-primary">
            <SectionTitle
              title="Work with trusted professionals from various fields."
              subtitle="With a combined 3,000 clients and decades of experience in their respective fields"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto -mt-20 w-full max-w-7xl">
          <Wrapper>
            <Slider {...settings}>
              {teamMembers.map((teamMember, i) => (
                <div key={i} className="px-2 mb-3">
                  <div className="flex flex-col items-center h-full text-center">
                    <img
                      alt="team"
                      className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                      src={teamMember.image}
                    />
                    <div className="w-full">
                      <h2 className="text-lg font-medium text-ic-primary title-font">
                        {teamMember.name}
                      </h2>
                      <h3 className="mb-3 text-xs text-ic-text">
                        {teamMember.position}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default Team;
