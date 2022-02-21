import { useRef } from 'react';

import IframeResizer from 'iframe-resizer-react';
import Link from 'next/link';

import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Partnership = () => {
  const iframeRef = useRef(null);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Navigation />

      <div className="relative pt-3 bg-ic-accent">
        <div className="pt-48 pb-24 w-full">
          <div className="flex justify-center items-center w-full h-full">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-ic-primary uppercase lg:text-3xl">
                iComply Partnership
              </h1>
              <p className="py-3 mb-4 text-xl text-ic-secondary">
                Becoming a iComply Partner means you can serve a wider pool of
                clients alongside other top industry professionals on your own
                iComply Dashboard.
              </p>
              <Link href="#form-partners">
                <a className="inline-block py-3 px-5 font-medium text-white bg-ic-secondary hover:bg-ic-primary rounded-md transition duration-300 text-md">
                  Apply Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container py-24 px-5 mx-auto max-w-4xl">
          <div className="flex flex-wrap">
            <div className="p-4 mx-auto w-full max-w-lg">
              <h2 className="mb-4 text-xl font-medium tracking-widest text-ic-primary title-font">
                iComply is looking for professionals in these fields:
              </h2>
              <nav className="flex flex-col space-y-2.5 sm:items-start">
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-ic-text">Accounting & Finance</span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-ic-text">HR & Payroll</span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>

                  <span className="text-ic-text">Legal Practice</span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>

                  <span className="text-ic-text">Project Managers</span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>

                  <span className="text-ic-text">Corporate Housekeeping</span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-ic-text">
                    Patents, Trademarks, & other Intellectual Property
                  </span>
                </a>
                <a>
                  <span className="inline-flex justify-center items-center mr-2 w-6 h-6 text-ic-secondary bg-ic-accent rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>

                  <span className="text-ic-text">
                    Other Business Consultancy Services
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div id="form-partners" className="flex flex-wrap pt-12">
            <IframeResizer
              forwardRef={iframeRef}
              heightCalculationMethod="max"
              inPageLinks
              src="https://pw13mlsb.icomply.ph/embed/form/p8Lh3aAAZJrjBoGGf"
              frameBorder="0"
              style={{
                width: '1px',
                minWidth: '100%',
                height: '1px',
                minHeight: '640px',
              }}
              checkOrigin={false}
            />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Partnership;
