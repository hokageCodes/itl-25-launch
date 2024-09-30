import SponsorForm from "../components/sponsor-form/SponsorForm";

const sponsorsData = {
  "Title Sponsor": [
    { id: 1, logo: '/assets/default.png', name: 'Title Sponsor 1' },
  ],
  "Platinum Sponsor": [
    { id: 1, logo: '/assets/default.png', name: 'Platinum Sponsor 1' },
  ],
  "Diamond Sponsor": [
    { id: 1, logo: '/assets/gowling.png', name: 'Gowling WLG' },
  ],
  "Gold Sponsor": [
    { id: 1, logo: '/assets/law-society.png', name: 'Law Society of Alberta' },
    { id: 2, logo: '/assets/Westin.png', name: 'Westin Hotels & Resorts' },
    { id: 3, logo: '/assets/Osgoode.png', name: 'Westin Hotels & Resorts' },
  ],
  "Session Sponsor": [
    { id: 1, logo: '/assets/CCPLE.png', name: 'Session Sponsor 1' },
  ],
  "Exhibition Sponsor": [
    { id: 1, logo: '/assets/unicalgary.png', name: 'University of Calgary' },
  ],
  "Partners": [
    { id: 1, logo: '/assets/default.png', name: 'Partners Sponsor 1' }, 
  ],
};

const SponsorsPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Message Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center text-deepBlue mb-4">Meet Our Sponsors</h1>
          <p className="text-lg text-center text-darkBrown">
            This is your invitation to partner with us for the ITL Conference.
            <br />
            We offer a range of sponsorship options, each designed to provide maximum exposure and benefits to our partners.
            <br />
            Whether you are looking to make a significant impact as a Title Sponsor or engage as a Session Sponsor, we have options that cater to different levels of commitment and exposure.
            <br />
            Please contact us directly to confirm or discuss any sponsorship opportunities for the ITL Conference 2025 at <a href="mailto:info@itlconference.ca" className="text-wine underline">info@itlconference.ca</a> or by downloading the sponsorship package below.
          </p>
        </div>

        {/* PDF Links and Intro Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-darkBrown mb-8">
            To view our complete package in English and French, click the links below.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="/assets/english.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-butter text-deepBlue font-semibold py-3 px-6 rounded hover:bg-deepBlue hover:text-white transition duration-300"
            >
              Sponsorship Package (English)
            </a>
            <a
              href="/assets/french.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-butter text-deepBlue font-semibold py-3 px-6 rounded hover:bg-deepBlue hover:text-white transition duration-300"
            >
              Sponsorship Package (French)
            </a>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="my-12 border-t border-butter" />

        {/* Sponsor Categories */}
        {Object.keys(sponsorsData).map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h2 className="text-2xl font-semibold text-center text-deepBlue mb-6">{category}</h2>
            
            {/* Sponsor Logos */}
            <div className="flex justify-center flex-wrap space-x-8">
              {sponsorsData[category].map((sponsor) => (
                <div key={sponsor.id} className="p-4">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="h-32 w-auto object-contain border" />
                </div>
              ))}
            </div>

            {/* Horizontal Rule */}
            {index < Object.keys(sponsorsData).length - 1 && (
              <hr className="my-12 border-t border-butter" />
            )}
          </div>
        ))}

        {/* Sponsor Form */}
        <div className="mt-12">
          <SponsorForm />
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
