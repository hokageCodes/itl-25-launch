import { motion } from 'framer-motion';

export const MeetOurKeynoteSpeaker = () => {
  return (
    <section className="py-16" id="keynote-speaker">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Speaker Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 20, duration: 0.9 }}
        >
          <img
            src="/assets/keynote.webp"
            alt="Keynote Speaker"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text and CTA */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 20, duration: 0.9 }}
        >
          <h2 className="text-deepBlue text-4xl font-bold mb-4">
            Meet Our Keynote Speaker
          </h2>
          <p className="text-darkBrown text-lg mb-6">
            Watch this space for more details as we unveil the keynote speaker for the ITL Conference 2025.
          </p>
          <a
            href="#register"
            className="bg-wine text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-deepBlue hover:text-cream transition duration-300"
          >
            See all Speakers
          </a>
        </motion.div>
      </div>
    </section>
  );
};
