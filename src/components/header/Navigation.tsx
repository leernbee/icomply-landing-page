/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const solutions = [
  {
    name: 'Corporation',
    description:
      'Limited liability entity for 1 to 15 starting incorporators. Start with as low as 1 peso capital and get your Certificate of Incorporation in as fast as one day!',
    href: '#',
  },
  {
    name: 'Sole Proprietor',
    description:
      'Simple business entity for one business owner. Minimal reportorial requirements and quick processing.',
    href: '#',
  },
  {
    name: 'Freelancer/Consultant',
    description: 'Coming Soon',
    href: '#',
  },
  {
    name: 'Licensed Professional',
    description: 'Coming Soon',
    href: '#',
  },
];
const resources = [
  {
    name: 'FAQ',
    description: "What you're curious about may already have answers here.",
    href: '/faq',
  },
  {
    name: 'Contact Us',
    description:
      "If you don't know what service to get or perhaps you need professional advice, hit us up here anytime.",
    href: '/contact-us',
  },
  {
    name: 'Publications',
    description:
      "Useful articles on corporate, business, and legal topics. Subscribe and, we promise, you'll only receive relevant and insightful newsletters you'll surely need in your everyday business life",
    href: '#',
  },
  {
    name: 'Partnership',
    description:
      'Do you want to be a part of the iComply team? Be a service provider in our legal, accounting, and human resource segments and expand your client base.',
    href: '/partnership',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  let timeout: NodeJS.Timeout;
  const timeoutDuration = 400;

  const buttonRef = useRef<(null | HTMLButtonElement)[]>([]);

  const [openState, setOpenState] = useState<boolean>(false);

  const toggleMenu = (open: any, index: number) => {
    // log the current open state in React (toggle open state)
    setOpenState(!open);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current[index]?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open: any, action: string, index: number) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open, index), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClick = (open: any) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };

  const handleClickOutside = (event: { target: any; stopPropagation: any }) => {
    if (buttonRef.current && !buttonRef.current[0]?.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const [navCSS, setNavCSS] = useState('m-2 rounded-md');
  const [buttonCSS, setButtonCSS] = useState('hidden');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck > 100) {
        setNavCSS(
          'm-0 rounded-none transition-all ease-in-out delay-150 shadow-sm'
        );
        setButtonCSS('inline-flex');
      } else {
        setNavCSS('m-2 rounded-md');
        setButtonCSS('hidden');
      }
    });
  });

  return (
    <Popover className="fixed top-0 z-50 w-full">
      <div
        className={`flex justify-between items-center py-6 px-4 bg-white sm:px-6 xl:justify-start xl:space-x-10 ${navCSS}`}
      >
        <div className="flex justify-start">
          <Link href="/">
            <a>
              <span className="sr-only">iComply</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="../assets/images/icomply-blue-logo.svg"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="-my-2 -mr-2 ml-auto xl:hidden">
          <Popover.Button className="inline-flex justify-center items-center p-2 text-ic-primary hover:text-ic-secondary bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ic-secondary">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 xl:flex">
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => onHover(open, 'onMouseEnter', 0)}
                onMouseLeave={() => onHover(open, 'onMouseLeave', 0)}
                className="flex flex-col"
              >
                <Popover.Button
                  // eslint-disable-next-line no-return-assign
                  ref={(el: HTMLButtonElement) => (buttonRef.current[0] = el)}
                  className={classNames(
                    open ? 'text-ic-primary' : 'text-ic-secondary',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-ic-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-ic-secondary'
                  )}
                  onClick={() => handleClick(open)}
                >
                  <span>Company Registration</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-ic-secondary' : 'text-ic-primary',
                      'ml-2 h-5 w-5 group-hover:text-ic-secondary'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 px-2 mt-6 w-screen max-w-xs -translate-x-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-lg ring-0 shadow-lg ring-opacity/5">
                      <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="block p-3 -m-3 hover:bg-gray-50 rounded-md"
                          >
                            <p className="text-base font-medium text-ic-primary">
                              {solution.name}
                            </p>
                            <p className="mt-1 text-sm text-ic-secondary">
                              {solution.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          <a
            href="#"
            className="text-base font-medium text-ic-secondary hover:text-ic-primary"
          >
            Corporate Housekeeping
          </a>
          <a
            href="#"
            className="text-base font-medium text-ic-secondary hover:text-ic-primary"
          >
            Accounting
          </a>
          <a
            href="#"
            className="text-base font-medium text-ic-secondary hover:text-ic-primary"
          >
            HR/Payroll
          </a>
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => onHover(open, 'onMouseEnter', 1)}
                onMouseLeave={() => onHover(open, 'onMouseLeave', 1)}
                className="flex flex-col"
              >
                <Popover.Button
                  // eslint-disable-next-line no-return-assign
                  ref={(el: HTMLButtonElement) => (buttonRef.current[1] = el)}
                  className={classNames(
                    open ? 'text-ic-primary' : 'text-ic-secondary',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-ic-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-ic-primary'
                  )}
                  onClick={() => handleClick(open)}
                >
                  <span>Resources</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-ic-secondary' : 'text-ic-primary',
                      'ml-2 h-5 w-5 group-hover:text-ic-secondary'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 px-2 mt-6 w-screen max-w-xs -translate-x-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-lg ring-0 shadow-lg ring-opacity/5">
                      <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className="block p-3 -m-3 hover:bg-gray-50 rounded-md"
                          >
                            <p className="text-base font-medium text-ic-primary">
                              {resource.name}
                            </p>
                            <p className="mt-1 text-sm text-ic-secondary">
                              {resource.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden justify-end items-center xl:flex xl:flex-1 xl:w-0">
          <a
            href="https://app.icomply.ph"
            className="text-base font-medium text-ic-secondary hover:text-ic-primary whitespace-nowrap"
          >
            Log In
          </a>
          <a
            href="services"
            className={`justify-center items-center py-3 px-6 ml-8 text-base font-medium text-white whitespace-nowrap bg-ic-secondary hover:bg-ic-secondary-600 rounded-md border border-transparent shadow-sm transition-all ${buttonCSS}`}
          >
            Get Started
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right xl:hidden"
        >
          <div className="bg-white rounded-lg divide-y-2 divide-gray-50 shadow-md ring-opacity/5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-auto h-8"
                    src="/assets/images/icomply-square-blue-logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex justify-center items-center p-2 text-ic-primary hover:text-ic-secondary bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ic-secondary">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-4">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="text-base font-medium text-ic-primary hover:text-gray-700"
                    >
                      {solution.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-ic-primary hover:text-gray-700"
                >
                  Corporate Housekeeping
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-ic-primary hover:text-gray-700"
                >
                  Accounting
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-ic-primary hover:text-gray-700"
                >
                  HR/Payroll
                </a>

                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-ic-primary hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex justify-center items-center py-2 px-4 w-full text-base font-medium text-white bg-ic-secondary-600 hover:bg-ic-secondary-700 rounded-md border border-transparent shadow-sm"
                >
                  Log In
                </a>
                <p className="mt-6 text-base font-medium text-center text-ic-secondary">
                  Are you a new customer?{' '}
                  <a
                    href="#"
                    className="text-ic-primary-600 hover:text-ic-primary-500"
                  >
                    Get Started
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
