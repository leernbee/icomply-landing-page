import Link from 'next/link';

import PageHeader from '@/components/common/PageHeader';
import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const ContactUs = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Navigation />
    <PageHeader title="Contact Us" />

    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap py-24 px-5 mx-auto">
        <div className="flex overflow-hidden justify-center items-center mb-10 w-full rounded-lg lg:mb-0 lg:w-1/2">
          <img
            alt="feature"
            className="object-cover object-center w-full max-w-[540px]"
            src="/assets/images/icomply-secondary-brown-logo.svg"
          />
        </div>
        <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:pl-12 lg:w-1/2 lg:text-left">
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <div className="inline-flex justify-center items-center mb-5 w-12 h-12 text-ic-secondary bg-ic-accent rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-ic-primary">
                How Can We Help?
              </h2>
              <p className="text-base leading-relaxed text-ic-text">
                There are many ways to reach us. Feel free to drop us a message
                through any of our channels below. You can also drop us an email
                at contact@icomply.co
              </p>
              <Link href="/faq">
                <a className="inline-flex items-center mt-3 text-ic-secondary underline">
                  Frequently Asked Questions
                </a>
              </Link>

              <p className="text-base leading-relaxed text-ic-text">
                Learn more about iComply services by checking out our{' '}
                <Link href="/faq">
                  <a className="text-ic-secondary underline">FAQ page.</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <div className="inline-flex justify-center items-center mb-5 w-12 h-12 text-ic-secondary bg-ic-accent rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-ic-primary">
                Chat with Us.
              </h2>
              <p className="text-base leading-relaxed text-ic-text">
                Register your account{' '}
                <a className="text-ic-secondary underline" href="/register">
                  HERE
                </a>{' '}
                and message the iComply Concierge on your dashboard.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10 lg:items-start">
            <div className="inline-flex justify-center items-center mb-5 w-12 h-12 text-ic-secondary bg-ic-accent rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-ic-primary">
                Become a Partner.
              </h2>
              <p className="text-base leading-relaxed text-ic-text">
                Widen your client base by providing your services through the
                iComply Managed Services Platform.
              </p>
              <Link href="/partnership">
                <a className="inline-flex items-center mt-3 text-ic-secondary underline">
                  Become a iComply Partner here.
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
);

export default ContactUs;
