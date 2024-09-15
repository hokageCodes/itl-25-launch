

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
      id: 5,
      title: "Lifetime Achievement Award",
      description: "Presented to an esteemed ITL who has made a lasting impact on promoting diversity, equity, and inclusion within the Canadian legal profession throughout their career.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 6,
      title: "Rising Star Award",
      description: "Acknowledging an up-and-coming ITL who shows exceptional promise, leadership, and dedication to advancing international law and diplomacy within the Canadian legal context.",
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
      description: "This is the flagship award of the year. This award recognizes an outstanding ITL who has shown exemplary leadership, advocacy, and dedication to advancing the interests and rights of internationally trained lawyers within the Canadian legal profession. This ITL would have displayed exceptional mentorship qualities and be a model and exemplary ITL in the Canadian Legal community.",
      icon: "/assets/plaque.png", // Placeholder path, replace with actual path to icon
    },
  ];

const AwardsPage = () => {
  return (
    <section className="py-32 bg-gray-100" id="awards">
      <div className="container mx-auto px-6">
        <h2 className="text-deepBlue text-4xl font-bold text-center mb-8">
          Awards & Recognitions
        </h2>
        <p className="text-darkBrown text-center text-lg mb-12">
          Celebrate the exceptional achievements with our awards listed in chronological order.
        </p>

        <div className="relative">
          {awards.map((award, index) => (
            <div key={award.id} className={`mb-12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-1/3">
                  <img src={award.icon} alt={`${award.title} icon`} className="w-24 h-24 object-cover mb-4 mx-auto" />
                </div>
                <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-deepBlue mb-2">{award.title}</h3>
                  <p className="text-darkBrown text-base">{award.description}</p>
                </div>
              </div>
              {index < awards.length - 1 && (
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-gray-300 h-1 w-1 rounded-full left-1/2" style={{ left: `${index % 2 === 0 ? 'calc(33% + 1rem)' : 'calc(67% - 1rem)'}` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsPage;
