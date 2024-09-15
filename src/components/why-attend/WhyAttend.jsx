
import { FaRegLightbulb, FaRegSmile, FaRegStar, FaRegHeart } from 'react-icons/fa';
import './whyattend.css';

const WhyAttend = () => {
  return (
    <div className="card-section-container">
      <div className="cards-container">
        <div className="card">
          <FaRegLightbulb />
          <h3>Innovative Ideas</h3>
          <p>Discover new and innovative ideas in the legal industry at our conference.</p>
        </div>
        <div className="card">
          <FaRegSmile />
          <h3>Networking</h3>
          <p>Meet and network with legal professionals and stakeholders from across the globe.</p>
        </div>
        <div className="card">
          <FaRegStar />
          <h3>Expert Speakers</h3>
          <p>Learn from industry experts and thought leaders through engaging sessions.</p>
        </div>
        <div className="card">
          <FaRegHeart />
          <h3>Supportive Community</h3>
          <p>Join a community dedicated to supporting Internationally Trained Lawyers (ITLs).</p>
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
