import React from 'react';

const partnersInfo = [
  {
    title: 'Bureau of Internal Revenue',
    image: '/assets/images/partner-bir-logo.png',
  },
  {
    title: 'Department of Trade and Industry',
    image: '/assets/images/partner-dti-logo.png',
  },
  {
    title: 'City and Local Governments',
    image: '/assets/images/partner-city-hall-logo.png',
  },
  {
    title: 'Securities and Exchange Commission',
    image: '/assets/images/partner-sec-logo.png',
  },
  {
    title: 'Quickbooks Platinum Partner',
    image: '/assets/images/partner-quickbooks-logo.png',
  },
];

const Partners: React.FC = () => {
  return (
    <section className="pt-8 w-full lg:pt-12">
      <div className="container relative mx-auto max-w-7xl">
        <div className="px-3 mx-auto max-w-7xl xl:px-0">
          <div className="grid grid-cols-2 gap-0.5 mt-6 md:grid-cols-5 lg:mt-8">
            {partnersInfo.map((partnerInfo, i) => (
              <div
                key={i}
                className="flex flex-col col-span-1 justify-center p-8 bg-gray-50 rounded-md"
              >
                <img
                  className="object-contain mb-2 max-h-12"
                  src={partnerInfo.image}
                  alt="Laravel"
                />
                <p className="block text-sm font-medium text-center text-ic-secondary-400 pointer-events-none">
                  {partnerInfo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
