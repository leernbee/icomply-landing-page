import { useState, useRef } from 'react';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';

import PageHeader from '@/components/common/PageHeader';
import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const faq = [
  {
    title: 'Business Registration',
    svg: '/assets/images/startup.svg',
  },
  {
    title: 'Registration Renewal',
    svg: '/assets/images/registration.svg',
  },
  {
    title: 'Corporate Compliance & Regulatory',
    svg: '/assets/images/corporate.svg',
  },
  {
    title: 'Fees & Payments',
    svg: '/assets/images/payment.svg',
  },
  {
    title: 'Accounting & Tax',
    svg: '/assets/images/accounting.svg',
  },
  {
    title: 'HR & Payroll',
    svg: '/assets/images/hr.svg',
  },
  {
    title: 'Legal Services',
    svg: '/assets/images/legal.svg',
  },
  {
    title: 'Secondary Licenses, PEZA, Foreign Corporations, etc.',
    svg: '/assets/images/global.svg',
  },
  {
    title: 'Other Services',
    svg: '/assets/images/other.svg',
  },
];

const Faq = () => {
  const [showFaq, setShowFaq] = useState(0);
  const myFaq = useRef<HTMLDivElement | null>();

  const onClick = (index: any) => {
    setShowFaq(index);
    window.scrollTo({ behavior: 'smooth', top: myFaq.current?.offsetTop });
  };

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Navigation />
      <PageHeader title="How can we help?" />

      <div className="px-4">
        <ul className="grid gap-6 py-32 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faq.map((item, index) => (
            <li
              key={index}
              className="group col-span-1 py-12 bg-white hover:bg-ic-accent rounded-md border-2 border-ic-accent divide-y divide-ic-accent transition duration-300 cursor-pointer"
              onClick={() => onClick(index)}
            >
              <div className="flex-col justify-center items-center w-full">
                <div>
                  <span className="flex justify-center items-center mx-auto w-12 h-12 rounded-md">
                    <img src={item.svg} alt={item.title} />
                  </span>
                </div>
                <div className="">
                  <p className="mt-4 text-base text-center text-ic-secondary group-hover:text-ic-primary">
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="bg-ic-primary"
        ref={myFaq as React.RefObject<HTMLDivElement>}
      >
        <div className="py-12 px-4 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
          {/* faq 1 */}
          {showFaq === 0 && (
            <div className="mx-auto max-w-3xl divide-y-2 divide-ic-accent">
              <Disclosure className="mt-4" as="div" defaultOpen={true}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          )}

          {/* faq 2 */}
          {showFaq === 1 && (
            <div className="mx-auto max-w-3xl divide-y-2 divide-ic-accent">
              <Disclosure className="mt-4" as="div" defaultOpen={true}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure className="mt-4" as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center py-3 px-4 w-full font-medium text-left text-white rounded-md focus:outline-none text-md">
                      <span className="font-medium text-ic-accent">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-6 h-6 text-ic-accent`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pb-2">
                      <p className="text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Faq;
