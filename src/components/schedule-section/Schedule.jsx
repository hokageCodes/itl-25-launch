import { useState } from "react";

const ScheduleTimeline = () => {
  const [activeDay, setActiveDay] = useState("Friday");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const schedule = {
    Friday: [
      {
        title: "Registration and Networking Breakfast",
        time: "8:00 AM - 9:00 AM",
      },
      {
        title: "Opening Remarks",
        time: "9:00 AM - 9:15 AM",
      },
      {
        title: "Special Address (TBD)",
        time: "9:15 AM - 9:30 AM",
      },
      {
        title: "Panel Session: Overcoming Cultural Barriers and Building Professional Relationships (Sponsored by the Canadian Centre for Professional Legal Education)",
        time: "9:30 AM - 10:30 AM",
        details: `
          In today’s increasingly diverse legal landscape, cultural barriers can pose significant challenges to effective communication and collaboration. Join our expert panel as they explore strategies for overcoming these barriers, fostering inclusivity, and building strong professional relationships. Through real-life examples and interactive discussions, attendees will gain valuable insights into how to navigate cultural differences and leverage them for success in the legal profession.
        `,
      },
      {
        title: "Morning Coffee Break (Sponsored by The Westin Calgary)",
        time: "10:30 AM - 11:00 AM",
        details: `• Networking and exhibitor interactions`,
      },
      {
        title: "Keynote Address - Crossing Borders, Breaking Barriers",
        time: "11:00 AM - 11:30 AM",
        details: `• Topic: Crossing Borders, Breaking Barriers`,
      },
      {
        title: "Enhancing Integration and Professional Development for Internationally Trained Lawyers: Perspectives from Regulators and the Judiciary (Panel Session)",
        time: "11:30 AM - 12:30 PM",
        details: `
          This informative session will bring together law societies, regulators and members of the judiciary to discuss the integration of internationally trained lawyers into the Canadian legal system. Panelists will address the challenges faced by these professionals and share insights on existing programs and policies aimed at enhancing their professional development. Attendees will have the chance to learn about best practices, emerging trends, and collaborative efforts to create a more inclusive legal environment.
        `,
      },
      {
        title: "Networking Lunch",
        time: "12:30 PM - 1:30 PM",
        details: `• Buffet lunch`,
      },
      {
        title: "Breakout Session I (Choose One)",
        time: "1:30 PM - 2:30 PM",
        details: `
          • Session A: Navigating the Corporate World: Strategies for In-House Counsel - 
            This session will provide practical strategies for lawyers transitioning into in-house roles. Participants will explore key skills required to thrive in a corporate environment, including effective communication, stakeholder management, and strategic thinking.
  
          • Session B: Mastering Litigation: Strategies for Internationally Trained Litigators - 
            In this breakout session, we will delve into the nuances of litigation practice in Canada. Attendees will gain insights into trial preparation, courtroom strategies, and effective advocacy techniques tailored for diverse legal backgrounds.
  
          • Session C: Thriving in Private Practice: Insights for Internationally Trained Lawyers - 
            This session focuses on the unique challenges and opportunities faced by internationally trained lawyers in private practice. Participants will hear from successful practitioners who will share their journeys, highlighting strategies for building a client base and navigating firm dynamics.
  
          • Session D: Navigating the NCA & Articling Process: Strategies and Support for NCA Students - 
            This session is designed for NCA students seeking guidance on navigating the accreditation and articling processes. Participants will learn about available resources, best practices for securing articling positions, and tips for success.
        `,
        sessions: [
          { title: "Session A", time: "1:30 PM - 2:30 PM", description: "Navigating the Corporate World: Strategies for In-House Counsel" },
          { title: "Session B", time: "1:30 PM - 2:30 PM", description: "Mastering Litigation: Strategies for Internationally Trained Litigators" },
          { title: "Session C", time: "1:30 PM - 2:30 PM", description: "Thriving in Private Practice: Insights for Internationally Trained Lawyers" },
          { title: "Session D", time: "1:30 PM - 2:30 PM", description: "Navigating the NCA & Articling Process: Strategies and Support for NCA Students" },
        ],
      },
      {
        title: "Breakout Session II (Choose One)",
        time: "2:30 PM - 3:30 PM",
        details: `
          • Session A: Employment Law Fundamentals - In this foundational session, attendees will explore key principles and recent developments in employment law, covering essential topics such as employment contracts, workplace rights, and anti-discrimination laws.
  
          • Session B: Thriving as a Sole Practitioner: Strategies for Success - This session will focus on practical strategies for building and maintaining a successful solo practice. 
  
          • Session C: M&A Insights: Navigating Complex Transactions in a Post-Pandemic World - This session will delve into the complexities of mergers and acquisitions (M&A) in a post-pandemic landscape.
  
          • Session D: Recent Changes to Immigration Policies: Essential Updates for Legal Practitioners - This session aims to provide legal practitioners with updates on recent changes to immigration policies and their implications for both lawyers and clients.
        `,
        sessions: [
          { title: "Session A", time: "2:30 PM - 3:30 PM", description: "Employment Law Fundamentals" },
          { title: "Session B", time: "2:30 PM - 3:30 PM", description: "Thriving as a Sole Practitioner: Strategies for Success" },
          { title: "Session C", time: "2:30 PM - 3:30 PM", description: "M&A Insights: Navigating Complex Transactions in a Post-Pandemic World" },
          { title: "Session D", time: "2:30 PM - 3:30 PM", description: "Recent Changes to Immigration Policies: Essential Updates for Legal Practitioners" },
        ],
      },
      {
        title: "Fireside Chat: Wealth Management for Lawyers",
        time: "3:30 PM - 4:00 PM",
        details: `
          Join us for an engaging fireside chat focused on the unique financial challenges and opportunities that lawyers face in managing their wealth. Led by industry experts, this session will cover essential topics such as investment strategies, retirement planning, and effective budgeting for legal professionals.
        `,
      },
      {
        title: "Panel Discussion - Crossing Borders, Breaking Barriers: Where do we go from here?",
        time: "4:00 PM - 5:00 PM",
        details: `
          For internationally trained lawyers who have left everything behind to build their careers in Canada, this panel discussion will highlight the unique experiences of these practitioners as they navigate the complexities of starting anew.
        `,
      },
      {
        title: "Closing Remarks",
        time: "5:00 PM - 6:00 PM",
      },
    ],
    Saturday: [
      {
        title: "Cocktail Reception",
        time: "6:00 PM - 7:00 PM",
        details: "• Welcome drinks and hors d'oeuvres",
      },
      {
        title: "Gala Dinner",
        time: "7:00 PM - 8:30 PM",
        details: "• Three-course dinner and special address",
      },
      {
        title: "Awards Presentation",
        time: "8:30 PM - 9:30 PM",
        details: "• Presentation of awards in various categories",
      },
      {
        title: "Evening Entertainment",
        time: "9:30 PM - 10:30 PM",
        details: "• Music, dancing, and networking",
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
                <h4 className="text-xl md:text-2xl font-bold mb-2 text-wine">{event.title}</h4>
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
