import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import * as IrcaRegisters from './pages/IrcaRegisters';
import * as CpliRegisters from './pages/CpliRegisters';
import * as OdicRegisters from './pages/OdicRegisters';
import OdicHalfYearlyReport from './pages/OdicHalfYearlyReport'; // Import the new report page
import LoginPage from './pages/LoginPage';
import { useAuth } from './contexts/AuthContext';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activePage, setActivePage] = useState('home');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      // IRCA
      case 'irca_referral_out':
        return <IrcaRegisters.IrcaReferralOutRegister />;
      case 'irca_miscellaneous':
        return <IrcaRegisters.IrcaMiscellaneousRegister />;
      case 'irca_medical_emergency':
        return <IrcaRegisters.IrcaMedicalEmergencyRegister />;
      case 'irca_individual_counselling':
        return <IrcaRegisters.IrcaIndividualCounsellingRecord />;
      case 'irca_family_counselling':
        return <IrcaRegisters.IrcaFamilyCounsellingRecord />;
      case 'irca_group_session':
        return <IrcaRegisters.IrcaGroupSessionRecord />;
      case 'irca_iec_bcc':
        return <IrcaRegisters.IrcaIecBccRegister />;
      case 'irca_network_directory':
        return <IrcaRegisters.IrcaNetworkDirectory />;
      // CPLI
      case 'cpli_medical_first_aid':
        return <CpliRegisters.CpliMedicalFirstAidRegister />;
      case 'cpli_referral_out':
        return <CpliRegisters.CpliReferralOutRegister />;
      case 'cpli_miscellaneous':
        return <CpliRegisters.CpliMiscellaneousRegister />;
      case 'cpli_individual_counselling':
        return <CpliRegisters.CpliIndividualCounsellingRecord />;
      case 'cpli_family_counselling':
        return <CpliRegisters.CpliFamilyCounsellingRecord />;
      case 'cpli_group_session':
        return <CpliRegisters.CpliGroupSessionRecord />;
      case 'cpli_peer_educator_logbook':
        return <CpliRegisters.CpliPeerEducatorLogbook />;
      // ODIC
      case 'odic_ipd':
        return <OdicRegisters.OdicIpdRegister />;
      case 'odic_opd':
        return <OdicRegisters.OdicOpdRegister />;
      case 'odic_half_yearly_report': // Add the new case for the report
        return <OdicHalfYearlyReport />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="w-full h-full bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;