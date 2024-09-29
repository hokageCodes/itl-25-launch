import { useState } from "react";

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
          {/* FAQ 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left flex justify-between items-center text-deepBlue text-xl font-semibold"
            >
              What is the Internationally Trained Lawyers Conference?
              <span>{activeIndex === 1 ? "−" : "+"}</span>
            </button>
            {activeIndex === 1 && (
              <p className="mt-4 text-darkBrown text-lg">
                The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network, Global Lawyers of Canada, ITLNCA NetworkS and the Just One Yes (JOY) Initiative.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left flex justify-between items-center text-deepBlue text-xl font-semibold"
            >
              When and where will the ITL Conference take place?
              <span>{activeIndex === 2 ? "−" : "+"}</span>
            </button>
            {activeIndex === 2 && (
              <p className="mt-4 text-darkBrown text-lg">
              The ITL Conference has been scheduled to hold between April 4-5, 2025 in the city of Calgary, Alberta.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left flex justify-between items-center text-deepBlue text-xl font-semibold"
            >
              Who should attend the ITL Conference?
              <span>{activeIndex === 3 ? "−" : "+"}</span>
            </button>
            {activeIndex === 3 && (
              <p className="mt-4 text-darkBrown text-lg">
                The conference is opened to internationally trained lawyers, students, legal educators,employers, recruiters, equity seeking groups and other legal professionals.
              </p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <a
            href="/faq"
            className="inline-block bg-wine hover:bg-deepBlue hover:text-white transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-lg text-lg"
          >
            See All Questions
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
