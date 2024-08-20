import CompanyDetailedCard from "./CompanyDetailedCard";
import LatestListings from "./LatestListings";

const categories = [
    "New in",
    "Activewear",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Multipacks",
    "Bags",
    "Sports",
    "Gifts",
    "Notes"
  ];

const CompanyDetailed = ({company}) => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap max-w-5xl mx-auto">
       
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
    
        
        {/* <div className="w-full sm:w-1/4 px-3">
          <Sidebar />
          <div className="mb-6 py-10 px-12 bg-gray-50">
            <h3 className="mb-8 text-2xl font-bold font-heading">Category</h3>
            <ul>
              {categories.map((category, index) => (
                <li className="mb-4" key={index}>
                  <a className="text-lg" href="#">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 py-10 px-12 bg-gray-50">
            <h3 className="mb-6 text-2xl font-bold font-heading">Advert</h3>
           
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default CompanyDetailed;
