import React from 'react';

import Link from 'next/link';

const Newsletter: React.FC = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="px-4 mx-auto mb-32 max-w-7xl sm:px-6 lg:px-8 lg:mb-40">
          <div className="py-10 px-6 bg-ic-primary rounded-3xl shadow-sm sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
            <div className="flex justify-center my-12 text-center sm:w-full lg:flex-1 lg:order-1 lg:my-0 lg:ml-8">
              <img
                className="mx-auto w-52 lg:w-72"
                src="/assets/images/newsletter.svg"
                alt=""
              />
            </div>
            <div className="lg:flex-1 lg:w-0 lg:order-0">
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-white lg:text-2xl">
                Get the latest updates on regulations, compliance, and legal
                digests.
              </h2>
              <p className="mb-8 max-w-3xl text-lg text-ic-secondary-100">
                We will also send regular promos and discounts as well as
                important company updates.
              </p>
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="py-3 px-5 w-full placeholder:text-gray-500 rounded-md border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ic-primary"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex justify-center items-center py-3 px-5 mt-3 w-full text-base font-medium text-white bg-ic-secondary-500 hover:bg-ic-secondary-400 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ic-primary sm:shrink-0 sm:mt-0 sm:ml-3 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-ic-secondary-100">
                By subscribing you agree to our{' '}
                <Link href="/terms">
                  <a className="font-medium text-white underline">
                    Terms & Conditions
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="/privacy">
                  <a className="font-medium text-white underline">
                    Privacy Policy
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
