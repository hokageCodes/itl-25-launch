import { useState } from "react";

const faqs = [
  { question: "What is the Internationally Trained Lawyers Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network, Global Lawyers of Canada, ITLNCA NetworkS and the Just One Yes (JOY) Initiative." },
  { question: "When and where will the ITL Conference take place?", answer: "The ITL Conference has been scheduled to hold between April 4-5, 2025 in the city of Calgary, Alberta." },
  { question: "Who should attend the ITL Conference?", answer: "The conference is opened to internationally trained lawyers, students, legal educators, employers, recruiters, equity seeking groups and other legal professionals." },
  { question: "What can attendees expect from the ITL Conference?", answer: "Attendees can expect a comprehensive program featuring insightful panel discussions, workshops, networking sessions, and opportunities to engage with fellow legal professionals. The conference will also feature a Gala & Award night recognizing exceptional internationally trained lawyers in Canada." },
  { question: "How can I register for the ITL Conference?", answer: "Registration for the conference can be completed online through our website. Early registration discounts and group rates may be available. Please visit the registration page for details." },
  { question: "Is there a cost to attend the ITL Conference?", answer: "Yes, there is a registration fee to attend the ITL Conference. The fee structure may vary based on factors such as early registration, student discounts, or group rates. Please refer to our registration page for current registration information." },
  { question: "What is included in a ticket?", answer: "Tickets may include access to the Conference and Gala or Conference only. The ticket also includes a breakfast, coffee break, lunch and all other Conference materials. For more details on tickets and registration fees, please visit our registration page." },
  { question: "Are there hotel accommodations available for travelling conference attendees?", answer: "We have reserved a block of rooms at The Westin Calgary at a discounted rate of $195.00 per night. To book directly, please call Marriott reservations at 1-888-627-8417 or contact The Westin Calgary Hotel directly at (403) 266-1611. Please use the group name “The ITL Conference” to identify that you are booking for the Conference." },
  { 
    question: "Are there any travel discounts available for travelling conference attendees?", 
    answer: `
    We are happy to provide travelling conference attendees with the following airline discounts:
    
    **Air Canada**:
    - North America: 5% off on standard fares, 10% off on flex fares & higher.
    - International Travel: 10% off on standard fares & higher.
    - Promotion Code: **RXZE7G31**.
    
    **WestJet**:
    - 5% off Econo and 10% off EconoFlex and Premium fares for travel within Canada.
    - 2% off Econo, 5% off EconoFlex, and 10% off Premium base fares for trans-border travel.
    - Coupon Code: **4X7Y5UF**, Promo Code: **YBN31**.
    
    The booking should be made to the following city: Calgary, YYC (CA). The travel period starts from Friday, March 28, 2025, and ends on Saturday, April 12, 2025. Travel is valid on all days: Monday through Sunday.
    `
  },
  { question: "Are there opportunities for sponsorship or exhibition at the ITL Conference?", answer: "Yes, we have different sponsorship opportunities available for the conference. For more details, please visit our sponsorship page or reach out to us at info@itlconference.ca" },
  { question: "How can I stay updated on the latest updates on the conference?", answer: "To stay informed about the conference, please register on the conference registration page and we will make sure to keep you in the loop with additional details." },
];

export const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32" id="faqs">
      <div className="container mx-auto px-6">
        <h2 className="text-deepBlue text-4xl font-bold text-center mb-8">
          Learn More About The ITL Conference
        </h2>
        <p className="text-darkBrown text-center text-lg mb-12">
          Welcome to the FAQ section. Here, you will find answers to common
          questions about the ITL Conference, registration process, event
          details, and more. Explore the information to get the most out of
          your conference experience.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-deepBlue text-xl font-semibold"
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-darkBrown text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
