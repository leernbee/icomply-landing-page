import React from 'react';

const files = [
  {
    title: 'Workflows are automated',
    size: "We've streamlined various legal and business processes so we don't have to go back and forth like the others ;)",
    source: '/assets/images/process-workflow.png',
  },
  {
    title: 'Documents and info are neat and tidy',
    size: 'The collection, organisation, and storage of all documents and info are done within the app so nothing is lost.',
    source: '/assets/images/process-project-files.png',
  },
  {
    title: 'Professionals at your fingertips',
    size: 'Just reach out to us and our lawyers, accountants, and business professionals will assist you all throughout.',
    source: '/assets/images/process-brainstorm.png',
  },
  {
    title: 'Anytime, anywhere',
    size: "With our web based and mobile application, you can be the digital nomad you've always dreamed of becoming. Submit, file, post, and account from anywhere.",
    source: '/assets/images/process-timing.png',
  },
  // More files...
];

const Process: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container px-3 mx-auto w-full max-w-7xl">
        <h2 className="px-3 mx-auto mb-16 max-w-3xl font-inter text-3xl font-semibold leading-tight text-center text-ic-secondary lg:text-5xl">
          How iComply works
        </h2>

        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.title} className="relative">
              <div className="group aspect-1 block overflow-hidden w-full bg-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.source}
                  alt=""
                  className="object-cover group-hover:opacity-75 pointer-events-none"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="block mt-4 font-medium text-gray-900 truncate pointer-events-none text-md">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-ic-secondary-300 pointer-events-none">
                {file.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
