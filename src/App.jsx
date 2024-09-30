import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainLayout from './components/admin/layouts/MainLayout'; 
import AdminLayout from './components/admin/layouts/AdminLayout';
import LandingPage from './pages/LandingPage';
import ConferencePage from './pages/ConferencePage';
import PreRegister from './pages/PreRegister';
import SpeakersPage from './pages/SpeakersPage';
import LeadershipPage from './pages/team/LeadershipPage';
import PartnersPage from './pages/team/PartnersPage';
import PlanningPage from './pages/team/PlanningPage';
import TeamPage from './pages/team/TeamPage';
import FAQsPage from './pages/FAQsPage';
import AwardsPage from './pages/AwardsPage';
import Volunteer from './pages/VolunteersPage';
import SponsorForm from './components/sponsor-form/SponsorForm';
import SponsorsPage from './pages/SponsorsPage';
import MultiStepForm from './pages/NominationPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminAnalytics from './components/admin/AdminDashboard';
import VolunteersSub from './components/admin/submissions/VolunteersSub';
import RegistrationsSub from './components/admin/submissions/RegistrationSub';
import NominationsSub from './components/admin/submissions/NominationsSub';
import AdminPreRegistrations from './components/admin/collections/AdminPreRegistrations';
import AdminVolunteersSubmissions from './components/admin/collections/AdminVolunteers';
import AdminNominations from './components/admin/collections/AdminNominations';
import AdminSponsorship from './components/admin/collections/AdminSponsorship';
import ProtectedRoute from '../ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import RegistrationPricing from './components/pricing/RegistrationPricing';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
          <Route path="/itl25-conference" element={<MainLayout><ConferencePage /></MainLayout>} />
          <Route path="/pre-register" element={<MainLayout><PreRegister /></MainLayout>} />
          <Route path="/speakers" element={<MainLayout><SpeakersPage /></MainLayout>} />
          <Route path="/sponsors-form" element={<MainLayout><SponsorForm /></MainLayout>} />
          <Route path="/our-sponsors" element={<MainLayout><SponsorsPage /></MainLayout>} />
          <Route path="/faq" element={<MainLayout><FAQsPage /></MainLayout>} />
          <Route path="/awards" element={<MainLayout><AwardsPage /></MainLayout>} />
          <Route path="/volunteer" element={<MainLayout><Volunteer /></MainLayout>} />
          <Route path="/nominate" element={<MainLayout><MultiStepForm /></MainLayout>} />
          <Route path="/registration" element={<MainLayout><RegistrationPricing /></MainLayout>} />

          {/* Nested routes for team */}
          <Route path="/team" element={<MainLayout><TeamPage /></MainLayout>}>
            <Route path="leadership" element={<LeadershipPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="planning" element={<PlanningPage />} />
          </Route>

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<AdminAnalytics />} />
                  <Route path="submissions/volunteers" element={<VolunteersSub />} />
                  <Route path="submissions/registrations" element={<RegistrationsSub />} />
                  <Route path="submissions/nominations" element={<NominationsSub />} />
                  <Route path="submissions/sponsorship" element={<AdminSponsorship />} />
                  <Route path="submissions/admin-registrations" element={<AdminPreRegistrations />} />
                  <Route path="submissions/admin-volunteers" element={<AdminVolunteersSubmissions />} />
                  <Route path="submissions/admin-nominations" element={<AdminNominations />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />

          {/* Redirect to home if route not found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
