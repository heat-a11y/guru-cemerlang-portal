import CareerTimeline from './CareerTimeline';
import PerformanceMetrics from './PerformanceMetrics';
import AwardsGrid from './AwardsGrid';

export default function ProfessionalProfile() {
  return (
    <section id="profile">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Professional Profile</h2>
        <p className="text-gray-500 mt-1">Career trajectory, performance excellence, and professional recognition</p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Interactive Career Timeline</h3>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Mapping two decades of educational service from initial appointment (DG41) through to Master Educator ranks (DG44–DG54).
        </p>
        <CareerTimeline />
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Performance Metrics Tracker</h3>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Annual PBPPP performance excellence scores demonstrating sustained growth and outstanding achievement.
        </p>
        <PerformanceMetrics />
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h3 className="text-lg font-bold text-primary">Accolades & Recognition</h3>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Awards and honors reflecting consistent excellence in teaching, innovation, and service.
        </p>
        <AwardsGrid />
      </div>
    </section>
  );
}
