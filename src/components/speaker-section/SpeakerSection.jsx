export const MeetOurKeynoteSpeaker = () => {
    return (
      <section className="py-16" id="keynote-speaker">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Speaker Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/keynote.webp" 
              alt="Keynote Speaker"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text and CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-deepBlue text-4xl font-bold mb-4">
              Meet Our Keynote Speaker
            </h2>
            <p className="text-darkBrown text-lg mb-6">
            “Watch this space for more details as we unveil the keynote speaker for the ITL Conference 2025
            </p>
            <p className="text-darkBrown text-lg mb-6">
              Dont miss his captivating session, filled with innovative insights and real-world applications for lawyers worldwide.
            </p>
            <a
              href="#register"
              className="bg-wine text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-deepBlue hover:text-cream transition duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  