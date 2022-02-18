import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="header">
      <div className="relative pt-72 pb-60 lg:pl-96 w-100">
        <div className="container relative z-20 px-6 mx-auto max-w-[720px]">
          <h1 className="mb-5 font-inter text-4xl font-bold leading-tight text-ic-primary lg:text-[42px]">
            Register, manage, and maintain your business from a single app.
            End-to-end from incorporation to accounting and even retirement.
          </h1>
          <p className="mb-6 text-xl font-bold leading-normal text-ic-text lg:text-2xl">
            Our lawyers, accountants, and business management specialists will
            assist you every step of the way
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white whitespace-nowrap bg-ic-secondary hover:bg-ic-primary rounded-md border border-transparent shadow-sm"
          >
            Get Started
          </a>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-gray-100 z-100 h-100 w-100"></div>
      </div>
    </section>
  );
};

export default Hero;
