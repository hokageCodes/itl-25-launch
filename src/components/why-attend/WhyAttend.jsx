import { FaGlobeAmericas, FaChalkboardTeacher, FaGlobe, FaBriefcase } from 'react-icons/fa';
import './whyattend.css';

const WhyAttend = () => {
  return (
    <div className="card-section-container">
      <div className="cards-container">
        <div className="card">
          <FaGlobeAmericas />
          <h3>Networking</h3>
          <p>Connect with fellow legal professionals and a supportive community of ITLs facing similar challenges and opportunities.</p>
        </div>
        <div className="card">
          <FaChalkboardTeacher />
          <h3>Professional Development</h3>
          <p>Hear from leading professionals in private practice, in-house, government agencies and experts from across all practice areas.</p>
        </div>
        <div className="card">
          <FaGlobe />
          <h3>Cultural Competency</h3>
          <p>Understanding and navigating cultural differences in legal practice is crucial. The conference will equip you with the knowledge and skills needed to thrive in a diverse and multicultural legal environment.</p>
        </div>
        <div className="card">
          <FaBriefcase />
          <h3>Career Opportunities</h3>
          <p>Connect with employers and recruiters. The Conference will feature career development strategies, job search techniques, and other opportunities to differentiate yourself in the job market.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
