import React from 'react';

import SectionTitle from '../common/SectionTitle';

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
    <section className="py-32 w-full lg:py-40">
      <div className="container relative px-3 mx-auto max-w-7xl xl:px-0">
        <div className="text-center text-ic-primary">
          <SectionTitle title="How iComply works" subtitle="" />
        </div>
        <ul
          role="list"
          className="grid gap-x-4 gap-y-8 mt-16 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.title} className="relative">
              <div className="group aspect-1 flex overflow-hidden p-5 mb-5 w-full bg-ic-secondary-50 rounded-lg focus-within:ring-2 focus-within:ring-ic-secondary-500 focus-within:ring-offset-2 focus-within:ring-offset-ic-secondary-100 shadow-sm">
                <img
                  src={file.source}
                  alt=""
                  className="object-cover items-center group-hover:opacity-75 pointer-events-none"
                />
              </div>
              <p className="block mb-2 font-medium text-ic-primary pointer-events-none text-md">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-ic-secondary-500 pointer-events-none">
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
