import React from 'react';

const Application: React.FC = () => {
  return (
    <section className="py-32 bg-ic-secondary-600 lg:py-40">
      <div className="container px-4 mx-auto">
        <h2 className="px-3 mx-auto mb-16 max-w-3xl font-inter text-3xl font-semibold leading-tight text-center text-white lg:text-5xl">
          A Powerful Regulatory Management Suite
        </h2>
        <div className="flex flex-wrap mx-4">
          <div className="py-2 w-full md:p-4 md:w-2/4 xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Dashboard
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  A quick overview of your corporate operations so you
                  don&apos;t miss a single thing.
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 w-full md:p-4 md:w-2/4 xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Task Management
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  Keep your tasks in check with our integrated task management
                  system.
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 w-full md:p-4 md:w-2/4 xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Inbox
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  Privately communicate with your co-workers, the iComply
                  Partners, and your Consultants in the platform.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden p-4 w-full md:w-2/4 xl:block xl:w-1/4"></div>
          <div className="py-2 w-full md:p-4 md:w-2/4 lg:ml-auto xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Files
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  Manage and view critical documents and files.
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 w-full md:p-4 md:w-2/4 xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Contracts
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  Sign and approve legally binding contracts within the iComply
                  platform.
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 w-full md:p-4 md:w-2/4 xl:w-1/4">
            <div className="flex flex-col p-8 h-full bg-ic-accent rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex shrink-0 justify-center items-center mr-3 w-8 h-8 text-white bg-ic-primary rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="font-inter text-lg font-medium text-ic-primary">
                  Calendar
                </h2>
              </div>
              <div className="grow">
                <p className="text-base leading-relaxed text-ic-text">
                  See your tasks, projects, and dues, and contracts in your own
                  personal calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
