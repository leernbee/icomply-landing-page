import React from 'react';

import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

const Services: React.FC = () => {
  return (
    <section className="py-32 pb-0 w-full lg:py-40 lg:pb-0">
      <div className="container relative mx-auto max-w-7xl">
        <div className="text-center text-ic-primary">
          <SectionTitle
            title="Focus on what you do best,"
            subtitle="leave us the rest"
          />
        </div>
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
            <div className="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:py-32 lg:px-0 lg:mx-0 lg:max-w-none">
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-ic-primary">
                  Incorporation & Business Registration
                </h2>
                <p className="mt-4 mb-8 text-lg text-ic-secondary-400">
                  Register your company online with the Securities and Exchange
                  Commission or the Department of Trade and Commerce. You can
                  also add-on your Bureau of Internal Revenue and Local
                  Government registrations. We also have registration options
                  for freelancers and licensed professionals.
                </p>
                <div className="">
                  <div className="flex">
                    <Button type="secondary" title="Let's Start" />
                    <div className="ml-2">
                      {' '}
                      <Button title="How it Works" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:px-0 lg:m-0 lg:h-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
            <div className="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:py-32 lg:px-0 lg:mx-0 lg:max-w-none">
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-ic-primary">
                  Corporate Compliance & Housekeeping
                </h2>
                <p className="mt-4 mb-8 text-lg text-ic-secondary-400">
                  Identify, draft, collate, and file corporate paperwork. Your
                  very own Corporate Secretary will handle the ins and outs of
                  corporate management and SEC filings.
                </p>
                <div className="">
                  <div className="flex">
                    <Button type="secondary" title="Let's Start" />
                    <div className="ml-2">
                      {' '}
                      <Button title="How it Works" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:px-0 lg:m-0 lg:h-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
            <div className="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:py-32 lg:px-0 lg:mx-0 lg:max-w-none">
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-ic-primary">
                  Bookkeeping & Accounting
                </h2>
                <p className="mt-4 mb-8 text-lg text-ic-secondary-400">
                  Manage your cash-flow, expenses, and income. Plus, all
                  necessary filings. iComply bookkeepers and accountants will
                  make sure you have everything under control.
                </p>
                <div className="">
                  <div className="flex">
                    <Button type="secondary" title="Let's Start" />
                    <div className="ml-2">
                      {' '}
                      <Button title="How it Works" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:px-0 lg:m-0 lg:h-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
            <div className="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:py-32 lg:px-0 lg:mx-0 lg:max-w-none">
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-ic-primary">
                  Go paperless* with ease and confidence
                </h2>
                <p className="mt-4 mb-2 text-lg text-ic-secondary-400">
                  While other businesses are being bogged down with piles of
                  paperwork, you&apos;ll be easily browsing your files in your
                  own private drive.
                </p>
                <p className="mb-8 text-xs text-ic-text-50">
                  *some items still need ink on paper signatures as a legal
                  requirement. :( Don&apos;t worry, our couriers will handle it
                  for us!
                </p>
                <div className="">
                  <div className="flex">
                    <Button type="secondary" title="Let's Start" />
                    <div className="ml-2">
                      {' '}
                      <Button title="How it Works" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:px-0 lg:m-0 lg:h-full">
                <img
                  className="w-full rounded-xl lg:absolute lg:right-0 lg:w-auto lg:max-w-none lg:h-full ring-opacity/5"
                  src="/assets/images/dashboard.png"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
