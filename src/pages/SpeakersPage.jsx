import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import CSS for skeleton

const PlanningTeamSection = () => {
  const teamMembers = [
    {
      name: "Hon. Mickey Amery, K.C.",
      role: "Minister of Justice, Alberta",
      img: "/assets/mick.png",
    },
    {
      name: "Hon. Justice Chidinma B. Thompson",
      role: "Justice of the Court of King's Bench, Alberta",
      img: "/assets/keynote.webp",
    },
    {
      name: "Hon. Justice Darren Reed",
      role: "Justice, Court of King's Bench of Alberta",
      img: "/assets/darren.png",
    },
    {
      name: "Bianca Kratt, K.C.",
      role: "Partner, BLG and National President Elect, Canadian Bar Association",
      img: "/assets/bianca.png",
    },
    {
      name: "Cori Ghitter , K.C",
      role: "Deputy Executive Director and Director of Policy and Education, Law Society of Alberta",
      img: "/assets/cori.png",
    },
    {
      name: "Priya Bhatia",
      role: "Executive Director, Professional Development & Competence, Law Society of Ontario",
      img: "/assets/priya.png",
    },
    {
      name: "Pamela Kovacs",
      role: "Senior Policy Counsel, Law Society of Saskatchewan",
      img: "/assets/pam.png",
    },
    {
      name: "Kene Ilochonwu, K.C.",
      role: "Senior Legal Counsel, Woodfibre LNG & Bencher, Law Society of Aberta",
      img: "/assets/kene.png",
    },
    {
      name: "Deborah Wolfe",
      role: "Executive Director, National Committee on Accreditation and Law School Programs",
      img: "/assets/debbs.png",
    },
    {
      name: "Dr. Charles Osuji(Hon D.)",
      role: "Managing Partner & CEO, Osuji & Smith Lawyers",
      img: "/assets/chalie.webp",
    },
    {
      name: "Nicole Bacsalmasi",
      role: "Partner, BLG",
      img: "/assets/nicole.png",
    },
    {
      name: "Vivek Warrier",
      role: "Partner, Osler",
      img: "/assets/vivek.png",
    },
    {
      name: "Laurelle A. Harris K.C.",
      role: "Director, ITL Program, Equity & Transformation, University of Manitoba, Faculty of Law",
      img: "/assets/laurelle.png",
    },
    {
      name: "Professor Gideon Christian",
      role: "Associate Professor of law, University of Calgary",
      img: "/assets/giddy.png",
    },
    {
      name: "Myriam Seers",
      role: "Partner, Agora Law & Past Chair, ICC Canada Arbitration Committee",
      img: "/assets/myri.png",
    },
    {
      name: "Gina Alexandris",
      role: "Career Coach & Former Senior Director, Law Practice Program at TMU (formerly Ryerson University)",
      img: "/assets/gina.png",
    },
    {
      name: "Sara Bond",
      role: "Wills & Estate Consultant, RBC Wealth Management, Family Office Services",
      img: "/assets/sara.png",
    },
    {
      name: "Leena Yousefi",
      role: "CEO  YLaw",
      img: "/assets/leena.png",
    },
    {
      name: "Krista Schofer",
      role: "Partner, Gowling WLG",
      img: "/assets/krista.png",
    },
    {
      name: "Dr. Chika Onwuekwe, KC, ICD.D",
      role: "VP Legal, General Counsel & Corporate Secretary, Trican Well Service Ltd.",
      img: "/assets/chika.png",
    },
    {
      name: "Nketti Johnson-Taylor",
      role: "Executive Director, CRIEC",
      img: "/assets/nketti.png",
    },
    {
      name: "Tomi Olutunfese",
      role: "Founder, Tomi Law Office",
      img: "/assets/tomi.png",
    },
    {
      name: "Melika Mostowfi",
      role: "Associate, Dentons Canada LLP",
      img: "/assets/melika.png",
    },
    {
      name: "Angela Ogang",
      role: "Founder, AngeLAW",
      img: "/assets/angie.webp",
    },
    {
      name: "Dayo Ogunyemi",
      role: "Legal Counsel, Alberta Energy Regulator",
      img: "/assets/dayoo.webp",
    },
    {
      name: "Dr. Ugo Ukpabi, C.Dir., K.C.",
      role: "Founder, The Republic Law",
      img: "/assets/ugo.webp",
    },
    {
      name: "Eric Pye",
      role: "Student Services Advisor, CPLED",
      img: "/assets/eric.webp",
    },
    {
      name: "Lesley Small",
      role: "Senior Director, Credentials, Professional Development & Practice Support, Law Society of British Columbia",
      img: "/assets/lessliee.webp",
    },
    {
      name: "Raphael Tachie ",
      role: "Partner, Trusts, Estates and Wealth Preservation group, Dentons Canada LLP",
      img: "/assets/ralph.webp",
    },
    {
      name: "Sahil Shoor",
      role: "Partner, Litigation and Dispute Resolution, Gowling WLG",
      img: "/assets/sahil.png",
    },
    {
      name: "Michael Tam",
      role: "Program Lawyer, Osgoode PD",
      img: "/assets/tam.webp",
    },
    {
      name: "Cynthia Okafor",
      role: "Associate, Swainson Miki Peskett",
      img: "/assets/cynth.webp",
    },
    {
      name: "Rachel Sachs",
      role: "Principal Lawyer, Sachs Law",
      img: "/assets/ray-ray.webp",
    },
    {
      name: "Ishita Kashyap",
      role: "Senior Associate, DLA Piper",
      img: "/assets/ishita.webp",
    },
    {
      name: "Jennifer Lau",
      role: "Career Advisor, Graduate Studies Peter Allard School of Law",
      img: "/assets/jen.png",
    },
    {
      name: "Sandra Aigbinode Lange",
      role: "Senior Legal Counsel at AltaLink LP",
      img: "/assets/sandy.png",
    },
    {
      name: "Wale Balogun",
      role: "Executive Consultant at IG Wealth Management",
      img: "/assets/wales.png",
    },
    {
      name: "Dara Omolaja",
      role: "TD Bank",
      img: "/assets/daraa.webp",
    },
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Simulating loading state
  const membersPerPage = 12;
  
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
            Meet Our <span className="text-[#3D3C42]">Speakers</span>
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
          <h3 className='text-xl mb-16'>Watch this space as we unveil more speakers for the ITL Conference 2025!</h3>
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
