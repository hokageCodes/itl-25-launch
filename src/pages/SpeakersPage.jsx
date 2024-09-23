// import { useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation
// import { FaLinkedin, FaTwitter } from 'react-icons/fa';

import ComingSoon from "../components/coming-soon/ComingSoon";

// const speakers = [
//   { name: 'Lindsay Walton', role: 'Speaker1', imageUrl: '/assets/prof.jpg', linkedinUrl: 'https://www.linkedin.com/in/lindsaywalton/', twitterUrl: 'https://twitter.com/lindsaywalton' },
//   { name: 'Courtney Henry', role: 'Speaker2', imageUrl: '../../../assets/prof.jpg', linkedinUrl: 'https://www.linkedin.com/in/courtneyhenry/', twitterUrl: 'https://twitter.com/courtneyhenry' },
//   { name: 'Tom Cook', role: 'Speaker3', imageUrl: '/assets/prof.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
//   { name: 'Tom Cook', role: 'Speaker4', imageUrl: '/assets/prof.jpg', linkedinUrl: 'https://www.linkedin.com/in/tomcook/', twitterUrl: 'https://twitter.com/tomcook' },
//   // Add more speaker data as needed
// ];

// const ITEMS_PER_PAGE = 8;

// const SpeakerCard = ({ speaker }) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//     <div className="relative w-full h-48 mb-4">
//       <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover rounded-lg" />
//     </div>
//     <h3 className="text-xl font-semibold text-darkBrown">{speaker.name}</h3>
//     <p className="text-gray-600">{speaker.role}</p>
//     <div className="flex items-center mt-4 space-x-4">
//       <a href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-500">
//         <FaTwitter size={24} />
//       </a>
//       <a href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-500">
//         <FaLinkedin size={24} />
//       </a>
//     </div>
//   </div>
// );

// // Prop validation using PropTypes
// SpeakerCard.propTypes = {
//   speaker: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     role: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     linkedinUrl: PropTypes.string.isRequired,
//     twitterUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const SpeakersPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);

//   const currentSpeakers = speakers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <section className="py-12 mt-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-darkBrown">Our Speakers</h2>
//           <p className="text-gray-600 mt-4">We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {currentSpeakers.map((speaker, index) => (
//             <SpeakerCard key={index} speaker={speaker} />
//           ))}
//         </div>
//         {speakers.length > ITEMS_PER_PAGE && (
//           <div className="flex justify-center items-center mt-8 space-x-8">
//             <button
//               aria-label="Prev"
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               className="bg-butter text-deepBlue px-4 py-2 rounded-md disabled:opacity-50 hover:bg-butter-dark"
//             >
//               Previous
//             </button>
//             <p className="text-darkBrown">Page {currentPage} of {totalPages}</p>
//             <button
//               aria-label="Next"
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className="bg-butter text-deepBlue px-4 py-2 rounded-md disabled:opacity-50 hover:bg-butter-dark"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SpeakersPage;



export default function SpeakersPage() {
  return (
    <div>
      <ComingSoon />
    </div>
  )
}
