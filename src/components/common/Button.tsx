import React from 'react';

import classnames from 'classnames';

const Button = (props: any) => {
  return (
    <a
      href="#"
      className={classnames(
        'inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white whitespace-nowrap hover:bg-ic-primary rounded-md border border-transparent shadow-sm',
        {
          'bg-ic-primary': !props.type,
          'bg-ic-secondary': props.type === 'secondary',
        }
      )}
    >
      {props.title ? props.title : 'Get Started'}
    </a>
  );
};

export default Button;
