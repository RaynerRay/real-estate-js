
import CompanyCard from '@/components/frontend/company/CompanyCard';

const CompanyList = ({companies}) => {
  return (
    <section className="py-4 overflow-hidden h-screen">
      <div className="container px-4 max-w-6xl mx-auto">
        <h3 className="font-heading mb-7 text-2xl font-semibold">Our Agencies</h3>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-6 lg:gap-x-12">
          <div className="flex flex-wrap -m-3 lg:col-span-5">
            {companies?.map((company) => (
              <CompanyCard
                key={company.id}
                title={company.title}
                description={company.description}
                image={company.imageUrl}
                slug={company.slug}
                phone={company.phone}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompanyList;