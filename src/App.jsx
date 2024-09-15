import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';
import ConferencePage from './pages/ConferencePage';
import PreRegister from './pages/PreRegister';
import SpeakersPage from './pages/SpeakersPage';
import LeadershipPage from './pages/team/LeadershipPage';
import PartnersPage from './pages/team/PartnersPage';
import PlanningPage from './pages/team/PlanningPage';
import TeamPage from './pages/team/TeamPage';
import FAQsPage from './pages/FAQsPage';
import AwardsPage from './pages/AwardsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/itl25-conference" element={<ConferencePage />} />
            <Route path="/pre-register" element={<PreRegister />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/faq" element={<FAQsPage />} />
            <Route path="/awards" element={<AwardsPage />} />

            {/* Nested routes for team */}
            <Route path="/team" element={<TeamPage />}>
              <Route path="leadership" element={<LeadershipPage />} />
              <Route path="partners" element={<PartnersPage />} />
              <Route path="planning" element={<PlanningPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
