

const Header = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between flex-wrap mb-6">
      <div>
        <h1 className="font-heading text-rhino-700 text-2xl font-semibold">{title}</h1>
        <p className="text-rhino-300">{subtitle}</p>
      </div>
      
    </div>
  );
};

export default Header;
