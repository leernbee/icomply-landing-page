import React from 'react';

import classnames from 'classnames';

const Button = (props: any) => {
  return (
    <a
      href={props.link}
      className={classnames(
        'inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white whitespace-nowrap rounded-md border border-transparent shadow-sm cursor-pointer',
        {
          'bg-ic-primary hover:bg-ic-primary-400 ': !props.type,
          'bg-ic-secondary hover:bg-ic-secondary-600 ':
            props.type === 'secondary',
        }
      )}
    >
      {props.title ? props.title : 'Get Started'}
    </a>
  );
};

export default Button;
