import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import ProfessionalProfile from '@/components/ProfessionalProfile';
import RaindropMethod from '@/components/RaindropMethod';
import CurriculumPlanner from '@/components/CurriculumPlanner';
import ResearchLeadership from '@/components/ResearchLeadership';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-64 p-6 md:p-10 lg:p-12 max-w-7xl">
        <HeroSection />
        <ProfessionalProfile />

        <hr className="section-sparkle my-16" />

        <RaindropMethod />

        <hr className="section-sparkle my-16" />

        <CurriculumPlanner />

        <hr className="section-sparkle my-16" />

        <ResearchLeadership />

        <footer className="mt-16 py-8 border-t border-gray-200 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-white text-sm shadow-lg">
            ✦
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Guru Cemerlang Applicant Portal &copy; {new Date().getFullYear()} &mdash; Built with ❤️ using Next.js &amp; Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
