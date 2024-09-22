/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firestore = getFirestore(app);

const SuccessComponent = ({ onBack }) => (
  <div className="p-8 mt-24 md:border-l md:w-2/3">
    <div className="flex items-center justify-center text-wine">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 19a9 9 0 100-18 9 9 0 000 18zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 11a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="text-center text-lg font-semibold text-wine">Thank you for submitting!</div>
    <div className="text-center mt-4">
      <button aria-label="Back" onClick={onBack} className="text-deepBlue underline">Go back home</button>
    </div>
  </div>
);

const PreRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalLocation = location === 'Other' ? otherLocation : location;

    setSuccess(false);

    try {
      if (!name || !email || !phoneNumber || !location) {
        toast.error('Please fill out all required fields.');
        return;
      }

      setLoading(true);

      await addDoc(collection(firestore, 'preRegistrations'), {
        name,
        email,
        phoneNumber,
        location: finalLocation,
        timestamp: new Date(),
      });
      setName('');
      setEmail('');
      setPhoneNumber('');
      setLocation('');
      setOtherLocation('');

      setSuccess(true);
      toast.success('Pre-registration successful!');
    } catch (error) {
      console.error('Error submitting pre-registration:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <ToastContainer />
      {
        isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="mt-8 min-h-screen flex justify-center items-center px-4 pt-16 md:pt-0">
            <div className="flex flex-col md:flex-row bg-cream shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
              <div className="p-8 space-y-4 md:w-1/2 bg-deepBlue text-cream">
                <h2 className="text-3xl font-black text-cream pt-24">Why Pre-Register?</h2>
                <p className="text-md">
                  Pre-registering for the ITL Conference gives you early access to tickets, exclusive updates, and more. Don&#39;t miss out on this opportunity to connect with industry leaders and peers.
                </p>
              </div>
              {success ? (
                <SuccessComponent onBack={handleGoBack} />
              ) : (
                <div className="p-8 md:border-l md:w-2/3">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-darkBrown">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-darkBrown">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-darkBrown">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-darkBrown">Location</label>
                      <select
                        id="location"
                        name="location"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="">Select Province or Territory</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Yukon">Yukon</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {location === 'Other' && (
                      <div>
                        <label htmlFor="otherLocation" className="block text-sm font-medium text-darkBrown">Please Specify</label>
                        <input
                          id="otherLocation"
                          name="otherLocation"
                          type="text"
                          required={location === 'Other'}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                          value={otherLocation}
                          onChange={(e) => setOtherLocation(e.target.value)}
                        />
                      </div>
                    )}
                    <button
                      aria-label="Submit"
                      type="submit"
                      className={`w-full py-2 px-4 bg-wine text-white hover:bg-deepBlue rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? 'Loading...' : 'Submit'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )
      }
    </>
  );
};

export default PreRegister;
