import { useState } from "react";

const ScheduleTimeline = () => {
  const [activeDay, setActiveDay] = useState("Friday");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const schedule = {
    Friday: [
      {
        title: "Registration, Breakfast & Exhibition",
        time: "8:00 AM - 9:00 AM",
      },
      {
        title: "Opening Remarks - Land Acknowledgement & Conference Opener",
        time: "9:00 AM - 9:10 AM",
      },
      {
        title: " Welcome  Address- Bianca Kratt, K.C. - Partner, BLG and National President Elect, Canadian Bar Association",
        time: "9:10 AM - 9:20 AM",
      },
      {
        title: "Special Address - Hon. Mickey Amery, K.C. - Minister of Justice (Alberta) ",
        time: "9:20 AM - 9:30 AM",
      },
      {
        title: "Panel Session: Overcoming Cultural Barriers and Building Professional Relationships (Sponsored by CPLED)",
        time: "9:35 AM - 10:30 AM",
        details: `
          In today’s increasingly diverse legal landscape, cultural barriers can pose significant challenges to effective communication and collaboration. Join our expert panel as they explore strategies for overcoming these barriers, fostering inclusivity, and building strong professional relationships. Through real-life examples and interactive discussions, attendees will gain valuable insights into how to navigate cultural differences and leverage them for success in the legal profession. Don’t miss this opportunity to engage with thought leaders and enhance your professional network.
        `,
        sponsorImg: "/assets/CCPLE.png",
      },
      {
        title: "Coffee Break – Networking & Exhibition (Sponsored by The Westin Calgary)",
        time: "10:30 AM - 11:00 AM",
        sponsorImg: "/assets/the-westin.png",
        details: `
        `,
      
      },
      {
        title: "Keynote Address - Crossing Borders, Breaking Barriers - Hon. Justice Chidinma B. Thompson (Court of King’s Bench of Alberta)",
        time: "11:00 AM - 11:30 AM",
      },
      {
        title: "Enhancing Integration and Professional Development for Internationally Trained Lawyers: Perspectives from Regulators - Hosted by: Law Society of Alberta",
        time: "11:35 AM - 12:30 PM",
        details: `
          This informative session will bring together law societies, regulators and members of the judiciary to discuss the integration of internationally trained lawyers into the Canadian legal system. Panelists will address the challenges faced by these professionals and share insights on existing programs and policies aimed at enhancing their professional development. Attendees will have the chance to learn about best practices, emerging trends, and collaborative efforts to create a more inclusive legal environment.
        `,
        sponsorImg: "/assets/law-society.png",
      },
      {
        title: "Lunch & Networking",
        time: "12:30 PM - 1:30 PM",
      },
      {
        title: "Introduction to the Foot In The Door Initiative (FIDI), CRIEC ITL-PEP Program, and Key Insights from the ITL Experience Survey",
        time: "1:30 PM - 2:25 PM",
        details: `
          Join us for an insightful discussion on the Foot In The Door Initiative (FIDI) by Osuji & Smith Lawyers and the Internationally Trained Lawyers Pathway to Employment Program (ITL-PEP) by the Calgary Region Immigrant Employment Council (CRIEC). This session will also explore key findings from the ITL Experience Survey in partnership with The Counsel Network (Caldwell) and sponsored by Osuji & Smith Lawyers.  
        `,
        sponsorImg: "/assets/osl.png",
      },
      {
        title: "Breakout Session One",
        time: "2:30 PM - 3:25 PM",
        sessions: [
          { title: "(Track One) Thriving in Private Practice & In-House: Insights for Internationally Trained Lawyers", time: "2:30 PM - 3:25 PM", track: "Track I", description: "This session addresses the distinct challenges and opportunities that internationally trained lawyers encounter in both private practice and in-house roles. Participants will hear firsthand from accomplished practitioners who will share their personal journeys, offering valuable insights into building a robust client base, navigating firm dynamics, and achieving professional success in diverse legal environments." },

          { title: "(Track Two) Navigating the NCA & Articling Process: Strategies and Support for NCA Students", time: "2:30 PM - 3:25 PM", track: "Track II", description: "This session is designed for National Committee on Accreditation (NCA) students seeking guidance on navigating the accreditation and articling processes. Participants will gain a clear understanding of the NCA’s requirements and best practices for securing articling positions, including tips for crafting compelling applications and succeeding in interviews. ",
            sponsorImg: "/assets/uni-berta.png",
          },
        ],
      },
      {
        title: "Breakout Session Two",
        time: "3:30 PM - 4:25 PM",
        sessions: [
          { title: "(Track One) Mastering Litigation: Strategies for Internationally Trained Litigators", time: "3:30 PM - 4:25 PM", track: "Track I", description: "In this breakout session, we will delve into the nuances of litigation practice in Canada. Attendees will gain insights into trial preparation, courtroom strategies, and effective advocacy techniques tailored for diverse legal backgrounds. Learn from experienced litigators who will provide guidance and share best practices to help you excel in the competitive litigation arena." },

          { title: "(Track Two) Thriving as a Law Firm Owner: Strategies for Success: Strategies for Success", time: "3:30 PM - 4:25 PM", track: "Track II", description: "For internationally trained lawyers, launching and managing your own law firm presents unique challenges and opportunities. This session will focus on practical strategies to help you navigate the complexities of establishing a successful law practice in a new jurisdiction while effectively managing the business side of operations." },
        ],
      },
      {
        title: "Breakout Session Three",
        time: "4:25 PM - 5:25 PM",
        sessions: [
          { title: "(Track One) Employment Law Fundamentals and Emerging Trends in Privacy Law", time: "4:25 PM - 5:25 PM", track: "Track I", description: "This session will provide an overview of employment law while exploring critical trends in privacy law that impact individuals and organizations. Participants will gain insights into employee rights, workplace discrimination, and labor regulation compliance, as well as significant privacy trends, including evolving data protection regulations, technology’s impact on personal privacy, and rights under the Personal Information Protection Act and Consumer Privacy Protection Act." },

          { title: "(Track Two) Securities & M&A Insights: Navigating Complex Transactions in a Post-Pandemic World", time: "4:25 PM - 5:25 PM", track: "Track II", description: "Participants will gain insights into emerging trends, regulatory changes, and best practices for conducting due diligence and negotiating deals. Join industry experts as they share their experiences and provide guidance on how to navigate the evolving Corporate, Securities, M&A environment, ensuring your practice stays ahead in this dynamic field." },
        ],
      },
      // {
      //   title: "Internationally Trained Lawyers Pathway to Employment Program (ITL-PEP) & the Foot in the Door Initiative (FIDI)",
      //   time: "4:30 PM - 5:00 PM",
      //   details: `
      //     Join us for a discussion on the Internationally Trained Lawyers Pathway to Employment Program by the Calgary Region Immigrant Employment Council and the Foot in the Door Initiative by FIDI. 
      //   `,
      // },
      {
        title: "Fireside Chat: Navigating Wealth Management for Internationally Trained Lawyers  ",
        time: "5:25 PM - 6:15 PM",
        details: `
          Join us for an engaging fireside chat focused on the unique financial challenges and opportunities that lawyers face in managing their wealth. Led by industry experts, this session will delve into critical topics such as tailored investment strategies, retirement planning in a new jurisdiction, and effective budgeting for legal professionals transitioning to the Canadian market.
        `,
      },
      {
        title: "Closing Remarks",
        // time: "5:55 PM - 6:00 PM",
      },
    ],
    Saturday: [
      {
        title: "Cocktail Reception - McMurray Room",
        time: "6:00 PM - 7:00 PM",
      },
      {
        title: "Gala Dinner",
        time: "7:00 PM - 8:30 PM",
        details: "• Three-course dinner, Entertainment and special address - Devonian",
      },
      {
        title: "Awards Presentation - Devonian Room",
        time: "8:30 PM - 9:30 PM",
      },
      {
        title: "Evening Entertainment - Devonian Room",
        time: "9:30 PM - 10:30 PM",
      },
      {
        title: "Closing & After-Party",
        time: "10:30 PM - Midnight",
      },
    ],
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-wine text-center mb-12">
          Conference Schedule
        </h2>

        {/* PDF Download Link */}
        <div className="flex justify-center mb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/assets/pdf.pdf"
            className="px-12 py-4 bg-wine text-white rounded-xl font-medium transition duration-300 hover:bg-wine-dark"
          >
            Download Schedule Here ( PDF )
          </a>
        </div>

        {/* Day Buttons */}
        <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mb-8">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeDay === day ? "bg-wine text-white" : "bg-white text-wine border-2 border-wine"}`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-wine pl-4 md:pl-8">
          {schedule[activeDay].map((event, index) => (
            <div key={index} className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-start">
              <div className="absolute -left-3 md:-left-4 w-6 h-6 bg-wine rounded-full"></div>
              <div className="md:flex-grow">
                <h4 className="text-xl md:text-2xl font-bold mb-2 text-wine flex items-center">
                  {event.title}
                </h4>

                <p className="text-sm md:text-base mb-2 text-gray-600">{event.time}</p>
                {event.sessions ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.sessions.map((session, idx) => (
                      <div key={idx} className="bg-white p-4 shadow-md rounded-lg">
                        <h5 className="font-semibold">{session.title}</h5>
                        <p className="text-sm">{session.description}</p>
                        <button className="text-wine underline mt-2 text-sm" onClick={() => openModal(session)}>
                          See Details
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  event.details && (
                    <button onClick={() => openModal(event)} className="text-wine underline mt-1">
                      See Details
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h4 className="text-xl font-bold mb-4">{selectedEvent.title}</h4>
              <p>{selectedEvent.details || selectedEvent.description}</p>
              {selectedEvent.sponsorImg && (
                <div className="mt-4">
                  <img src={selectedEvent.sponsorImg} alt="Sponsor Logo" className="max-w-full h-32 object-contain" />
                </div>
              )}
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-wine text-white rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScheduleTimeline;
