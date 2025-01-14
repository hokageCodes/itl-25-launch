import { useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}
    >
      <div className="relative py-8" id="about-us">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-deepBlue space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black my-2">
                Welcome to The ITL Conference &#39;25
              </h2>

              <p className="text-md text-darkBrown lg:text-lg">
              The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada. The Conference taking place at The Westin Calgary, will feature different legal professionals, regulators, change makers, and other stakeholders committed to supporting ITLs in their legal practice journey in Canada. The ITL Conference is a joint effort of our partner organizations: The ITL Network, Global Lawyers of Canada, Joy ITL Initiative and ITL NCA NetworkS.
              </p>
              <div>
                <button
                  aria-label="Submit"
                  className="bg-wine text-white hover:bg-wine hover:text-cream rounded-md px-6 py-3 transition duration-300 ease-in-out"
                >
                  <a href="/registration">Register</a>
                </button>
              </div>
            </div>
            
            {/* Image Content with Tilt */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="transform -rotate-6 hover:rotate-0 transition duration-500 relative">
                {isLoading && (
                  <Skeleton
                    height={600}
                    width={600}
                    className="rounded-lg shadow-2xl"
                  />
                )}
                <img
                  src="../../assets/confe.webp"
                  alt="About the Conference display"
                  width={600}
                  height={600}
                  className={`rounded-lg shadow-2xl object-cover ${isLoading ? 'hidden' : 'block'}`}
                  onLoad={handleImageLoad}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
