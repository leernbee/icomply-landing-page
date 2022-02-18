import React from 'react';

const points = [
  {
    title: 'Clean & Crisp Corporate Management',
    description: 'We streamline your Corporate Administration & Housekeeping',
    svg: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },

  {
    title: 'We always know what to do',
    description:
      'Work with iComply Partners alongside you in your iComply Managed Services Dashboard',
    svg: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },

  {
    title: 'Built for a Lifetime',
    description:
      'Manage and expand your business in a single platform. Invite your co-workers to work with you.',
    svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Upfront and Simple Pricing',
    description: "Know you're paying for and avoid bill shock.",
    svg: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="py-32 lg:py-40">
      <div className="container flex flex-col px-4 mx-auto md:px-0 lg:flex-row h-100">
        <div className="px-3 mx-auto mb-10 max-w-[320px] lg:mb-0 lg:max-w-[400px] xl:max-w-[540px]">
          <img
            className="object-cover object-center mx-auto rounded sm:mb-7"
            alt="hero"
            src="/assets/images/solutions.jpg"
          />
        </div>
        <div className="flex flex-col lg:items-start lg:pl-16 lg:w-2/3 xl:pl-24">
          <h2 className="mb-8 font-inter text-4xl font-semibold text-center text-ic-primary lg:text-left title-font">
            We solve your pain points.
          </h2>
          {points.map((point, i) => (
            <div
              key={i}
              className="flex flex-col grow items-start px-2 mt-8 sm:flex-row"
            >
              <div className="inline-flex shrink-0 justify-center items-center w-16 h-16 text-ic-accent bg-ic-secondary rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d={point.svg}></path>
                </svg>
              </div>
              <div className="grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-2xl font-medium text-ic-primary title-font">
                  {point.title}
                </h2>
                <p className="max-w-2xl text-xl text-ic-secondary">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
