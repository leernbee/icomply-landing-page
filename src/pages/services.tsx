import PageHeader from '@/components/common/PageHeader';
import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Services = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Navigation />
    <PageHeader title="Our Services" />

    <div className="bg-white">
      <div className="flex flex-col py-24 xl:flex-row">
        <div className="flex-auto px-4 mb-20 sm:px-6 lg:px-8 lg:mb-0">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>Image</div>
              <a
                href="new-business"
                className="group py-20 px-10 bg-ic-accent hover:bg-ic-secondary cursor-pointer"
              >
                <h2 className="mb-3 text-2xl font-semibold text-ic-primary group-hover:text-white">
                  Create a New Business
                </h2>
                <p className="text-xl leading-relaxed text-ic-text group-hover:text-white">
                  Corporation, Sole Proprietorship, Freelancer/Consultant,
                  Licensed Professional
                </p>
              </a>
              <a
                href="existing-business"
                className="group py-20 px-10 bg-ic-accent hover:bg-ic-secondary cursor-pointer"
              >
                <h2 className="mb-3 text-2xl font-semibold text-ic-primary group-hover:text-white">
                  Manage an Existing Business
                </h2>
                <p className="text-xl leading-relaxed text-ic-text group-hover:text-white">
                  Business/Permit Renewal, Corporate Secretary: Housekeeping and
                  Filings, Accounting, HR & Payroll
                </p>
              </a>
              <div>Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Services;
