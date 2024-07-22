const StatsSection = () => {
    return (
      <section className="py-12 lg:py-24 bg-teal-900">
        <div className="max-w-4xl mx-auto px-4">
          {/* <div className="max-w-xl mb-20">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl text-white mb-20">
              We are committed to a sustainable future
            </h2>
          </div> */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/3 sm:w-1/3 px-4 mb-10 md:mb-0">
              <div className="pt-8 border-t-2 border-lime-500">
                <h5 className="text-md xs:text-xl lg:text-2xl xl:text-3xl text-white mb-4">100,000+ </h5>
                <span className="text-xs lg:text-sm text-white opacity-80">Website Visitors</span>
              </div>
            </div>
            <div className="w-1/3 sm:w-1/3 px-4 mb-10 md:mb-0">
              <div className="pt-8 border-t-2 border-lime-500">
                <h5 className="text-md xs:text-xl lg:text-2xl xl:text-3xl text-white mb-4">2,500+</h5>
                <span className="text-xs lg:text-sm text-white opacity-80">Properties</span>
              </div>
            </div>
            <div className="w-1/3 sm:w-1/3 px-4 mb-10 sm:mb-0">
              <div className="pt-8 border-t-2 border-lime-500">
                <h5 className="text-md xs:text-xl lg:text-2xl xl:text-3xl text-white mb-4">400+</h5>
                <span className="text-xs lg:text-lg text-white opacity-80">Commercial </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  