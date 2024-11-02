import { useState, useEffect } from 'react';
import hero3 from '../assets/hero3.png';
import plaque from '../assets/plaque.png';

const awards = [
  {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession, particularly in supporting internationally trained lawyers. This can also be awarded to a law firm that has demonstrated outstanding commitment to diversity and inclusion, particularly in supporting and advancing the careers of internationally trained lawyers within their organization.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 2,
      title: "Community Impact Award",
      description: "Awarded to an ITL who has demonstrated exceptional dedication to serving and making a positive impact in their local community through advocacy, legal advocacy, pro bono work, or community initiatives. This will also be awarded to an ITL who has displayed exemplary advocacy skills and commitment to justice, making a significant impact in advocating for ITLs, their clients and communities", 
      icon: "/assets/plaque.png",
    },
    {
      id: 3,
      title: "Leadership in Legal Education Award",
      description: "Honoring an individual or institution that has shown outstanding leadership and innovation in providing educational support and resources for internationally trained lawyers to integrate into the Canadian legal profession. This can also be awarded to an ITL who has made exceptional contributions to legal scholarship through their research, publications, and academic endeavors within the Canadian legal education system.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 4,
      title: "Trailblazer in Technology Award",
      description: "Recognizing an ITL who has leveraged technology and innovation to advance the practice of law, improve access to justice, or enhance legal services delivery in Canada. This also includes groundbreaking legal solutions developed or implemented by an internationally trained lawyer or legal team to address complex challenges in the Canadian legal landscape.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 6,
      title: "Rising Star Award",
      description: "The Rising Star Award honors a young ITL who has demonstrated outstanding potential, leadership, legal excellence, and a commitment to justice. This individual is poised to make a significant impact and is seen as a future leader within the Canadian legal community.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 7,
      title: "Mentorship Excellence Award",
      description: "Presented to a law firm, individual or organization that has excelled in providing mentorship programs and opportunities for internationally trained lawyers to enhance their professional development and integration into the Canadian legal profession.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 8,
      title: "Innovative Recruitment Award",
      description: "Awarded to a law firm that has implemented innovative and effective strategies to recruit, retain, and support internationally trained lawyers within their organization, fostering diversity and talent acquisition.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 9,
      title: "Entrepreneurial Excellence Award",
      description: "This award honors an ITL who has demonstrated exceptional entrepreneurial spirit, innovation, and leadership in the business sector. Whether through founding a startup, leading a successful business venture, or driving innovation within an established company, this individual exemplifies excellence in business acumen, strategic thinking, and transformative leadership.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 10,
      title: "The Nobel Award",
      description: "This flagship award of the year recognizes an outstanding ITL who has demonstrated exceptional legal skills, consistently provides outstanding legal services, and is highly respected by peers and the broader Canadian legal community. The recipient exemplifies the qualities of a model ITL, excelling both in the practice of law and in their professional contributions. In addition, this ITL has shown exemplary leadership, advocacy, and dedication to advancing the interests and rights of internationally trained lawyers within the Canadian legal profession. They are celebrated for their exceptional mentorship and for being a respected and exemplary figure in the Canadian legal community",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
];


const AwardsSection = () => {
    const [expandedIds, setExpandedIds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const toggleExpand = (id) => {
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="mt-24">
            {/* Hero Section */}
            <div
                className="h-96 flex justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${hero3})` }}
            ></div>

            {/* Awards Content */}
            <div className="px-6 py-12 text-gray-800">
                <h2 className="text-3xl text-textPrimary font-extrabold text-center mb-8">
                    The ITL Conference &#39;25 Awards
                </h2>
                <p className="text-center mb-4">
                At the upcoming ITL Conference, we will be recognizing the remarkable achievements and contributions of internationally trained lawyers (ITLs) and the stakeholders, community partners and law firms that support them. These awards celebrate excellence, innovation, and leadership within the Canadian legal profession, fostering a culture of equity, diversity, inclusion, and collaboration.

                </p>
                <p className="text-center">
                We invite ITLs, law firms, and legal professionals across Canada to participate in this prestigious recognition of talent and dedication. Below are the award categories designed to honor outstanding individuals, organizations, and initiatives that have made a significant impact on the Canadian legal landscape.
                </p>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                    {isLoading ? (
                        <div className="col-span-full flex justify-center items-center">
                            <div className="loader">Loading...</div>
                        </div>
                    ) : (
                        awards.map((award) => (
                            <div
                                key={award.id}
                                className="bg-[#FEFBF6] text-[#331D2C] p-6 rounded-lg shadow-lg flex flex-col items-center"
                            >
                                <img
                                    src={award.icon}
                                    alt={award.title}
                                    className="w-20 h-20"
                                    loading="lazy"
                                />
                                <h4 className="mt-4 text-textPrimary font-black text-md text-center">
                                    {award.title}
                                </h4>
                                <p className="mt-2 text-center">
                                    {expandedIds.includes(award.id)
                                        ? award.description
                                        : `${award.description.slice(0, 100)}...`}
                                </p>
                                <button
                                    onClick={() => toggleExpand(award.id)}
                                    className="text-textPrimary font-bold underline cursor-pointer mt-2 focus:outline-none transition duration-200"
                                    aria-expanded={expandedIds.includes(award.id)}
                                >
                                    {expandedIds.includes(award.id) ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Nomination Button */}
                <div className="text-center mt-12">
                    <a
                        href="/nominate"
                        className="inline-block bg-wine text-white font-bold py-3 px-8 rounded hover:bg-deepBlue transition-colors duration-300"
                    >
                        Click here to nominate
                    </a>
                </div>
                <p className='mt-8 text-center text-lg'>A selection committee comprised of esteemed members of the Canadian legal community will thoroughly evaluate the nominations and determine the recipients of the awards based on the quality and relevance of the submitted materials. This committee, known for its commitment to excellence and integrity, will ensure a rigorous and impartial assessment process, recognizing outstanding contributions under each category.</p>
            </div>
        </div>
    );
};

export default AwardsSection;
