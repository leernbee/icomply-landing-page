import { ReactNode } from 'react';

import Footer from '../components/footer/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}

    <div className="relative w-full">
      {props.children}

      <Footer />
    </div>
  </div>
);

export { Main };
