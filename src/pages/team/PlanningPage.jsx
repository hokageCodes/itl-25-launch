import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import CSS for skeleton

const PlanningTeamSection = () => {
  const teamMembers = [
    {
      name: "Kenny Okunola",
      role: "Conference Planning Chair",
      img: "/assets/planning/5.webp",
    },
    {
      name: "Jaanam Mahboobani",
      role: "Sponsorship Committee Co-Lead",
      img: "/assets/planning/jaa.webp",
    },
    {
      name: "Dayo Ogunyemi",
      role: "Exhibition Committee Lead",
      img: "/assets/planning/ex-comm-lead.webp",
    },
    {
      name: "Dunni Shodipo",
      role: "Award Committee Lead",
      img: "/assets/planning/1.webp",
    },
    {
      name: "Hasiya Crown",
      role: "Publicity Committee Lead",
      img: "/assets/planning/pub-comm-lead.webp",
    },
    {
      name: "Cynthia Okafor",
      role: "Registration Committee Lead",
      img: "/assets/planning/comm-lead.webp",
    },
    {
      name: "Lola Williams-Afolabi",
      role: "Logistics Committee Lead",
      img: "/assets/planning/logi-comm.webp",
    },
    {
      name: "Maria Kim",
      role: "Sponsorship Committee Co-Lead",
      img: "/assets/planning/spons-lead.webp",
    },
    {
      name: "Juliette Omonigho",
      role: "Programs Committee Lead",
      img: "/assets/julie.webp",             
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Simulating loading state
  const membersPerPage = 9;

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Simulate fetching data by using a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay to your preference
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="planning-team" className="planning-team-area py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7F5283]">
            Meet Our <span className="text-[#3D3C42]">Planning Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {loading
            ? [...Array(membersPerPage)].map((_, index) => (
                <div
                  key={index}
                  className="team-member-card bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="image-wrapper relative w-full h-60">
                    <Skeleton height="100%" />
                  </div>
                  <div className="details p-6 text-center">
                    <h4 className="text-xl font-semibold text-[#3D3C42]">
                      <Skeleton width="80%" />
                    </h4>
                    <span className="block text-md text-[#7F5283] mb-2">
                      <Skeleton width="60%" />
                    </span>
                  </div>
                </div>
              ))
            : currentMembers.map((member, index) => (
                <div
                  key={index}
                  className="team-member-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="image-wrapper relative w-full h-60">
                    <img
                      src={member.img}
                      alt={`${member.name}'s profile`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="details p-6 text-center">
                    <h4 className="text-xl font-semibold text-[#3D3C42]">{member.name}</h4>
                    <span className="block text-md text-[#7F5283] mb-2">{member.role}</span>
                  </div>
                </div>
              ))}
        </div>
        <div className="text-center mt-12">
          {teamMembers.length > membersPerPage && (
            <div className="pagination inline-flex space-x-2">
              {[...Array(Math.ceil(teamMembers.length / membersPerPage)).keys()].map((number) => (
                <button
                  aria-label={`Page ${number + 1}`}
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === number + 1
                      ? "bg-[#3D3C42] text-white"
                      : "bg-white text-[#3D3C42] border-[#3D3C42]"
                  }`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanningTeamSection;
