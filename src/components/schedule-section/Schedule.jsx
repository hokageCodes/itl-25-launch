import { useState } from "react";

const ScheduleTimeline = () => {
  const [activeDay, setActiveDay] = useState("Friday");

  const schedule = {
    Friday: [
      {
        title: "Registration and Networking Breakfast",
        time: "8:00 AM - 9:00 AM",
        location: "Calgary, Alberta",
        details: `
          • Welcome attendees
          • Light breakfast and coffee
          • Networking opportunities
        `,
      },
      {
        title: "Opening Remarks",
        time: "9:00 AM - 9:15 AM",
        location: "Calgary, Alberta",
        details: `
          • Welcome address by the Conference Planning Chair
          • Overview of the Conference agenda and objectives
        `,
      },
      {
        title: "Special Address (TBD)",
        time: "9:15 AM - 9:30 AM",
        location: "Calgary, Alberta",
        details: `Topic: TBD`,
      },
      {
        title: "Panel Session: Overcoming Cultural Barriers and Building Professional Relationships",
        time: "9:30 AM - 10:30 AM",
        location: "Calgary, Alberta",
        details: `
          In today’s increasingly diverse legal landscape, cultural barriers can pose significant challenges to effective communication and collaboration. 
          Join our expert panel as they explore strategies for overcoming these barriers, fostering inclusivity, and building strong professional relationships. 
          Through real-life examples and interactive discussions, attendees will gain valuable insights into how to navigate cultural differences and leverage 
          them for success in the legal profession. Don’t miss this opportunity to engage with thought leaders and enhance your professional network.
        `,
      },
      {
        title: "Morning Coffee Break (Sponsored by The Westin Calgary)",
        time: "10:30 AM - 11:00 AM",
        location: "Calgary, Alberta",
        details: `• Networking and exhibitor interactions`,
      },
      {
        title: "Keynote Address - Crossing Borders, Breaking Barriers",
        time: "11:00 AM - 11:30 AM",
        location: "Calgary, Alberta",
        details: `
          • Topic: Crossing Borders, Breaking Barriers 
        `,
      },
      {
        title: "Panel Session: Enhancing Integration and Professional Development for Internationally Trained Lawyers",
        time: "11:30 AM - 12:30 PM",
        location: "Calgary, Alberta",
        details: `
          This informative session will bring together law societies, regulators and members of the judiciary to discuss the integration of internationally trained lawyers 
          into the Canadian legal system. Panelists will address the challenges faced by these professionals and share insights on existing programs and policies aimed at enhancing their professional development. 
          Attendees will have the chance to learn about best practices, emerging trends, and collaborative efforts to create a more inclusive legal environment. Join us for a thought-provoking discussion that will empower internationally trained lawyers to thrive in their careers.
        `,
      },
      {
        title: "Networking Lunch",
        time: "12:30 PM - 1:30 PM",
        location: "Calgary, Alberta",
        details: `• Buffet lunch`,
      },
      {
        title: "Breakout Session I (Choose One)",
        time: "1:30 PM - 2:30 PM",
        location: "Calgary, Alberta",
        details: `
          • Session A: Navigating the Corporate World: Strategies for In-House Counsel
          • Session B: Mastering Litigation: Strategies for Internationally Trained Litigators
          • Session C: Thriving in Private Practice: Insights for Internationally Trained Lawyers
          • Session D: Navigating the NCA & Articling Process: Strategies and Support for NCA Students
        `,
      },
      {
        title: "Breakout Session II (Choose One)",
        time: "2:30 PM - 3:30 PM",
        location: "Calgary, Alberta",
        details: `
          • Session A: Employment Law Fundamentals
          • Session B: Thriving as a Sole Practitioner: Strategies for Success
          • Session C: M&A Insights: Navigating Complex Transactions in a Post-Pandemic World
          • Session D: Recent Changes to Immigration Policies: Essential Updates for Legal Practitioners
        `,
      },
      {
        title: "Fireside Chat: Wealth Management for Lawyers",
        time: "3:30 PM - 4:00 PM",
        location: "Calgary, Alberta",
        details: `
          Join us for an engaging fireside chat on wealth management tailored for legal professionals. Learn strategies for long-term financial planning, investment opportunities, and managing legal practice finances.
        `,
      },
    ],
    Saturday: [
      {
        title: "Cocktail Reception",
        time: "6:00 PM - 7:00 PM",
        location: "Calgary, Alberta",
        details: `
          • Welcome drinks and hors d'oeuvres
          • Networking and Socializing
        `,
      },
      {
        title: "Gala Dinner",
        time: "7:00 PM - 8:30 PM",
        location: "Calgary, Alberta",
        details: `
          • Three-course dinner
          • Entertainment and special address
        `,
      },
      {
        title: "Awards Ceremony",
        time: "8:30 PM - 9:30 PM",
        location: "Calgary, Alberta",
        details: `
          • Presentation of awards in various categories
          • Recognition of outstanding achievements and contributions
        `,
      },
      {
        title: "Evening Entertainment",
        time: "9:30 PM - 10:30 PM",
        location: "Calgary, Alberta",
        details: `
          • Music, dancing, and networking
        `,
      },
      {
        title: "Closing & After-Party",
        time: "10:30 PM - Midnight",
        location: "Calgary, Alberta",
        details: `
          • Final goodbyes
          • Party continues into the night
        `,
      },
    ],
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
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeDay === day
                  ? "bg-wine text-white"
                  : "bg-white text-wine border-2 border-wine"
              }`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-wine pl-4 md:pl-8">
          {schedule[activeDay].map((event, index) => (
            <div
              key={index}
              className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-start"
            >
              <div className="absolute -left-3 md:-left-4 w-6 h-6 bg-wine rounded-full"></div>
              <div className="md:flex-grow">
                <h4 className="text-lg md:text-xl font-semibold mb-1">
                  {event.title}
                </h4>
                <p className="text-sm md:text-base mb-1">{event.time}</p>
                <p className="text-sm md:text-base mb-1">{event.location}</p>
                <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
                  {event.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
