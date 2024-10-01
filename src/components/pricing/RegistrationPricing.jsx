import { useEffect, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d2poexpdc5y9vj.cloudfront.net/embed/js/ez_widgets_v2.js";
    script.setAttribute("data-widget-type", "eventzilla-evbutton-p");
    script.setAttribute("data-target-id", "2138648396");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRegisterClick = () => {
    setLoading(true); // Set loading state
    setIsModalOpen(true); // Open the modal

    setTimeout(() => {
      if (typeof window !== "undefined" && window.EventzillaBuyTickets) {
        window.EventzillaBuyTickets("2138648396");
      }
      setLoading(false); // Stop loading
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <div className="mb-6 bg-gradient-to-r from-deepBlue to-wine py-4 rounded-lg text-center">
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

                  {/* Register CTA */}
                  <button
                    className={`w-full py-3 text-white font-bold rounded-md 
                    ${loading ? "bg-gray-500" : "bg-wine hover:bg-deepBlue"} transition duration-300`}
                    onClick={handleRegisterClick}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Register Now"}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl overflow-y-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Register for the Conference</h2>
            <p className="text-center mb-4">Proceeding to the ticket purchase...</p>
            <div className="flex justify-end">
              <button
                className="text-red-500 hover:text-red-700 font-bold"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
          <li>
            <b>WestJet:</b> Save 5% on Econo, 10% off Flex, and 15% off Plus. <b>Promo Code: QX6R5HR</b>
          </li>
        </ul>
      </div>
      <ScheduleTimeline />
    </>
  );
};

export default RegistrationPricing;
