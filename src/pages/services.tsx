import PageHeader from '@/components/common/PageHeader';
import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const services = [
  {
    title: 'Business Registration & Renewal',
    subtitle: 'Register and renew your company with iComply.',
    desc: 'End-to-end registration all in the managed services platform serviced by iComply professionals.',
    price: '5,000 pesos',
    svg: '/assets/images/startup.svg',
  },
  {
    title: 'Secretarial & Corporate Housekeeping',
    subtitle: 'Identify, draft, collate, and file corporate paperwork.',
    desc: "Your very own Corporate Secretary will assist you in the in's and out's of corporate management and SEC filings.",
    price: '5,000 pesos',
    svg: '/assets/images/secretarial.svg',
  },
  {
    title: 'Bookkeeping, & Payroll',
    subtitle:
      'Manage your cash-flow, expenses, and income. Plus,  all necessary filings.',
    desc: 'iComply bookkeepers and accountants will make sure you have everything under control.',
    price: '10,000 pesos',
    svg: '/assets/images/bookkeeping.svg',
  },
  {
    title: 'Legal & Notarial Services',
    subtitle: 'Top lawyers at your fingertips.',
    desc: 'Draft, file, notarise, and consult with lawyers from various fields in the corporate arena.',
    price: '500 pesos',
    svg: '/assets/images/legal.svg',
  },
  {
    title: 'Patents, Trademarks, & other Intellectual Property',
    subtitle: 'File nationally or internationally.',
    desc: 'Protect your intellectual property under national law or international treaty.',
    price: '1,000 pesos',
    svg: '/assets/images/patents.svg',
  },
  {
    title: 'Other Business Consultancy Services',
    subtitle: 'Anything else you might need.',
    desc: 'Let us find you your experts on financial management, procurement, policy, or political risk. Any business need is just a click away.',
    price: '1,000 pesos',
    svg: '/assets/images/consultancy.svg',
  },
];

const Services = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Navigation />
    <PageHeader title="Our Services">
      <p className="mt-4 max-w-3xl text-xl font-medium text-ic-secondary">
        Let go of mountains of paperwork so you can focus on what you do best.
      </p>
      <p className="mt-4 max-w-3xl text-ic-text text-md">
        Our managed corporate services will connect you to leading industry
        practitioners
      </p>
    </PageHeader>

    <div className="bg-white">
      <div className="flex flex-col xl:flex-row">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-center px-4 min-h-[400px] text-ic-primary bg-white border-2 border-ic-accent transition duration-300 cursor-pointer xl:max-w-[400px] xl:hover:bg-ic-primary"
              >
                <div className="xl:group-hover:hidden">
                  <span className="flex justify-center items-center p-1 mx-auto mt-3 w-12 h-12 bg-ic-accent rounded-md">
                    <img src={item.svg} alt={item.title} />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-center text-ic-secondary transition duration-300 xl:group-hover:text-center xl:group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="group-hover:block mt-2 text-lg text-center text-ic-primary transition duration-300 xl:hidden xl:text-ic-accent">
                    {item.subtitle}
                  </p>
                  <p className="group-hover:block mt-4 mb-5 text-center text-ic-secondary transition duration-300 xl:hidden xl:text-white">
                    {item.desc}
                  </p>
                  <h2 className="group-hover:block pt-5 mb-1 text-sm font-medium tracking-widest text-ic-primary border-t border-ic-accent xl:hidden xl:text-white title-font">
                    STARTS AT
                  </h2>
                  <h1 className="group-hover:block pb-4 text-4xl leading-none text-ic-primary xl:hidden xl:text-white">
                    <span>{item.price}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Services;
