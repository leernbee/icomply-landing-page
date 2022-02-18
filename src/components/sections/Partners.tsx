import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto bg-white">
      <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-0.5 mt-6 md:grid-cols-5 lg:mt-8">
          <div className="flex flex-col col-span-1 justify-center p-8 bg-gray-50">
            <img
              className="object-contain mb-2 max-h-12"
              src="/assets/images/partner-bir-logo.png"
              alt="Laravel"
            />
            <p className="block text-sm font-medium text-center text-ic-secondary-300 pointer-events-none">
              Bureau of Internal Revenue
            </p>
          </div>
          <div className="flex flex-col col-span-1 justify-center p-8 bg-gray-50">
            <img
              className="object-contain mb-2 max-h-12"
              src="/assets/images/partner-dti-logo.png"
              alt="Laravel"
            />
            <p className="block text-sm font-medium text-center text-ic-secondary-300 pointer-events-none">
              City and Local Governments
            </p>
          </div>
          <div className="flex flex-col col-span-1 justify-center p-8 bg-gray-50">
            <img
              className="object-contain mb-2 max-h-12"
              src="/assets/images/partner-city-hall-logo.png"
              alt="Laravel"
            />
            <p className="block text-sm font-medium text-center text-ic-secondary-300 pointer-events-none">
              Department of Trade and Industry
            </p>
          </div>
          <div className="flex flex-col col-span-1 justify-center p-8 bg-gray-50">
            <img
              className="object-contain mb-2 max-h-12"
              src="/assets/images/partner-sec-logo.png"
              alt="Laravel"
            />
            <p className="block text-sm font-medium text-center text-ic-secondary-300 pointer-events-none">
              Securities and Exchange Commission
            </p>
          </div>
          <div className="flex flex-col col-span-1 justify-center p-8 bg-gray-50">
            <img
              className="object-contain mb-2 max-h-12"
              src="/assets/images/partner-quickbooks-logo.png"
              alt="Laravel"
            />
            <p className="block text-sm font-medium text-center text-ic-secondary-300 pointer-events-none">
              Quickbooks Platinum Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
