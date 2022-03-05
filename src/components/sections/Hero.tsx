import React from 'react';

import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="header">
      <div className="relative py-56 lg:pt-72 lg:pl-96 w-100">
        <div className="container relative z-20 px-6 mx-auto max-w-[720px]">
          <h1 className="mb-6 font-inter text-2xl font-bold leading-tight text-ic-primary lg:text-5xl">
            Register, manage, and maintain your business from a single app.
            End-to-end from incorporation to accounting and even retirement.
          </h1>
          <p className="mb-6 text-lg font-bold leading-normal text-ic-secondary lg:text-2xl">
            Our lawyers, accountants, and business management specialists will
            assist you every step of the way
          </p>
          <Button type="secondary" link="services" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-gray-100 z-100 h-100 w-100"></div>
      </div>
    </section>
  );
};

export default Hero;
