import { useState, useEffect } from 'react';

const LeadershipSection = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const teamMembers = [
    { name: "Kenny Okunola", org: "The ITL Network & Global Lawyers of Canada", img: "/assets/leadership/ken.webp" },
    { name: "Cynthia Okafor", org: "The ITL Network", img: "/assets/leadership/cyn.webp" },
    { name: "Dayo Ogunyemi", org: "Global Lawyers of Canada", img: "/assets/leadership/dayo.webp" },
    { name: "Michael Tam", org: "ITLNCA NetworkS", img: "/assets/leadership/mike.webp" },
    { name: "Ishita Kashyap", org: "Just One Yes (JOY) ITL Initiative", img: "/assets/leadership/ishita.webp" },
    { name: "Funto Omotosho", org: "The ITL Network", img: "/assets/leadership/funto.webp" },
    { name: "Mrunal Masurekar", org: "Just One Yes (JOY) ITL Initiative", img: "/assets/leadership/mru.webp" },
    { name: "Rachel Sachs", org: "ITLNCA NetworkS", img: "/assets/leadership/rach.webp" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  // Logic for displaying current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="w-full h-60 bg-gray-200 rounded-lg"></div>
      <div className="mt-4 h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  );

  return (
    <section id="team" className="team-area py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7F5283]">
            Meet Our <span className="text-[#3D3C42]">Leadership Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? [...Array(8)].map((_, index) => (
                <div key={index} className="single-item bg-white shadow-lg rounded-lg overflow-hidden">
                  <SkeletonLoader />
                </div>
              ))
            : currentMembers.map((member, index) => (
                <div key={index} className="single-item bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="thumb relative">
                    <img
                      src={member.img}
                      alt={`${member.name}'s Profile`}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="info p-6 text-center">
                    <h4 className="text-2xl font-semibold text-deepBlue">{member.name}</h4>
                    <span className="text-lg font-semibold text-wine">{member.org}</span>
                  </div>
                </div>
              ))}
        </div>
        <div className="text-center mt-8">
          {teamMembers.length > membersPerPage && (
            <div className="inline-flex space-x-2">
              {[...Array(Math.ceil(teamMembers.length / membersPerPage)).keys()].map((number) => (
                <button
                  aria-label={`Page ${number + 1}`}
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 rounded-md ${currentPage === number + 1 ? 'bg-deepBlue text-white' : 'bg-white text-deepBlue'}`}
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

export default LeadershipSection;
