import AboutSection from './AboutSection';
import SpecializationSection from './SpecializationSection';
import ConcernsSection from './ConcernsSection';
import ExperienceSection from './ExperienceSection';
import RecreateSection from './resection';
import FeaturedSection from './Featured';
import AppointmentSection from './AppointmentSection';

const Profile = () => (
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8">
    {/* Left Section: 4 Grids */}
    <div className="col-span-2 grid grid-rows-6 gap-4">
      <AboutSection  />
      <SpecializationSection />
      <ConcernsSection />
      <ExperienceSection />
      <RecreateSection />
      <FeaturedSection />
    </div>
    {/* Right Section: Appointment */}
    <div>
      <AppointmentSection />
    </div>
  </div>
);

export default Profile;