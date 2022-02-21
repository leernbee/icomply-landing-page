import React from 'react';

const SectionTitle = (props: any) => {
  return (
    <>
      <h2 className="px-3 mx-auto mb-3 max-w-4xl font-inter text-3xl font-semibold leading-tight lg:text-5xl">
        {props.title}
      </h2>

      <p className="px-3 mx-auto max-w-5xl text-xl text-ic-secondary lg:text-2xl">
        {props.subtitle}
      </p>
    </>
  );
};

export default SectionTitle;
