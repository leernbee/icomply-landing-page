import PageHeader from '@/components/common/PageHeader';
import Navigation from '@/components/header/Navigation';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const OurTeam = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Navigation />
    <PageHeader title="Behind iComply" />

    <div className="py-24 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <ul className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Guilian Sencio</h3>
                  <p className="text-ic-secondary">Chief Executive Officer</p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Llino Del Rosario</h3>
                  <p className="text-ic-secondary">Chief Technology Officer</p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Atty. Raymond Rodis</h3>
                  <p className="text-ic-secondary">Chief Legal Counsel</p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Thea Avencula, CPA</h3>
                  <p className="text-ic-secondary">
                    Associate Partner, Accounting
                  </p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Atty. Jonathan Lewis</h3>
                  <p className="text-ic-secondary">
                    Associate Partner, Legal Services
                  </p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Peter Dio, CPA</h3>
                  <p className="text-ic-secondary">
                    Associate Partner, Payroll
                  </p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex">
            <div className="w-full max-w-[200px] aspect-square">
              <img
                className="object-cover rounded-md shadow-lg"
                src="/assets/images/male5.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="text-ic-primary">Bravin Cruz</h3>
                  <p className="text-ic-secondary">
                    Chief Consultant, Secondary Licenses
                  </p>
                </div>
                <div className="text-lg">
                  <p className="text-ic-text">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Main>
);

export default OurTeam;
