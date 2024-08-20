import { Check } from "lucide-react";

const FeatureList = ({ title, features }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;