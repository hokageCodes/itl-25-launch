import { useState } from "react";

const ScheduleTimeline = () => {
  const [activeDay, setActiveDay] = useState("Thursday");

  const schedule = {
    Thursday: [
      {
        title: "Opening Ceremony",
        time: "6:00 PM - 9:00 PM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
    ],
    Friday: [
      {
        title: "TBD",
        time: "9:00 AM - 11:00 AM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
      {
        title: "TBD",
        time: "11:00 AM - 1:00 PM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
      {
        title: "TBD",
        time: "1:00 PM - 3:00 PM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
      {
        title: "TBD",
        time: "3:00 PM - 5:00 PM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
    ],
    Saturday: [
      {
        title: "The Impact Awards/Gala",
        time: "6:00 PM - 9:00 PM MST",
        location: "Calgary, Alberta",
        details: "TBD / TBD",
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-deepBlue text-center mb-12">
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
                <p className="text-sm md:text-base text-gray-700">{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
