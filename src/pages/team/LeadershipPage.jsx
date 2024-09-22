import { useState } from 'react';

const LeadershipSection = () => {
  const teamMembers = [
    { name: "Kenny Okunola", org: "The ITL Network & Global Lawyers of Canada", img: "/assets/leadership/ken.png"},
    { name: "Cynthia Okafor", org: "The ITL Network", img: "/assets/leadership/cyn.png"},
    { name: "Dayo Ogunyemi", org: "Global Lawyers of Canada", img: "/assets/leadership/dayo.png"},
    { name: "Michael Tam", org: "ITLNCA NetworkS", img: "/assets/leadership/mike.png"},
    { name: "Ishita Kashyap", org: "Just One Yes (JOY) ITL Initiative", img: "/assets/leadership/ishita.png"},
    { name: "Funto Omotosho", org: "The ITL Network", img: "/assets/leadership/funto.png"},
    { name: "Mrunal Masurekar", org: "Just One Yes (JOY) ITL Initiative", img: "/assets/leadership/mru.png"},
    { name: "Rachel Sachs", org: "ITLNCA NetworkS", img: "/assets/leadership/rach.png"},
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;

  // Logic for displaying current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="team" className="team-area py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-deepBlue">Meet Our Leadership Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentMembers.map((member, index) => (
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
                <p className="text-sm mt-2">{member.description}</p>
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
