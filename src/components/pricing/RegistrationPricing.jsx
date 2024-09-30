import ScheduleTimeline from "../schedule-section/Schedule";

const pricingData = [
  {
    category: "Students",
    options: [
      {
        title: "Conference Only",
        price: "$80.00",
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
        price: "$150.00",
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
        price: "$150.00 (Early Bird - $100.00)",
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
        price: "$250.00 (Early Bird - $199.00)",
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
        price: "$150.00 (Early Bird - $100.00)",
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
        price: "$250.00 (Early Bird - $199.00)",
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
      {/* Banner */}
      <div className="bg-deepBlue py-10 text-white text-center mt-24">
        <h2 className="text-4xl font-bold">BUY TICKETS</h2>
        <p className="mt-4 text-lg ml-6 mr-6">
          Be sure to follow us on all social media channels to stay up to date
          on ticket sales and all other event announcements. Early bird ticket
          sales will begin on October 1st and end on November 15, 2024. Regular
          ticket sales will begin on November 16, 2024.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto py-10 px-6">
  <div className="grid lg:grid-cols-3 gap-8">
    {pricingData.map((category, index) => (
      <div key={index} className="border p-6 rounded-lg shadow-lg">
        
        {/* Updated Full Background Behind Category */}
        <div className="mb-6  bg-gradient-to-r from-deepBlue to-wine py-4 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white">{category.category}</h3>
        </div>

        {category.options.map((option, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-xl font-black text-wine">{option.title}</h4>
            <p className="text-lg font-black text-wine mb-4">{option.price}</p>
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
      



      {/* Hotel Reservations */}
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-black text-center mb-6 text-wine">Hotel Reservations</h2>
        <p className="text-lg">
          We have reserved a block of rooms at <b>The Westin Calgary</b> at a discounted rate of <b>$195.00</b> per night. To book directly, please call Marriott reservations at 
          <b>1-888-627-8417</b> or contact The Westin Calgary Hotel directly at <b>(403) 266-1611.</b> Please use the group name <b>“The ITL Conference”</b> to identify that you are booking for the Conference.
        </p>
      </div>

      {/* Airline Discounts */}
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-black text-wine text-center mb-6">Airline Discounts</h2>
        <p className="text-lg">
          We are happy to provide travelling conference attendees with the following airline discounts:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <b>Air Canada:</b> 5% applies on standard fares, 10% on flex fares & higher. For International Travel: 10% on standard fares & higher. <b>Promotion Code: RXZE7G31</b>
          </li>
          <li className="mt-2">
            <b>WestJet:</b> 5% off Econo and 10% off EconoFlex and Premium fares for travel within Canada and 2% off Econo, 5% off EconoFlex, and 10% off Premium base fares for guests traveling trans-border. <b>Coupon Code: 4X7Y5UF, Promo Code: YBN31.</b> 
          </li>
        </ul>
        <p className="text-lg mt-4">
          The booking is to be made to the following city: Calgary, YYC (CA) and the travel period begins Friday, March 28, 2025 and ends Saturday, April 12, 2025.
        </p>
      </div>

      {/* Questions */}
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-black text-center mb-6 text-wine">Questions</h2>
        <p className="text-lg text-center">
          For questions or concerns on registration, please email{" "}
          <a href="mailto:registration@itlconference.ca" className="text-blue-600 underline">
            registration@itlconference.ca
          </a>
        </p>
        <p className="text-lg text-center mt-2">
          REGISTRATION FOR THE CONFERENCE ENDS MARCH 15, 2025
        </p>
      </div>

      {/* Schedule Timeline */}
      <ScheduleTimeline />
    </>
  );
};

export default RegistrationPricing;
