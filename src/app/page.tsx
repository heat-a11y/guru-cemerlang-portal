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

      <main className="flex-1 ml-0 md:ml-64 p-4 sm:p-6 md:p-10 lg:p-12 max-w-7xl pt-20 md:pt-6">
        <div className="mt-10 md:mt-0">
          <HeroSection />
        </div>
        <ProfessionalProfile />

        <hr className="section-batik my-12 md:my-16" />

        <RaindropMethod />

        <hr className="section-batik my-12 md:my-16" />

        <CurriculumPlanner />

        <hr className="jalur-gemilang-bar my-12 md:my-16" />

        <ResearchLeadership />

        <footer className="mt-12 md:mt-16 py-8 border-t border-gray-200 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#CC0000] to-[#000080] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
            ✦
          </div>
          <div className="flex justify-center gap-1.5 mb-2">
            <span className="w-3 h-3 rounded-full bg-[#CC0000]"></span>
            <span className="w-3 h-3 rounded-full bg-[#000080]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFCC00]"></span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Portal Pemohon Guru Cemerlang &copy; {new Date().getFullYear()} &mdash; Dibina dengan ❤️ menggunakan Next.js &amp; Tailwind CSS
          </p>
          <p className="text-xs text-gray-400 mt-1">Malaysia &mdash; Tanah Airku</p>
        </footer>
      </main>
    </div>
  );
}
