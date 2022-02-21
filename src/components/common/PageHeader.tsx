import React from 'react';

const PageHeader = (props: any) => {
  return (
    <div className="relative pt-3 bg-ic-accent">
      <div className="pt-48 pb-24 w-full">
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase lg:text-3xl text-cb-primary">
              {props.title}
            </h1>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
