import { useState } from 'react';
import Header from '@/components/Header';
import AuditModal from '@/components/AuditModal';
import Hero from '@/components/Hero';
import WhatIsAutomation from '@/components/WhatIsAutomation';
import WhoItsFor from '@/components/WhoItsFor';
import CredibilitySignals from '@/components/CredibilitySignals';
import AuditOffer from '@/components/AuditOffer';
import WhatHappensNext from '@/components/WhatHappensNext';
import FinalCTA from '@/components/FinalCTA';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Header onCTA={openModal} />
      <Hero onCTA={openModal} />
      <WhatIsAutomation />
      <WhoItsFor />
      <CredibilitySignals />
      <AuditOffer onCTA={openModal} />
      <WhatHappensNext />
      <FinalCTA onCTA={openModal} />
      <AuditModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
