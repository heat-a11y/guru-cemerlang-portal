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

      <main className="flex-1 ml-64 p-6 md:p-10 lg:p-12 max-w-6xl">
        <HeroSection />
        <ProfessionalProfile />
        <hr className="my-16 border-gray-200" />
        <RaindropMethod />
        <hr className="my-16 border-gray-200" />
        <CurriculumPlanner />
        <hr className="my-16 border-gray-200" />
        <ResearchLeadership />

        <footer className="mt-16 py-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            Guru Cemerlang Applicant Portal &copy; {new Date().getFullYear()} &mdash; Built with Next.js &amp; Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
