import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const HRPayroll = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Navigation />
    <h1>Company Registration</h1>
  </Main>
);

export default HRPayroll;
