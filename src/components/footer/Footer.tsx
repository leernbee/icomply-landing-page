import React from 'react';

import Link from 'next/link';

const navigation = [
  { name: 'Affiliated Businesses', href: '/affiliated-businesses' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms and Conditions', href: '/terms' },
];

const navigation2 = [
  { name: 'Our Team', href: '/team' },
  { name: 'Services and Pricing', href: '/services' },
  { name: 'Become a Partner', href: '/partnership' },
  { name: 'Publications', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-ic-accent">
      <div className="container flex flex-col px-4 pt-24 mx-auto lg:flex-row">
        <div className="shrink-0 mx-auto w-40 h-full text-center md:mx-0 md:mr-20">
          <Link href="/">
            <a className="flex justify-center items-center font-medium md:mb-12">
              <img
                src="/assets/images/icomply-blue-logo.svg"
                alt="Logo"
                className="w-full"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col flex-wrap my-10 w-full text-center md:mt-0 md:text-left xl:flex-row">
          <div className="mb-8 w-full xl:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-ic-secondary uppercase">
              Navigation
            </h2>
            <nav className="mb-8 text-4xl list-none lg:text-5xl">
              {navigation2.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-ic-primary hover:text-ic-secondary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex flex-col justify-start mb-12 w-full">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-ic-secondary uppercase">
                  Company
                </h2>
                <div className="flex mx-auto w-full max-w-md md:mx-0">
                  Address Here <br />
                  Contact Number
                </div>
              </div>
              <div>
                <span className="inline-flex mb-5">
                  <a className="text-ic-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-ic-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
                <div className="flex flex-wrap justify-center mb-3 md:justify-start">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="pr-3 font-semibold text-ic-secondary hover:text-ic-primary transition duration-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-ic-text">
                  Copyright © 2021 iComply by Copperbell Managed Corporate
                  Services. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
