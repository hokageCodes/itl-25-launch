import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebaseConfig';

const db = getFirestore(app);
const storage = getStorage(app);

const formSteps = [
  { title: "Nominator's Information", fields: ["Nominator's Name", "Nominator's Telephone Number", "Nominator's Email"] },
  { title: "Nominee's Information", fields: ["Nominee's Name", "Nominee's Email"] },
  { title: 'Nomination Details', fields: ['Nomination Category', 'Detailed Reasons for Nominating', 'Supporting Links'] },
];

const nominationCategories = [
  'Diversity Champion',
  'Community Impact Award',
  'Leadership in Legal Education Award',
  'Trailblazer in Technology Award',
  'Rising Star Award',
  'Mentorship Excellence Award',
  'Innovative Recruitment Award',
  'Entrepreneurial Excellence Award',
  'The Nobel Award',
];

const MultiStepNominationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);

  const validateFields = () => {
    const currentFields = formSteps[currentStep].fields;
    const currentErrors = {};
    let isValid = true;

    currentFields.forEach((field) => {
      if (field !== 'Supporting Links' && !formData[field]) {
        currentErrors[field] = `${field} is required`;
        isValid = false;
      }
      if (field.includes('Email') && formData[field] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field])) {
        currentErrors[field] = 'Invalid email address';
        isValid = false;
      }
    });

    setErrors(currentErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateFields()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      setLoading(true);
  
      try {
        let fileURL = null;
  
        if (file) {
          const fileRef = ref(storage, `supportingDocuments/${file.name}`);
          const snapshot = await uploadBytes(fileRef, file);
          fileURL = await getDownloadURL(snapshot.ref);
        }
  
        await addDoc(collection(db, 'nominationSubmissions'), {
          ...formData,
          supportingDocument: fileURL,
          timestamp: new Date(),
        });
  
        setSuccess(true);
        setFormData({});
        setFile(null);
        setCurrentStep(0);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  


  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">{formSteps[currentStep].title}</h2>
        <div>
          {formSteps[currentStep].fields.map((field, idx) => (
            <div key={idx} className="mb-4">
              {field === 'Nomination Category' ? (
                <select
                  className="w-full border px-4 py-2 rounded"
                  value={formData[field] || ''}
                  onChange={(e) => handleInputChange(e, field)}
                >
                  <option value="">Select Category</option>
                  {nominationCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="w-full border px-4 py-2 rounded"
                  placeholder={field}
                  value={formData[field] || ''}
                  onChange={(e) => handleInputChange(e, field)}
                />
              )}
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
          {currentStep === 2 && (
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Supporting Document</label>
              <input
                type="file"
                className="w-full border px-4 py-2 rounded"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <button
              onClick={previousStep}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          {currentStep < formSteps.length - 1 ? (
            <button
              onClick={nextStep}
              className="bg-wine text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
            onClick={handleSubmit}
            className={`bg-deepBlue text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold">Success!</h2>
            <p>Your nomination has been successfully submitted.</p>
            <button className='p-8 rounded-lg bg-black text-white'>
              <a href="/">Go back to homepage</a>
            </button>
          </div>
        </div>
      )}
      <p>Need assistance? Contact support at info@itlconference.ca.</p>
    </div>
  );
};

export default MultiStepNominationForm;
