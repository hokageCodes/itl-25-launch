/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const KennysSection = () => {
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
      <div className="relative py-8" id="kenny-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-deepBlue space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black my-2">
                Welcome to The ITL Conference '25
              </h2>

              <p className="text-md text-darkBrown lg:text-lg">
                On behalf of the ITL Conference Organizers and the planning team, I am thrilled to welcome
                you to the inaugural Internationally Trained Lawyers (ITL) Conference.
                This conference, themed "Crossing Borders, Breaking Barriers," will bring together ITLs from
                across Canada and beyond, creating a space for meaningful dialogue and collaboration.
                Over the course of two days, we will host thought-provoking panel discussions, approved 
                CPD sessions, interactive workshops, and a prestigious awards gala to recognize 
                outstanding ITLs and their allies. <br /> <br />
                Our goal is to celebrate the contributions of ITLs, share valuable insights, and create lasting 
                connections that will help shape a more inclusive and diverse legal profession. We look 
                forward to engaging with professionals who share this vision and are committed to breaking 
                down the barriers that still exist in our profession.
                Thank you for being part of this historic event. We look forward to seeing you there!
              </p>
              <p className="text-md text-darkBrown lg:text-lg mt-6 font-extrabold">
                Kenny Okunola<br />
                Conference Planning Chair
              </p>
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
                  src="/assets/kenny-speak.png"
                  alt="Kenny Okunola"
                  width={400}
                  height={100}
                  className={`rounded-lg shadow-2xl object-contain ${isLoading ? 'hidden' : 'block'}`}
                  onLoad={handleImageLoad}
                  style={{ width: '700px', height: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KennysSection;
