import CompanyDetailedCard from "./CompanyDetailedCard";
import LatestListings from "./LatestListings";



const CompanyDetailed = ({company}) => (
  
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap max-w-7xl mx-auto">
       
        <div className="w-full px-3 mb-8">
          <CompanyDetailedCard
            image={company.imageUrl}
            title={company.title}
            address={company.address}
            address2={company.address2}
            phone={company.phone}
            phone2={company.phone2}
            email={company.email}     
            description={company.description}
            website={company.website}
          />
        </div>
   
        <LatestListings properties={company.properties} />
    
   
      </div>
    </div>
  </section>
);

export default CompanyDetailed;
