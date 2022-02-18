import React from 'react';

import styled from '@emotion/styled';
import Slider from 'react-slick';

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
      <section className="py-32 bg-ic-accent lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col w-full">
            <h2 className="px-3 mx-auto mb-3 max-w-3xl font-inter text-3xl font-semibold leading-tight text-center text-ic-primary lg:text-5xl">
              Work with trusted professionals from various fields.
            </h2>

            <p className="px-4 mx-auto mb-3 max-w-6xl text-2xl text-center text-ic-text">
              With a combined 3,000 clients and decades of experience in their
              respective fields
            </p>
            {/* <h2 className="px-4 mb-8 font-inter text-3xl font-medium text-center text-cb-primary">
              Here are some of the services we offer.
            </h2>
            <div className="flex flex-wrap px-4 mx-auto max-w-5xl max-auto">
              <div className="py-2 px-4 w-full sm:w-1/2 order-0">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">
                    Business Registration or Renewal (SEC, DTI, BIR, City)
                  </span>
                </div>
              </div>
              <div className="order-6 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">
                    Food and Drug Administration
                  </span>
                </div>
              </div>
              <div className="order-2 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">
                    Secretarial & Corporate Housekeeping
                  </span>
                </div>
              </div>
              <div className="order-7 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">Secondary Licenses</span>
                </div>
              </div>
              <div className="order-3 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">Bookkeeping & Accounting</span>
                </div>
              </div>
              <div className="order-8 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">Online Notarial Services</span>
                </div>
              </div>
              <div className="order-4 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">Human Resources & Payroll</span>
                </div>
              </div>
              <div className="order-9 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">Other Legal Matters</span>
                </div>
              </div>
              <div className="order-5 py-2 px-4 w-full sm:w-1/2">
                <div className="flex items-center p-4 h-full bg-ic-primary rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-white">
                    Patents, Trademarks, & other Intellectual Property
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto -mt-20 w-full max-w-7xl">
          <Wrapper>
            <Slider {...settings} className="mb-20">
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male2.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Guilian Sencio
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Chief Executive Officer
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male5.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Llino Del Rosario
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Chief Technology Officer
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male3.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Atty. Raymond Rodis
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Chief Legal Counsel
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/female1.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Thea Avencula, CPA
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Associate Partner, Accounting
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male1.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Atty. Jonathan Lewis
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Associate Partner, Legal Services
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male4.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Peter Dio, CPA
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Associate Partner, Payroll
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-2 mb-3">
                <div className="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    className="object-cover object-center shrink-0 mb-4 h-56 rounded-lg"
                    src="/assets/images/male6.jpg"
                  />
                  <div className="w-full">
                    <h2 className="text-lg font-medium title-font text-cb-primary">
                      Bravin Cruz
                    </h2>
                    <h3 className="mb-3 text-sm text-cb-text">
                      Chief Consultant, Secondary Licenses
                    </h3>
                  </div>
                </div>
              </div>
            </Slider>
          </Wrapper>
          {/* <h2 className="px-4 my-8 text-3xl font-medium text-center title-font text-cb-primary">
            “Meet the awesome team behind iComply
          </h2>
          <p className="px-4 mx-auto mb-3 text-lg leading-relaxed text-center lg:w-2/3 text-cb-secondary">
            Small and medium enterprises need all the advantages they can get.
            Here at iComply, we provide operational edge and efficiency at a
            fraction of the traditional cost of corporate maintenance. Our team
            of seasoned industry practitioners will assist you in every step of
            the way on a collaboration and automation platform that was made for
            this very purpose.
          </p>
          <p className="mx-auto leading-relaxed text-center text-cb-text lg:w-2/3">
            - Guilian Sencio, CEO
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Team;
