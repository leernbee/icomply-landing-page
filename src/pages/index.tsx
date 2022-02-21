// import { useRouter } from 'next/router';

import Application from '@/components/sections/Application';
import Blog from '@/components/sections/Blog';
import Companies from '@/components/sections/Companies';
import Newsletter from '@/components/sections/Newsletter';
import Partners from '@/components/sections/Partners';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Team from '@/components/sections/Team';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import Navigation from '../components/header/Navigation';
import Hero from '../components/sections/Hero';

const Index = () => {
  // const router = useRouter();

  return (
    <Main meta={<Meta title="iComply" description="iComply" />}>
      <Navigation />
      <Hero />
      <Team />
      <Partners />
      <Services />
      <Process />
      <Application />
      <Blog />
      <Companies />
      <Solutions />
      <Newsletter />
    </Main>
  );
};

export default Index;
