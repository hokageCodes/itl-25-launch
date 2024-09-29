import ScheduleTimeline from "../schedule-section/Schedule";

const pricingData = [
  {
    category: "Students",
    options: [
      {
        title: "Conference Only",
        price: "$80",
        details: [
          "Full day Conference access & networking",
          "Catered breakfast & lunch",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary Conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
      {
        title: "Conference & Gala",
        price: "$150",
        details: [
          "Full 2-day Conference access & networking",
          "Catered breakfast & lunch",
          "1 Ticket to the ITL Impact Awards & Gala on April 5, 2025",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
    ],
  },
  {
    category: "Lawyers",
    options: [
      {
        title: "Conference Only",
        price: "$150 (Early Bird - $100)",
        details: [
          "Full day Conference access & networking",
          "Catered breakfast & lunch",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary Conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
      {
        title: "Conference & Gala",
        price: "$250 (Early Bird - $199)",
        details: [
          "Full 2-day Conference access & networking",
          "Catered breakfast & lunch",
          "1 Ticket to the ITL Impact Awards & Gala on April 5, 2025",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
    ],
  },
  {
    category: "Non-Lawyers",
    options: [
      {
        title: "Conference Only",
        price: "$150 (Early Bird - $100)",
        details: [
          "Full day Conference access & networking",
          "Catered breakfast & lunch",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary Conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
      {
        title: "Conference & Gala",
        price: "$250 (Early Bird - $199)",
        details: [
          "Full 2-day Conference access & networking",
          "Catered breakfast & lunch",
          "1 Ticket to the ITL Impact Awards & Gala on April 5, 2025",
          "Access to Conference Exhibition",
          "Access to discounted hotel rate at The Westin Calgary",
          "Complimentary conference package",
          "Discounted on-site parking",
          "Airline discounts with Air Canada and WestJet",
        ],
      },
    ],
  },
];

const RegistrationPricing = () => {
  return (
    <>

        <div className="max-w-7xl mx-auto py-10 px-6 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Registration Pricing</h2>
        <div className="grid lg:grid-cols-3 gap-8">
            {pricingData.map((category, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                {category.options.map((option, idx) => (
                <div key={idx} className="mb-6">
                    <h4 className="text-xl font-bold">{option.title}</h4>
                    <p className="text-lg font-semibold text-blue-600 mb-4">{option.price}</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                    {option.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                    </ul>
                    <button className="bg-wine text-white py-2 px-4 rounded hover:bg-deepBlue transition duration-300">
                    Register
                    </button>
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>
        <ScheduleTimeline />
    </>
  );
};

export default RegistrationPricing;
