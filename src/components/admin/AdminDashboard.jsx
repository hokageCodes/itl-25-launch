import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import { FaUserFriends, FaRegListAlt, FaUser, FaHandshake, FaChartBar } from 'react-icons/fa';  // Icons for analytics

const AdminAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalSubmissions: 0,
    registrationSubmissions: 0,
    volunteerSubmissions: 0,
    nominationSubmissions: 0,
    sponsorshipSubmissions: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      const firestore = getFirestore(app);
    
      try {
        const registrationQuerySnapshot = await getDocs(collection(firestore, 'registrationsSubmissions')); // Use correct collection name
        const volunteerQuerySnapshot = await getDocs(collection(firestore, 'volunteersSubmissions'));
        const nominationQuerySnapshot = await getDocs(collection(firestore, 'nominationSubmissions'));
        const sponsorshipQuerySnapshot = await getDocs(collection(firestore, 'sponsors'));
    
        const registrationCount = registrationQuerySnapshot.size;
        const volunteerCount = volunteerQuerySnapshot.size;
        const nominationCount = nominationQuerySnapshot.size;
        const sponsorshipCount = sponsorshipQuerySnapshot.size;
    
        const totalSubmissions = registrationCount + volunteerCount + nominationCount + sponsorshipCount;
    
        setAnalytics({
          totalSubmissions,
          registrationSubmissions: registrationCount,
          volunteerSubmissions: volunteerCount,
          nominationSubmissions: nominationCount,
          sponsorshipSubmissions: sponsorshipCount,
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };    

    fetchAnalytics();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-deepBlue">Admin Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Total Submissions Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaChartBar className="text-4xl text-wine mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Total <br /> Submissions</h3>
          <p className="text-3xl font-bold text-deepBlue">{analytics.totalSubmissions}</p>
        </div>

        {/* Registration Submissions Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaRegListAlt className="text-4xl text-butter mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Registration Submissions</h3>
          <p className="text-3xl font-bold text-deepBlue">{analytics.registrationSubmissions}</p>
        </div>

        {/* Volunteer Submissions Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaUserFriends className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Volunteer Submissions</h3>
          <p className="text-3xl font-bold text-deepBlue">{analytics.volunteerSubmissions}</p>
        </div>

        {/* Nomination Submissions Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaUser className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nomination Submissions</h3>
          <p className="text-3xl font-bold text-deepBlue">{analytics.nominationSubmissions}</p>
        </div>

        {/* Sponsorship Submissions Card */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaHandshake className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sponsorship Submissions</h3>
          <p className="text-3xl font-bold text-deepBlue">{analytics.sponsorshipSubmissions}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
